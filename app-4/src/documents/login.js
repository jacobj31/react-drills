import React, {Component} from "react"

export default class Login extends Component{
constructor(){
    super()
    this.state={
        password:'',
        username:''
    }
    this.alert = this.alert.bind(this)
    }
    handleTextb = okay => {
        this.setState({password: okay})
    }
    handleTexta = okay => {
        this.setState({username: okay})
    }
    alert(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        return(
        <div>
        <input type='text' onChange={e => 
            this.handleTexta(e.target.value)} placeholder=
            'username'></input>
        <input type='text' onChange={e => 
            this.handleTextb(e.target.value)} placeholder=
            'password'></input>
        <button onClick={this.alert}>Submit</button>
            
        </div>
        )
    }

}

