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
          let bascetItem = store.getState().basket.basket.basket.map(item => {
            return (
              <Route path="/basket" render={() => <BasketItem item={item} dispatch={store.dispatch}/>} />
            )
          })
          return (
            <div>
              {bascetItem}
              <div className={classes.totalBasket}>В корзине {store.getState().basket.basket.totalItemCount} элемент(ов) на общую сумму {store.getState().basket.basket.totalsumm} ₽.</div>
            </div>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default BasketConteiner;

