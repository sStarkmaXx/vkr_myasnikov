import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <NavLink to="/shops">Магазины</NavLink>
            <NavLink to="/delivery">Доставка</NavLink>
            <NavLink to="/payment">Способы оплаты</NavLink>
            
            <div className={classes.number}>8-123-456-78-90</div>
        </div>
    )
}

export default Footer;