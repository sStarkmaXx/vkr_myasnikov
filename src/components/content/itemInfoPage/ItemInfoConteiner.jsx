import { React } from 'react';
import { bindActionCreators } from 'redux';
import { select } from '../../../actions/action';
import StoreContext from '../../StoreContext';
import ItemInfo from './ItemInfo';

/*function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select }, dispatch)
}*/


const itemInfoContainer = () => {
  debugger;
  return (
    <div className="itemInfoContainer">
      <StoreContext.Consumer>
        {(store) => {
          return (
            <ItemInfo selectItem={store.selectItem}/>
          )
        }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default itemInfoContainer;
