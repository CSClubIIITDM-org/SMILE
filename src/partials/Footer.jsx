import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='w-100 bg-dark p-3'>
      <Row>
        <Col>
          <p className='display-4'>LOGO</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='display-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            neque.
          </p>
          <p className='display-4'>Lorem ipsum, dolor sit amet</p>
          <p className='display-4'>
            Lorem ipsum, dolor sit amet consectetur adi
          </p>
          <p className='display-4'>Lorem, ipsum.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
