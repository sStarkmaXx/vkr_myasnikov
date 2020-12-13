import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import LeftNavBar from './components/NavBar/LeftNavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import AllContent from './components/allContent/AllContent';
import Cards from './components/Cards';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrap">
          <LeftNavBar catalog={props.catalog}/>
          <Route path='/home' component={AllContent}/>
          <Route path='/catalog' render={()=> <Cards items={props.catalog}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
