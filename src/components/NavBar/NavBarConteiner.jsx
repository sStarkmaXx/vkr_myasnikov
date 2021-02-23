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
              <NavBarr catalog={store.getState().catalog}/>
            )
          }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default NavBarConteiner;
