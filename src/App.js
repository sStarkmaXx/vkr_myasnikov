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
  
  let cards = props.store.state.catalog.map(item => {
    return (
      <Route path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={props.dispatch}/>} />
    )
  })

  return (
  
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="wrap">
            <LeftNavBar catalog={props.store.state.catalog} />
            <Route path='/home' component={AllContent} />
            <Route path='/itemInfo' render={()=> <ItemInfo img={props.store.selectItem.img} name={props.store.selectItem.name} price={props.store.selectItem.price} />} />
            {cards}
          </div>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
