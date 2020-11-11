import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from 'react-bootstrap';


function Saved() {
 
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>(React) Google Books Saved</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;
