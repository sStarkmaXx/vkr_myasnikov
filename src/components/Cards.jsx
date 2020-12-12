import { React } from 'react';
import { Card,Button } from 'react-bootstrap';


const Cards = () => {
  return (
    <div className="App-slider">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://c.dns-shop.ru/thumb/st1/fit_width/120/120/c68562b33d34ee0053b067808e433ba5/91b384bd6d56f835dfb5c7974c430ff6be88200a29145acd983e6e7ac2d2c220.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
