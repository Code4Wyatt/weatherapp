import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'

const WeatherSection = (data) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Header>{data.name}</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
  );
}

export default WeatherSection;
