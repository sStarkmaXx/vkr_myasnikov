import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import LeftNavBar from './components/NavBar/LeftNavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import AllContent from './components/allContent/AllContent';
import Cards from './components/cards/Cards';
import ItemInfo from './components/ItemInfo';
import { Provider } from 'react-redux';


function App(props) {
  let route = props.state.catalog.catalog.map(item => {
    return (
      <Route path={"/catalog/" + item.url} render={() => <Cards items={item.items} />} />
    )
  })
  return (
  
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="wrap">
            <LeftNavBar catalog={props.state.catalog.catalog} />
            <Route path='/home' component={AllContent} />
            <Route path='/catalog/itemInfo' render={() => <ItemInfo img={props.curentInfo.img} name={props.curentInfo.name} price={props.curentInfo.price} />} />
            {route}
          </div>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
