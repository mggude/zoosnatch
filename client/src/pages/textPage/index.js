import React from "react";
import "../textPage/textPage.css";
import { Col, Row, Container } from "../../components/grid/index";

function TextPage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 class="text-center">ZooSnatch</h1>
        </Col>
        <Col size="md-12">
        {/* this h3 text should render based on where the user is in the game */}
          <h3 class="text-center">Welcome to ZooSnatch, a choose your own adventure game!</h3>
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

export default TextPage;