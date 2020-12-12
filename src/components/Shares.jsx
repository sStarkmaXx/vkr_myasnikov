import { React } from 'react';
import { Nav, Col, Button } from 'react-bootstrap';


const Shares = () => {
  return (
    <div className="App-slider">
      
        <div>
          <h3>Акции</h3>
        </div>
        <Nav.Link href="#">Товары со скидкой</Nav.Link>
        <Nav.Link href="#">Рассрочка или выгода</Nav.Link>
        <Nav.Link href="#">Выгодные комплекты</Nav.Link>
        <Button variant="outline-info">Все акции</Button>
      
    </div>
  );
}

export default Shares;
