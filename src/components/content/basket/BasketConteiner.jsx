import { React } from 'react';
import StoreContext from '../../StoreContext';
import { Route } from 'react-router-dom';
import classes from './BasketConteiner.module.css';
import BasketItem from './BasketItem';




const BasketConteiner = () => {

  return (
    <div className={classes.basketConteiner}>
      <StoreContext.Consumer>
        {(store) => {
          let bascetItem = store.state.basket.map(item => {
            return (
              <Route path="/basket" render={() => <BasketItem item={item} dispatch={store.dispatch.bind(store)}/>} />
            )
          })
          /*if(store.state.basket.length==0){
            return(
              <div className={classes.basketEmpty}>Корзина пуста.</div>
            )
          }else{*/
          return (
            <div>
              {bascetItem}
              <div className={classes.totalBasket}>В корзине {store.state.totalItemCount} элемент(ов) на общую сумму {store.state.totalsumm} ₽.</div>
            </div>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default BasketConteiner;

