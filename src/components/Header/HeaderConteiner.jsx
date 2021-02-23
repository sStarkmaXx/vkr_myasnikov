import { React } from 'react';
import Header from './Header';
import StoreContext from './../StoreContext';


const HeaderConteiner = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return (
          <Header login={props.login} itemCount={store.getState().basket.basket.totalItemCount} />
        )
      }
      }
    </StoreContext.Consumer>

  );
}

export default HeaderConteiner;
