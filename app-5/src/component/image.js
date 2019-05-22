import React, {Component} from "react"

export default class Pic extends Component{
render(){
    return(
        <div>
            <img src={this.props.picture}/>

        </div>
    )
}}