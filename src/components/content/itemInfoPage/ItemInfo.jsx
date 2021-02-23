import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classes from './ItemInfo.module.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';



const ItemInfo = (props) => {
 
  let url = `url(${props.item.img})`;
  let category = props.category;
  let selectItem = props.item;

  let posts = props.posts.map(item => {
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
    props.addPost(category, props.idInItems, text)
  }
  let inBasket = false;
  let addItemInBasket = () => {
    props.addItemInBasket(selectItem, props.idInCatalog,inBasket);
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

  if (!props.inBasket) {
    buttone = <BtnAddInBask />
  } else {
    buttone = <BtnBasket />
  }

  return (
    <div className={classes.itemPage}>
      <div className={classes.itemInfo}>
        <div className={classes.img} style={{ backgroundImage: url }}></div>
        <div className={classes.name}><h1>{props.item.name}</h1></div>
        <div className={classes.price}>Цена: {props.item.price} ₽</div>
        <div className={classes.info}><p><h2>Описание</h2></p>{props.item.info}</div>
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
