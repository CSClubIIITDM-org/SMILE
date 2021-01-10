import React from "react";
import { Card, Button } from "react-bootstrap";

const TextInfo = () => {
  return (
    <div className="container">
      <div className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left">
        <div className="card-body">
          <h4 className="card-title">Description about the publication</h4>
          <Card.Subtitle className="mb-2 text-muted">
            <em>Name of the contributor</em>
          </Card.Subtitle>
          <Button variant="secondary">Article</Button>
          <Card.Text>
            <em>Name of the publisher</em>
          </Card.Text>
          <Card.Text> DOI: DOI number will be here </Card.Text>
        </div>
      </div>
    </div>
  );
};

export default TextInfo;
