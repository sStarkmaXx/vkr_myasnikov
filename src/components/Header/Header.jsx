import { React } from 'react';
import { Row, Col, Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginConteiner from '../login/LoginConteiner';

const Header = (props) => {

  return (
    <div className="App-header">
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>React</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Location</Nav.Link>
              <Nav.Link href="#features">Магазины</Nav.Link>
              <NavDropdown title="Покупателям" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Как оформить заказ</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Доставка</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Способы оплаты</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Юридическим лицам</Nav.Link>
              <Nav.Link href="#pricing">Клуб DNS</Nav.Link>
            </Nav>
            <Nav className="mr-auto" style={{ color: "white" }}>
              <div>8-800-700-20-02</div>
            </Nav>
          </Navbar>

        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar sticky="top" bg="dark" variant="dark">
            <NavLink to='/home'><Navbar.Brand>DNS</Navbar.Brand></NavLink>
            <Form inline>
              <FormControl type="text" placeholder="Поиск по сайту" className="mr-sm-2" />
              <Button variant="outline-info">Поиск</Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link href="#">Сравнить</Nav.Link>
              <NavLink to="/basket" className="nav-link">Корзина</NavLink>
              <Button variant="info" onClick={props.login}>Войти</Button>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
