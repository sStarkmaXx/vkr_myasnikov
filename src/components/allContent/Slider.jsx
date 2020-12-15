import { React } from 'react';
import { Carousel,Col } from 'react-bootstrap';


const Slider = (props) => {
  return (
    <div className="App-slider">
      
        <Carousel>
          <Carousel.Item style={{ height: 200 }}>
            <img
              className="d-block w-100"
              src={props.img}
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
      
    </div>
  );
}

export default Slider;
