import React from "react";
import "../home/home.css";
import { Col, Row, Container } from "../../components/grid/index";

// componentDidMount() {
//   this.renderImportedState();
//   this.unlockCharacters();
// }

function unlockCharacters() {
  switch(this.state.unlockedCharacters) {
    case 0: {

      break;
    }
    
    case 1: {

      break;
    }

    default: {

    }
  }
}

function Home() {
  // compontDidMount
    // read/ update local state from DB (API call)
      // render character images based on unlocked characters (from state) (switch case?)
      // characters need an onClick function to bring them to the text page

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
          <a href="/about">About</a>
        </div>
      </footer>
    </Container>
  );
}

export default Home;