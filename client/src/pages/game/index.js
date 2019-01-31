import React from "react";
import "../game/game.css";
import { Col, Row, Container } from "../../components/grid/index";


function Game() {
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
  
  export default Game;