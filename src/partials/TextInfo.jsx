import React from "react";
import { Card, Button } from 'react-bootstrap';

const TextInfo = () => {
    return(
        <Card style={{ width: '100%', backgroundColor: '#E2EfED' }} className="col-sm-12 my-3">
            <Card.Body>
                <Card.Title>Description about the publication</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><em>Name of the contributor</em></Card.Subtitle>
                <Button variant="secondary">Article</Button>
                <Card.Text><em>Name of the publisher</em> </Card.Text>
                <Card.Text> DOI: DOI number will be here </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TextInfo;