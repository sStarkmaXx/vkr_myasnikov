import { React } from 'react';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';



const Cards = (props) => {

  let cardElements = props.item.items.map(item => {
    let path = props.item.category + "/" + item.id;
    let category = props.item.category;
    let id = item.id;

    let dispatcher = () => {
      let action = {
        type: "SELECT_ITEM",
        category: category,
        id: id
      }
      props.dispatch(action)
    }
    let img = "url("+item.img+")";
    

    return (
      <div  className={classes.Card} onMouseOver={dispatcher}>
          <div className={classes.image} style={{backgroundImage:img}}></div>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.price}>Цена: {item.price}</div>
          <div className={classes.link}>
          <NavLink to="/itemInfo" >Подробнее</NavLink>
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