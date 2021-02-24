import { React } from 'react';
import StoreContext from '../../StoreContext';
import ItemInfo from './ItemInfo';
import classes from './ItemInfoConteiner.module.css';
import { addPostActionCreater } from '../../../redux/reducers/posts-reducer';
import { addItemInBasketActionCreater} from '../../../redux/reducers/basketItem-reducer';
import { connect } from 'react-redux';


const itemInfoContainer = () => {

  return (
    <div className={classes.itemInfoContainer}>
      <StoreContext.Consumer>
        {(store) => {
          let params = window.location.href.split('/');
          let idInCatalog = params[4]-1;
          let idInItems = params[5]-1;
          let category = store.getState().basket.catalog[idInCatalog].category;
          let item = store.getState().basket.catalog[idInCatalog].items[idInItems];
          let posts = store.getState().posts[category][params[5]];
          let inBasket = store.getState().basket.catalog[idInCatalog].items[idInItems].inBasket;
          
          let addPost = (category, id, text) => {
            store.dispatch(addPostActionCreater(category, id, text))
          }
          let addItemInBasket = (selectItem, idInCatalog) => {
            store.dispatch(addItemInBasketActionCreater(selectItem, idInCatalog))
          }

          return (
            <ItemInfo addPost={addPost}
                      addItemInBasket={addItemInBasket}
                      item={item}
                      category={category}
                      posts={posts}
                      inBasket={inBasket}
                      idInCatalog={idInCatalog}
                      idInItems={params[5]} />
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

/* let mapStateToProps = (state) =>{
  let params = window.location.href.split('/');
  let idInCatalog = params[4]-1;
  let idInItems = params[5]-1;
  let category = state.getState().basket.catalog[idInCatalog].category;
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
const itemInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ItemInfo);*/

export default itemInfoContainer;
