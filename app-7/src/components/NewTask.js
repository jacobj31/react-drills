import React, { Component } from "react";

export default class NewTask extends Component {
constructor(){
    super()
    this.state={
        input:''
        }
    this.add = this.add.bind(this)
    }
    handleInput(value){
        this.setState({input: value})
    }
    add(){
        this.props.add(this.state.input)
        this.setState({input:''})
    }

    render(){
        return(
            <div>
                <input
                value={this.state.input}
                placeholder='task'
                onChange={e => this.handleInput(e.target.value)}/>

                <button onClick={this.add}>add</button>
            </div>
        )
    }
}