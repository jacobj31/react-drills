import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from './components/app2'

class App extends Component {
  render() {
    return (
      <div className="App">
      <List></List>
      </div>
    );
  }
}

export default App;
