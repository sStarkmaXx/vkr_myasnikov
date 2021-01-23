import { React } from 'react';
import Header from './Header';


const HeaderConteiner = (props) => {
  return (
      <Header login={props.login}/>
  );
}

export default HeaderConteiner;
