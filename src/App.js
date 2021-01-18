import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderConteiner from './components/Header/HeaderConteiner'
import ContentConteiner from './components/content/ContentConteiner';
import NavBarConteiner from './components/NavBar/NavBarConteiner';
import FooterConteiner from './components/footer/FooterComteiner';
import LoginConteiner from './components/login/LoginConteiner';
import React from 'react';



function App(props) {

  /*let cards = props.store.state.catalog.map(item => {
    return (
      <Route path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={props.dispatch} />} />
    )
  })*/
  let loginElement = React.createRef();
  
  let renderLogin = () =>{
    loginElement.current.style.display = "grid";
  }

  let hideLogin = () =>{
    loginElement.current.style.display = "none";
  }

  return (
    <div className="App">
      <div className="underHead"></div>
      <div className="HeadCont">
      <HeaderConteiner login={renderLogin}/>
      </div>
      <div className="NavBarCont">
      <NavBarConteiner/>
      </div>
      <div className="ContCont">
      <ContentConteiner/>
      </div>
      <div className="FootCont">
      <FooterConteiner/>
      </div>
      <div ref={loginElement} className="loginCont">
      <LoginConteiner close={hideLogin}/>
      </div>
    </div>
  );
}

export default App;
