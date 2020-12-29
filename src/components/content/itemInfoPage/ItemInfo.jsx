import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Form, Button} from 'react-bootstrap';
import classes from './ItemInfo.module.css';



const ItemInfo = (props) => {
  let url = 'url('+props.selectItem.img+')';
  return (
    <div className={classes.itemInfo}>
      <div className={classes.img} style={{backgroundImage:url}}></div>
      <div className={classes.name}>{props.selectItem.name}</div>
      <div className={classes.price}>Цена: {props.selectItem.price} рублей</div>
      <div className={classes.button}><Button variant="info" type="submit">Добавить в корзину</Button></div>
      <div className={classes.form}>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Оставить комментарий</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit">Отправить</Button>
      </Form>
      </div>
      <div className={classes.post}></div>
    </div>
  );
}

export default ItemInfo;
