import './App.css';
<<<<<<< Updated upstream
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
=======
import HeaderConteiner from './components/Header/HeaderConteiner'
import ContentConteiner from './components/content/ContentConteiner';
import NavBarConteiner from './components/NavBar/NavBarConteiner';
import FooterConteiner from './components/footer/FooterComteiner';
import LoginConteiner from './components/login/LoginConteiner';
import React from 'react';
import StoreContext from './components/StoreContext';




function App() {

  let loginElement = React.createRef();

  let renderLogin = () => {
    loginElement.current.style.display = "grid";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  
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
   
=======
    <div>
      <StoreContext.Consumer>
        {
          (store) => {
            return (
              <div className="App">
                <div className="underHead"></div>
                <div className="headCont">
                  <HeaderConteiner login={renderLogin} />
                </div>
                <div className="wrapCont">
                  <div className="NavBarCont">
                    <NavBarConteiner />
                  </div>
                  <div className="ContCont">
                    <ContentConteiner catalog = {store.getState().cardsPage.catalog}/>
                  </div>
                </div>
                <div className="FootCont">
                  <FooterConteiner />
                </div>
                <div ref={loginElement} className="loginCont">
                  <LoginConteiner close={hideLogin} />
                </div>
              </div>
            )
          }
        }
      </StoreContext.Consumer>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
