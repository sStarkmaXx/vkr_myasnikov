import { React } from 'react';
import Header from './Header';
import StoreContext from './../StoreContext';


const HeaderConteiner = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return (
<<<<<<< HEAD
          <Header login={props.login} itemCount={store.getState().basket.basket.totalItemCount}/>
=======
          <Header login={props.login} itemCount={store.state.totalItemCount}/>
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
        )
      }
      }
    </StoreContext.Consumer>

  );
}

export default HeaderConteiner;
