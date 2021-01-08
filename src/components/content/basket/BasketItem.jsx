import { React } from 'react';
import classes from './BasketItem.module.css';





const BasketItem = (props) => {
  let url = "url("+props.item.img+")";
  let itemId = props.item.id;
  let plus = () =>{
    let action = {
      type: "ITEM_COUNT_PLUS",
      id:itemId
    }
    props.dispatch(action)
  }

  let minus = () =>{
    let action = {
      type: "ITEM_COUNT_MINUS",
      id:itemId
    }
    props.dispatch(action)
  }

  let del = () =>{
    let action = {
      type: "ITEM_DEL",
      id:itemId
    }
    props.dispatch(action)
  }

  let summ = props.item.count*props.item.price;

  return (
    <div className={classes.basketItem}>
      <div className={classes.img} style={{backgroundImage:url}}></div>
      <div className={classes.name}>{props.item.name}</div>
      <div className={classes.count}>
        <button className={classes.minus} onClick={minus}>-</button>
        <div className={classes.input}>{props.item.count}</div>
        <button className={classes.plus} onClick={plus}>+</button>
        <button className={classes.del} onClick={del}>Удалить</button>
      </div>
      <div className={classes.price}>Цена {summ}</div>
    </div>
  );
}

export default BasketItem;

