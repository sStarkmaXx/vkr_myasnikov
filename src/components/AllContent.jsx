import { React } from 'react';
import { Row,Col } from 'react-bootstrap';
import Offers from './Offers';
import Shares from './Shares';
import Slider from './Slider';


const AllContent = () => {
  return (
    <div className="App-allcontent">
      <Col>
          <Row>
            <Slider />
            <Shares/>
          </Row>
          <Row>
            <Offers/>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Col>
    </div>
  );
}

export default AllContent;
