import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/hello-world.jsx';
import StateBox from './components/state-checkbox.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <StateBox />
      </div>
    );
  }
}

export default App;
