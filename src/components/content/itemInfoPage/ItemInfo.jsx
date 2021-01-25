import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './ItemInfo.module.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';


const ItemInfo = (props) => {
  let selectItem = props.selectItem;
  let url = 'url(' + props.selectItem.img + ')';
  let category = props.selectItem.category;
  let id = props.selectItem.id;
  let categoryObj = props.posts[category];

  let posts = categoryObj[id].map(item => {

    if (item.message === "") {
      return;
    } else {
      return (
        <Post userImg={item.img} userName={item.name} message={item.message} />
      )
    }
  }
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    let action = {
      type: "ADD_POST",
      category: category,
      id: id,
      message: text,
      userImg: "https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg",
      userName: "User Name"
    }
    props.dispatch(action)
  }

  let addItemInBasket = () => {
    let action = {
      type: "ADD_ITEM_IN_BASKET",
      item: selectItem
    }
    props.dispatch(action);
    
  }


  let buttone;
  let BtnAddInBask = () => {
    return (
      <div className={classes.button} onClick={addItemInBasket}>Добавить в корзину</div>
    )
  }

  let BtnBasket = () => {
    return (
      <div className={classes.basket}>
        <NavLink to="/basket">Корзина</NavLink>
      </div>
    )
  }


  if (!props.selectItem.inBasket) {
    buttone = <BtnAddInBask/> 
    } else {
      buttone = <BtnBasket/> 
    }

  return (
    <div className={classes.itemPage}>
      <div className={classes.itemInfo}>
        <div className={classes.img} style={{ backgroundImage: url }}></div>
        <div className={classes.name}><h1>{props.selectItem.name}</h1></div>
        <div className={classes.price}>Цена: {props.selectItem.price} ₽</div>
        <div className={classes.info}><p><h2>Описание</h2></p>{props.selectItem.info}</div>
        <div className={classes.btns}>
          {buttone}
        </div>
        <div className={classes.form}>Оставить отзыв
        <textarea className={classes.textarea} ref={newPostElement} cols="10" rows="4" placeholder="Ваш отзыв"></textarea>
          <div className={classes.button} onClick={addPost}>Отправить</div>
        </div>
      </div>
      {posts}
    </div>
  );
}

export default ItemInfo;
