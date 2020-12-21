import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './Cards.module.css';



const Cards = (props) => {
  let cardElements = props.items.map(item => {
    return (
      <Card style={{ width: 200 }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <h3>{item.price}</h3>
          </Card.Text>
          <Button variant="info">Подробнее</Button>
        </Card.Body>
      </Card>
    );
  }
  );

  return (
    <div className={classes.appCards}>
      {cardElements}
    </div>
  );
}

export default Cards;