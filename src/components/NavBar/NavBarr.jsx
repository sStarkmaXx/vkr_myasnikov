import { React } from 'react';
import NavBarItem from './NavBarItem';
import classes from './NavBarr.module.css';



const NavBarr = (props) => {

  let navBarItem = props.catalog.map(item => {
    return (
      <NavBarItem category={item.category} name={item.name} dispatch={props.dispatch}></NavBarItem>
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
