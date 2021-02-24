import { React } from 'react';
import StoreContext from '../../StoreContext';
import { Route } from 'react-router-dom';
import classes from './BasketConteiner.module.css';
import BasketItem from './BasketItem';
import { plusActionCreater, minusActionCreater, delActionCreater } from '../../../redux/reducers/basketItem-reducer';

const Basket = (props) => {
  let bascetItem = props.bascetItem.map(item => {
    return (
      <Route path="/basket" render={() => <BasketItem item={item}
        plus={props.plus}
        minus={props.minus}
        del={props.del} />} />
    )
  })
  return (
    <div className={classes.basketConteiner}>
      <div>
        {bascetItem}
        <div className={classes.totalBasket}>В корзине {props.totalItemCount} элемент(ов) на общую сумму {props.totalsumm} ₽.</div>
      </div>
    </div>
  )
}

/*let mapStateToProps = (state) =>{
        let bascetItem = store.getState().basket.basket.basket.map(item => {
    return (
      <Route path="/basket" render={() => <BasketItem item={item}
        plus={plus}
        minus={minus}
        del={del} />} />
    )
  })
  return {
        item: state.getState().basket.catalog[idInCatalog].items[idInItems],
    category: category,
    posts: state.getState().posts[category][params[5]],
    inBasket: state.getState().basket.catalog[idInCatalog].items[idInItems].inBasket,
    idInCatalog: idInCatalog,
    idInItems: idInItems
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
        addPost: (category, id, text)=>{
        dispatch(addPostActionCreater(category, id, text))
      },
    addItemInBasket: (selectItem, idInCatalog)=> {
        dispatch(addItemInBasketActionCreater(selectItem, idInCatalog))
      }
  }
}
const BasketConteiner = connect(mapStateToProps,mapDispatchToProps)(BasketItem);*/

export default Basket;

