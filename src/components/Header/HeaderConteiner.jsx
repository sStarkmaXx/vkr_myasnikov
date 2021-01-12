import { React } from 'react';
import Header from './Header';


const HeaderConteiner = (props) => {
  return (
    <div className="App-header">
      <Header login={props.login}/>
    </div>
  );
}

export default HeaderConteiner;
