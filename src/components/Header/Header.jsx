import { React } from 'react';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {

  return (
    <div className={classes.appHeader}>
      <div className={classes.logo}/>
      <Form inline>
        <FormControl type="text" placeholder="Поиск по сайту" className="mr-sm-2" />
        <Button variant="outline-info">Поиск</Button>
      </Form>
      <NavLink to="/basket" className="nav-link" className={classes.navLink}>Корзина</NavLink>
      <Button variant="info" onClick={props.login} className={classes.btn}>Войти</Button>
    </div>
  );
}

export default Header;
