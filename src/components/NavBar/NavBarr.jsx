import { React } from 'react';
import NavBarItem from './NavBarItem';
import classes from './NavBarr.module.css';



const NavBarr = (props) => {

  let navBarItem = props.catalog.map(item => {
    return (
<<<<<<< HEAD
      <NavBarItem category={item.category} name={item.name}></NavBarItem>
=======
      <NavBarItem category={item.category} name={item.name} dispatch={props.dispatch}></NavBarItem>
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
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
