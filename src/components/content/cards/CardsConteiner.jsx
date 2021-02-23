import { React } from 'react';
import StoreContext from '../../StoreContext';
import { Route } from 'react-router-dom';
import Cards from './Cards';
import classes from './CardsConteiner.module.css';





const CardsConteiner = () => {
  
  return (
    <div className={classes.cards}>
      <StoreContext.Consumer>
        {(store) => {
          let cards = store.getState().catalog.map(item => {
            return (
<<<<<<< HEAD
              <Route exact path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={store.dispatch} />} />
=======
              <Route exact path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={store.dispatch.bind(store)} />} />
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
            )
          })
          return (
            <div>
              {cards}
            </div>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default CardsConteiner;

