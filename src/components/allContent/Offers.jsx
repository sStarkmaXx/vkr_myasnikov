import { React } from 'react';
import { Carousel, Col, Nav } from 'react-bootstrap';


const Offers = () => {
  return (
    <div className="App-offers">
        <h2>Актуальные предложения</h2>
        <Nav fill variant="tabs" defaultActiveKey="/home">
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
    </div>
  );
}

export default Offers;
