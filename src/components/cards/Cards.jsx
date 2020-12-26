import { React } from 'react';
import { Card} from 'react-bootstrap';
import classes from './Cards.module.css';
import { NavLink } from 'react-router-dom';


const Cards = (props) => {
<<<<<<< Updated upstream
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
=======
  
  let cardElements = props.item.items.map(item => {
    let path = props.item.category + "/" + item.id;
    let category = props.item.category;
    let id = item.id;
    
    let dispatcher = ()=>{
      let action = {
        type:"SELECT_ITEM",
        category: category,
        id: id
      }
      props.dispatch(action)
    }
    
    return (
      <div onMouseOver={dispatcher}>
        <Card>
          <Card.Img variant="top" src={item.img}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <h3>{item.price}</h3>
            </Card.Text>
            <NavLink to="/itemInfo" >Подробнее</NavLink>
          </Card.Body>
        </Card>
      </div>
>>>>>>> Stashed changes
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