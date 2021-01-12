import { React } from 'react';
import Login from './Login';


const LoginConteiner = (props) => {

    return (
        <div style={{display:"grid"}}>
          <Login close={props.close}/>
        </div>
    );
}

export default LoginConteiner;