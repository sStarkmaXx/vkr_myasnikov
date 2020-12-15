import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Form, Card, Button, ListGroup } from 'react-bootstrap';
import './ItemInfo.module.css';
import Slider from './allContent/Slider';



const ItemInfo = (props) => {

  return (
    <div className="itemInfo">
      <Slider />
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.name}</ListGroup.Item>
          <ListGroup.Item>{props.price}</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
         </Button>
      </Form>
    </div>
  );
}

export default ItemInfo;
