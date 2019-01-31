import React from "react";
import "../greet/greet.css";
import { Col, Row, Container } from "../../components/grid/index";

function Greet() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 class="text-center">ZooSnatch</h1>
        </Col>
      </Row>
      <footer class="fixed-bottom text-center">
        <div class="container">
          <a href="/about">About</a>
        </div>
      </footer>
    </Container>
  );
}

export default Greet;