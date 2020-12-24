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
  debugger;
  let cards = props.state.catalog.map(item => {
    return (
      <Route path={"/catalog/" + item.category} render={() => <Cards item={item} itemInfo={itemInfo}/>} />
    )
  })

  function itemInfo(category,id) {
    let action = {type: "SELECT_ITEM",
                  id: {id},
                  category: {category}}
    props.dispatch(action);
  }

  function itemInfoRender(selectItem){
    if(selectItem.name==""){
      return cards;
    }else{
      return(
        <ItemInfo img={selectItem.img} name={selectItem.name} price={selectItem.price} />
      )
    }
  }

  return (
  
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="wrap">
            <LeftNavBar catalog={props.state.catalog.catalog} />
            <Route path='/home' component={AllContent} />
            {itemInfoRender(props.state.selectItem)}
            
          </div>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
