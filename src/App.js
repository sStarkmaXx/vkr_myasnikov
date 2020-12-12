import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, img, Row, Col, Nav, Navbar, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
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
            <Navbar.Brand href="#home">DNS</Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Поиск по сайту" className="mr-sm-2" />
              <Button variant="outline-info">Поиск</Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link href="#">Сравнить</Nav.Link>
              <Nav.Link href="#">Избранное</Nav.Link>
              <Nav.Link href="#">Корзина</Nav.Link>
              <Button variant="info">Войти</Button>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Navbar bg="light" variant="light">
            <Nav className="flex-column">
              <Nav.Link eventKey="link-1">Бытовая техника</Nav.Link>
              <Nav.Link eventKey="link-2">Смартфоны и гаджеты</Nav.Link>
              <Nav.Link eventKey="link-3">ТВ и Развлечения</Nav.Link>
              <Nav.Link eventKey="link-4">Компьютеры</Nav.Link>
              <Nav.Link eventKey="link-5">Офис и Сеть</Nav.Link>
              <Nav.Link eventKey="link-6">Аксессуары</Nav.Link>
              <Nav.Link eventKey="link-7">Автотовары</Nav.Link>
              <Nav.Link eventKey="link-8">Инструменты</Nav.Link>
              <Nav.Link eventKey="link-9">Услуги</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item style={{ height: 200 }}>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGA0NCsv4Nxcx8eDaMW8ABIWj3NJS0YqE-g&usqp=CAU"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 200 }}>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOr0zYz49G_Jeug6S-F5fn3UVI9aw9jU3ZQ&usqp=CAU"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 200 }}>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjXJTKSRdcW55vo_lSGBF89hlFQFyK6rnaQ&usqp=CAU"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <div>
                <h3>Акции</h3>
              </div>
              <Nav.Link href="#">Товары со скидкой</Nav.Link>
              <Nav.Link href="#">Рассрочка или выгода</Nav.Link>
              <Nav.Link href="#">Выгодные комплекты</Nav.Link>
              <Button variant="outline-info">Все акции</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Актуальные предложения</h2>
              <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                  <Carousel>
                    <Carousel.Item style={{ height: 200 }}>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGA0NCsv4Nxcx8eDaMW8ABIWj3NJS0YqE-g&usqp=CAU"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 200 }}>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOr0zYz49G_Jeug6S-F5fn3UVI9aw9jU3ZQ&usqp=CAU"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 200 }}>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjXJTKSRdcW55vo_lSGBF89hlFQFyK6rnaQ&usqp=CAU"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
