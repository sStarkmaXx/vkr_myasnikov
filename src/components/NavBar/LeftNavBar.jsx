import { React } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavBarItem from './NavBarItem';




const LeftNavBar = (props) => {

  let navBarItem = props.catalog.map(item => {
    return (
        <NavBarItem id={item.url} name={item.name}></NavBarItem>
      );
    }
  );
  return (
    <div className="App-leftNavBar">
      <Navbar bg="light" variant="light">
        <Nav className="flex-column" style={{ padding: 20 }}>
          {navBarItem}
          <NavLink to="#">Услуги</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default LeftNavBar;
