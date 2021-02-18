import { React } from 'react';
import StoreContext from '../../StoreContext';
import ItemInfo from './ItemInfo';
import classes from './ItemInfoConteiner.module.css';

/*function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select }, dispatch)
}*/


const itemInfoContainer = () => {
  
  return (
    <div className={classes.itemInfoContainer}>
      <StoreContext.Consumer>
        {(store) => {
          return (
            <ItemInfo selectItem={store.getState().itemInfoPage.selectItem} catalog= {store.getState().itemInfoPage.catalog} posts={store.getState().itemInfoPage.posts} dispatch={store.dispatch}/>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default itemInfoContainer;
