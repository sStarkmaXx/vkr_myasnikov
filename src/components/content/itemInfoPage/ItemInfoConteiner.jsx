import { React } from 'react';
import { bindActionCreators } from 'redux';
import { select } from '../../../actions/action';
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
            <ItemInfo selectItem={store.selectItem} posts={store.state.posts} dispatch={store.dispatch.bind(store)}/>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default itemInfoContainer;
