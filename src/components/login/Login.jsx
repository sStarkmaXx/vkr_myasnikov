import { React } from 'react';
import classes from './Login.module.css';



const Login = (props) => {

    return (
        <div className={classes.login}>
          <div className={classes.title}>
          <div className={classes.name}>Вход</div>
          <div className={classes.close} onClick={props.close}>x</div>
          </div>
          <form className={classes.form}>
              <input className={classes.input} placeholder="Введите Ваш EMAIL" type="email"></input>
              <input className={classes.input} placeholder="Введите пароль" type="password"></input>
              <div className={classes.btn} onClick={props.close}>Вход</div>
          </form>
        </div>
    );
}

export default Login;