import { React } from 'react';
import classes from './BasketItem.module.css';





const BasketItem = (props) => {
  let url = "url("+props.item.img+")";
  return (
    <div className={classes.basketItem}>
      <div className={classes.img} style={{backgroundImage:url}}></div>
      <div className={classes.name}>{props.item.name}</div>
      <div className={classes.count}>
        <button className={classes.minus}>-</button>
        <input className={classes.input} value="1" type="num"/>
        <button className={classes.plus}>+</button>
        <button className={classes.del}>Удалить</button>
      </div>
      <div className={classes.price}>Цена {props.item.price}</div>
    </div>
  );
}

export default BasketItem;

