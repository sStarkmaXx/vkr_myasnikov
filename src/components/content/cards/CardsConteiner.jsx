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
          let cards = store.state.catalog.map(item => {
            return (
              <Route path={"/catalog/" + item.category} render={() => <Cards item={item} dispatch={store.dispatch.bind(store)} />} />
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

