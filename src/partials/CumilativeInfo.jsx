import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import SmallInfo from './SmallInfo';

const CumilativeInfo = () => {
  return (
    <Card className='mt-5' style={{ width: '24rem' }}>
      <Card.Header as='h5'>Featured</Card.Header>
      <ListGroup className='list-group-flush'>
        <ListGroupItem className='d-flex justify-content-center'>
          <SmallInfo />
        </ListGroupItem>
        <ListGroupItem className='d-flex justify-content-center'>
          <SmallInfo />
        </ListGroupItem>
        <ListGroupItem className='d-flex justify-content-center'>
          <SmallInfo />
        </ListGroupItem>
        <ListGroupItem className='d-flex justify-content-center'>
          <SmallInfo />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default CumilativeInfo;
