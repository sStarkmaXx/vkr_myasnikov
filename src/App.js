import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import LeftNavBar from './components/NavBar/LeftNavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import AllContent from './components/allContent/AllContent';
import Cards from './components/cards/Cards';
import ItemInfo from './components/ItemInfo';




function App(props) {

  let route = props.catalog.map(item =>{
    return(
      <Route path={"/catalog/"+item.id} render={()=> <Cards items={item.items} addII={props.addII}/>}/>
    )
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrap">
          <LeftNavBar catalog={props.catalog}/>
          <Route path='/home' component={AllContent}/>
          <Route path='/catalog/itemInfo' render={()=> <ItemInfo img={props.curentInfo.img} name={props.curentInfo.name} price={props.curentInfo.price}/>}/>
          {route}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
