import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './component/todo'

class App extends Component {
  constructor(){
    super()
    this.state={
        list:[],
        add: ''
    }
    this.increase = this.increase.bind(this)
}
input(str){
    this.setState({add: str})
}

increase(){
    this.setState({
        list: [...this.state.list, this.state.add],
        add:''
    })
}

render(){
    let list = this.state.list.map(thing =>{
        return <Todo task = {thing}/>
    })


    return(
        <div>
        <h1>to do list</h1>

        <div>
            <input
                value={this.state.add}
                placeholder='task'
                onChange={e => this.input(e.target.value)}/>
                
            <button onClick={this.increase}>Add</button>
        </div>
        {list}
        </div>
    )
}
}

export default App;
