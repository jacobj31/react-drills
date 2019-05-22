import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Newtask from './components/NewTask'
import List from './components/List'

export default class App extends Component {
  constructor(){
    super()
    this.state={
        list:[],
    }
    this.increase = this.increase.bind(this)
}
increase(task){
    this.setState({
        list: [...this.state.list, task]
        
    })
}

render(){
    return(
      <div className='App'>
        <h1>to do list</h1>
        <Newtask add={this.increase}/>
        <List tasks={this.state.list}/>
      </div>
    )
    
  }
}
    


