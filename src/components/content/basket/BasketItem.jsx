import { React } from 'react';
import classes from './BasketItem.module.css';
import {delActionCreater, plusActionCreater, minusActionCreater} from '../../../redux/reducers/basketItem-reducer';




const BasketItem = (props) => {

  let url = "url("+props.item.img+")";
  let idInBasket = props.item.idInBasket;
  let placeInCatalog = props.item.placeInCatalog;
  let itemId = props.item.itemId;
  let count = props.item.count;
  
  let plus = () =>{
    props.dispatch(plusActionCreater(idInBasket,placeInCatalog,itemId))
  }

  let minus = () =>{
    props.dispatch(minusActionCreater(idInBasket,placeInCatalog,itemId,))
  }

  let del = () =>{
    props.dispatch(delActionCreater(idInBasket,count,idInBasket,placeInCatalog,itemId))
  }

  let summ = props.item.count*props.item.price;

  return (
    <div className={classes.basketItem}>
      <div className={classes.img} style={{backgroundImage:url}}></div>
      <div className={classes.name}>{props.item.name}</div>
      <div className={classes.count}>
        <div className={classes.minus} onClick={minus}>-</div>
        <div className={classes.input}>{count}</div>
        <div className={classes.plus} onClick={plus}>+</div>
        <div className={classes.del} onClick={del}>Удалить</div>
      </div>
      <div className={classes.price}>Цена: {summ} ₽</div>
    </div>
  );
}

export default BasketItem;

