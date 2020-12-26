import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Form, Card, Button, ListGroup } from 'react-bootstrap';
import './ItemInfo.module.css';
import Slider from './allContent/Slider';



const ItemInfo = (props) => {

  return (
    <div className="itemInfo">
      <img src={props.img}/>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.name}</ListGroup.Item>
          <ListGroup.Item>Цена: {props.price} рублей</ListGroup.Item>
        </ListGroup>
      </Card>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Оставить коментарий</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit">Отправить</Button>
      </Form>
      
    </div>
  );
}

export default ItemInfo;
