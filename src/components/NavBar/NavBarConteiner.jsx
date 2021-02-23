import { React } from 'react';
import StoreContext from '../StoreContext';
import NavBarr from './NavBarr'


const NavBarConteiner = () => {
  return (
    <div>
      <StoreContext.Consumer>
        {
          (store) => {
            return (
<<<<<<< HEAD
              <NavBarr catalog={store.getState().catalog}/>
=======
              <NavBarr catalog={store.state.catalog} dispatch={store.dispatch.bind(store)}/>
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
            )
          }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default NavBarConteiner;
