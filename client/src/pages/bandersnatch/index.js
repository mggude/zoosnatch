import React from "react";
import "../bandersnatch/bandersnatch.css";
import { Col, Row, Container } from "../../components/grid/index";

function Bandersnatch() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1 class="text-center">ZooSnatch</h1>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Bandersnatch;