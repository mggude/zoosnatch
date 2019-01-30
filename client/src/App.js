import React, { Component } from 'react';
import './App.css';
import About from "./pages/about";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <About />
      </div>
    );
  }
}

export default App;
