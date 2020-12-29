import { React } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavBarItem from './NavBarItem';
import classes from './NavBarr.module.css';



const NavBarr = (props) => {

  let navBarItem = props.catalog.map(item => {
    return (
      <NavBarItem id={item.category} name={item.name}></NavBarItem>
    );
  }
  );
  return (
    <div className={classes.NavBar}>
      {navBarItem}
    </div>
  );
}

export default NavBarr;
