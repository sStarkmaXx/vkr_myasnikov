import { React } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBarItem.module.css';



const NavBarItem = (props) =>{
  let path = "/catalog/"+ props.id;
  return(
      <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
  )
}

export default NavBarItem;
