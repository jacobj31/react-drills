import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      luke:''
    }
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/1").then(response => 
    {
      this.setState({
        luke: response.data
      })
    })
  }
  
  
  
  render() {
    return (
      <div className="App">
       <h1>Name: {this.state.luke.name}</h1>
       <h1>Birth Year: {this.state.luke.birth_year}</h1>
        <h1>Height: {this.state.luke.height}</h1>
        <h1>Eye Color: {this.state.luke.eye_color}</h1>
      </div>
    );
  }
}

export default App;
