import { React } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavBarItem from './NavBarItem';




const LeftNavBar = (props) => {
  return (
    <div className="App-leftNavBar">
        <Navbar bg="light" variant="light">
          <Nav className="flex-column" style={{padding:20}}>
            <NavBarItem id={props.catalog[0].id} name={props.catalog[0].name}></NavBarItem>
            <NavBarItem id={props.catalog[1].id} name={props.catalog[1].name}></NavBarItem>
            <NavBarItem id={props.catalog[2].id} name={props.catalog[2].name}></NavBarItem>
            <NavBarItem id={props.catalog[3].id} name={props.catalog[3].name}></NavBarItem>
            <NavBarItem id={props.catalog[4].id} name={props.catalog[4].name}></NavBarItem>
            <NavBarItem id={props.catalog[5].id} name={props.catalog[5].name}></NavBarItem>
            <NavBarItem id={props.catalog[6].id} name={props.catalog[6].name}></NavBarItem>
            <NavBarItem id={props.catalog[7].id} name={props.catalog[7].name}></NavBarItem>
            <NavLink to="#">Услуги</NavLink>
          </Nav>
        </Navbar>
    </div>
  );
}

export default LeftNavBar;
