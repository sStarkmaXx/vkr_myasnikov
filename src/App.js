import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import HeaderConteiner from './components/Header/HeaderConteiner'
import ContentConteiner from './components/content/ContentConteiner';
import NavBarConteiner from './components/NavBar/NavBarConteiner';
import FooterConteiner from './components/footer/FooterComteiner';


function App(props) {

  /*let cards = props.store.state.catalog.map(item => {
    return (
      <Route path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={props.dispatch} />} />
    )
  })*/

  return (
    <div className="App">
      <div className="HeadCont">
      <HeaderConteiner/>
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
    </div>
  );
}

export default App;
