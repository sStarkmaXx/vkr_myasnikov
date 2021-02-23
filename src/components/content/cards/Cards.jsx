import { React } from 'react';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';



const Cards = (props) => {
  let cardElements = props.item.items.map(item => {
    let path = `/catalog/${props.item.id}/${item.id}`;
    
    let category = props.item.category;
    let id = item.id;

    /*let dispatcher = () => {
     
      props.dispatch(selectItemActionCreater(category,id,path))
    }*/
    
    let url = "url("+item.img+")";
    

    return (
      <div  className={classes.Card}>
          <div className={classes.image} style={{backgroundImage:url}}></div>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.price}>Цена: {item.price} ₽</div>
          <div className={classes.link}>
          <NavLink to={path}>Подробнее</NavLink>
          </div>
      </div >
    );
  }
  );

return (
  <div className={classes.Cards}>
    {cardElements}
  </div>
);
}

export default Cards;