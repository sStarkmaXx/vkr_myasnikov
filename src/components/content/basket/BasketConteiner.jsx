import { React } from 'react';
import StoreContext from '../../StoreContext';
import { Route } from 'react-router-dom';
import classes from './BasketConteiner.module.css';
import Basket from './Basket';
import {plusActionCreater,minusActionCreater,delActionCreater} from '../../../redux/reducers/basketItem-reducer';

const BasketConteiner = () => {

  return (
    <div className={classes.basketConteiner}>
      <StoreContext.Consumer>
        {(store) => {
          let plus = (idInBasket, placeInCatalog, itemId) => {
            store.dispatch(plusActionCreater(idInBasket, placeInCatalog, itemId))
          }

          let minus = (idInBasket,placeInCatalog,itemId) =>{
            store.dispatch(minusActionCreater(idInBasket,placeInCatalog,itemId))
          }

          let del = (idInBasket,count,placeInCatalog,itemId) =>{
            store.dispatch(delActionCreater(idInBasket,count,placeInCatalog,itemId))
          }

          let bascetItem = store.getState().basket.basket.basket;
          let totalItemCount = store.getState().basket.basket.totalItemCount;
          let totalsumm = store.getState().basket.basket.totalsumm;

          return (
            <div>
              <Basket bascetItem={bascetItem}
                      plus={plus}
                      minus={minus}
                      del={del}
                      totalItemCount={totalItemCount}
                      totalsumm={totalsumm}/>
            </div>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
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

export default BasketConteiner;

