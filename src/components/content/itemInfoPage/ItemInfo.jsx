import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Button } from 'react-bootstrap';
import classes from './ItemInfo.module.css';
import Post from './Post';


const ItemInfo = (props) => {
  
  let url = 'url(' + props.selectItem.img + ')';
  let category = props.selectItem.category;
  let id = props.selectItem.id;
  let categoryObj = props.posts[category];

  let posts = categoryObj[id].map(item => {
    return (
      <Post userImg={item.img} userName={item.name} message={item.message} />
      )
    }
  )

  return (
    <div className={classes.itemInfo}>
      <div className={classes.img} style={{ backgroundImage: url }}></div>
      <div className={classes.name}>{props.selectItem.name}</div>
      <div className={classes.price}>Цена: {props.selectItem.price} рублей</div>
      <div className={classes.button}><Button variant="info" type="submit">Добавить в корзину</Button></div>
      <div className={classes.form}>Оставить отзыв
      <textarea className={classes.textarea} cols="10" rows="4" placeholder="Ваш отзыв"></textarea>
        <Button variant="info" type="submit" style={{ width: 200, justifySelf: "center" }}>Отправить</Button>
      </div>
      {posts}
    </div>
  );
}

export default ItemInfo;
