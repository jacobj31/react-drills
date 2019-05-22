import React, {Component} from "react"

export default class Box extends Component{
    constructor(){
        super()
        this.state={
            text: '',
        }
    }

    handleText = str => {
        this.setState({text: str})
    }


    render(){
        return(
            <div>
                <input type='text' onChange={e => this.handleText(e.target.value)}></input>
            {this.state.text}
            </div>
        )
    }
}





