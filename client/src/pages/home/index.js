import React from "react";
import "../home/home.css";
import { Col, Row, Container } from "../../components/grid/index";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 class="text-center">ZooSnatch</h1>
        </Col>
        <Col size="md-12">
          <h3 class="character_choice text-center">Choose a Character</h3>
        </Col>
        <Col size="md-12">
          <div id="images"></div>
        </Col>
      </Row>
      <footer class="fixed-bottom text-center">
        <div class="container">
          <a href="about.html">About</a>
        </div>
      </footer>
    </Container>
  );
}

export default Home;