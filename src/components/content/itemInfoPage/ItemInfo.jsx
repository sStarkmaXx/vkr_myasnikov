import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classes from './ItemInfo.module.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';
import {addItemInBasketActionCreater, addPostActionCreater} from '../../../redux/reducers/itemInfo-reducer'



const ItemInfo = (props) => {
  let params = window.location.href.split('/');
  let selectItem;
  let url = `url(${props.catalog[params[4]-1].items[params[5]-1].img})`;
  let category;
  let idInCatalog;
  let idInItems;
  let id;
  
  if (props.selectItem.category === "") {
    idInCatalog = params[4]-1;
    idInItems = params[5]-1;
    id = params[5]-1;
    category = props.catalog[idInCatalog].category;
    selectItem = props.catalog[idInCatalog].items[id];
  } else {
    idInCatalog = props.selectItem.idInCatalog;
    idInItems = props.selectItem.idInItems;
    id = props.selectItem.id;
    category = props.selectItem.category;
    selectItem = props.selectItem;
  }

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
    props.dispatch(addPostActionCreater(category, id, text))
  }

  let addItemInBasket = () => {
    props.dispatch(addItemInBasketActionCreater(selectItem,idInCatalog));
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
    buttone = <BtnAddInBask />
  } else {
    buttone = <BtnBasket />
  }

  return (
    <div className={classes.itemPage}>
      <div className={classes.itemInfo}>
        <div className={classes.img} style={{ backgroundImage: url }}></div>
        <div className={classes.name}><h1>{props.catalog[idInCatalog].items[idInItems].name}</h1></div>
        <div className={classes.price}>Цена: {props.catalog[idInCatalog].items[idInItems].price} ₽</div>
        <div className={classes.info}><p><h2>Описание</h2></p>{props.catalog[idInCatalog].items[idInItems].info}</div>
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
