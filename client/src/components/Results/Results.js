import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Results = (props) => {

    return (
        <Row>
        <Col md={12}>
            <Card>
                <Card.Header>
                    <h5>Book tittle</h5>
                    <p>Author</p>
                </Card.Header>
                <Col>
                <Card.Img variant="left" src="holder.js/100px180" />
                </Col>
                <Col>
                <Card.Body>
                    <Card.Text>
                        book info will go here
                    </Card.Text>
                    <Button variant="primary">Save</Button>
                    <Button variant="primary">Delete</Button>
                </Card.Body>
                </Col>
            </Card>
        </Col>
        </Row>
    );
}

export default Results;