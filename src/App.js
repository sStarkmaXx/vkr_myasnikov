import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  }

  let hideLogin = () => {
    loginElement.current.style.display = "none";
  }

  return (
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
                    <ContentConteiner catalog = {store.state.catalog}/>
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
  );
}

export default App;
