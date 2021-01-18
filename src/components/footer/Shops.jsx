import React from 'react';
import classes from './Footer.module.css';

const Shops = () => {
    return (
        <div className={classes.shops}>
        <h3>Адреса магазинов:</h3>
           <ul>
               <li>г. Томск, Ленина, дом 217, строение 2</li>
               <li>г. Томск, Иркутский, дом 54</li>
               <li>г. Томск, Мира, пр-кт, дом 48, корпус 3</li>
               <li>г. Томск, Фрунзе, дом 92, корпус Г</li>
               <li>г. Томск, Беринга, дом 10</li>
               <li>г. Томск, Красноармейская, д. 114</li>
               <li>г. Томск, пр-т Ленина, дом 189</li>
           </ul>
        </div>
    )
}

export default Shops;