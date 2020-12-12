import { React } from 'react';
import { Nav, Navbar, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './LeftNavBar.module.css';

const LeftNavBar = () => {
  return (
    <div className="App-leftNavBar">
        <Navbar bg="light" variant="light">
          <Nav className="flex-column" style={{padding:20}}>
            <NavLink to="/appliances" activeClassName={classes.activeLink}>Бытовая техника</NavLink>
            <NavLink to="/smartphones" activeClassName={classes.activeLink}>Смартфоны и гаджеты</NavLink>
            <NavLink to="/tv" activeClassName={classes.activeLink}>ТВ и Развлечения</NavLink>
            <NavLink to="/computers" activeClassName={classes.activeLink}>Компьютеры</NavLink>
            <NavLink to="/office" activeClassName={classes.activeLink}>Офис и Сеть</NavLink>
            <NavLink to="/catalog3" activeClassName={classes.activeLink}>Аксессуары</NavLink>
            <NavLink to="/catalog2" activeClassName={classes.activeLink}>Автотовары</NavLink>
            <NavLink to="/catalog1" activeClassName={classes.activeLink}>Инструменты</NavLink>
            <NavLink to="#">Услуги</NavLink>
          </Nav>
        </Navbar>
    </div>
  );
}

export default LeftNavBar;
