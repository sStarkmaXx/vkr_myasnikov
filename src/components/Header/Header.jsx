import { React } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import imgBasket from '../../pics/basket/iconmonstr-shopping-cart-2-24.png';

const Header = (props) => {

  return (
    <div className={classes.appHeader}>
      <div className={classes.logo} />
      <div className={classes.search}>
        <input type="text" name="search" placeholder="Поиск"></input>
        <button type="button" className={classes.btnSearch}>Поиск</button>
      </div>
      <div className={classes.number}>8-123-456-78-90</div>
      <div className={classes.categories}>Категории товаров</div>
      <div className={classes.different}>
        <NavLink to="/shops" activeClassName={classes.activeLink}>Магазины</NavLink>
        <NavLink to="/delivery" activeClassName={classes.activeLink}>Доставка</NavLink>
        <NavLink to="/payment" activeClassName={classes.activeLink}>Способы оплаты</NavLink>
      </div>
      <div className={classes.basket}>
        <NavLink to="/basket">Корзина</NavLink>
      </div>
      <div onClick={props.login} className={classes.btn}>Войти</div>
    </div>
  );
}

export default Header;
