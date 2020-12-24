import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';



const Cards = (props) => {
  
  let cardElements = props.item.items.map(item => {
    let path = props.item.category +"/"+item.id;
    return (
      <Card style={{ width: 200 }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <h3>{item.price}</h3>
          </Card.Text>
          <Button variant="info" onClick={props.itemInfo(item.category,item.id)}>Подробнее</Button>
          <NavLink to={path}>Подробнее</NavLink>
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