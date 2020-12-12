import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import LeftNavBar from './components/LeftNavBar';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import AllContent from './components/AllContent';
import Cards from './components/Cards';
import { render } from '@testing-library/react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Row>
          <LeftNavBar />
          <Route path='/home' component={AllContent}/>
          <Route path='/appliances' component={Cards}/>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
