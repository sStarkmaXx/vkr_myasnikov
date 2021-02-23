import { React } from 'react';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';



const Cards = (props) => {
  let cardElements = props.item.items.map(item => {
<<<<<<< HEAD
    let path = `/catalog/${props.item.id}/${item.id}`;
=======
    let path = `/catalog/${props.item.category}/${item.id}`;
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
    
    let category = props.item.category;
    let id = item.id;

<<<<<<< HEAD
    /*let dispatcher = () => {
     
      props.dispatch(selectItemActionCreater(category,id,path))
    }*/
=======
    let dispatcher = () => {
      let action = {
        type: "SELECT_ITEM",
        category: category,
        id: id,
        path:path
      }
      props.dispatch(action)
    }
>>>>>>> f5b23fc0401ea08ba1ea7be03155b1c19bb48f51
    
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