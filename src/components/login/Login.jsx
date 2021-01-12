import { Button } from 'react-bootstrap';
import { React } from 'react';
import classes from './Login.module.css';



const Login = (props) => {

    return (
        <div className={classes.login}>
          <div className={classes.title}>Вход
          <div className={classes.close} onClick={props.close}>x</div>
          </div>
          <form className={classes.form}>
              <input className={classes.input} placeholder="Введите Ваш EMAIL" type="email"></input>
              <input className={classes.input} placeholder="Введите пароль" type="password"></input>
              <Button variant="info" className={classes.btn}>Вход</Button>
          </form>
        </div>
    );
}

export default Login;