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
              <Route path="/basket" render={() => <BasketItem item={item}/>} />
            )
          })
          return (
            <div>
              {bascetItem}
            </div>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default BasketConteiner;

