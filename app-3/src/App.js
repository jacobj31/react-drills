import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Filter from './components/filter'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Filter></Filter>
      </div>
    );
  }
}

export default App;
