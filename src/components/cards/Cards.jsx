import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';


const Cards = (props) => {
  let cardElements = props.items.map(item => {
    props.addII(item.img, item.name, item.price);
    return (
      <Card style={{ width: 200 }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <h3>{item.price}</h3>
          </Card.Text>
          <Button variant="info"> <NavLink to="itemInfo">Подробнее</NavLink></Button>
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