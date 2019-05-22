import React, {Component} from "react"

export default class List extends Component{
constructor(){
    super()
    
    
    this.state={
        arr : ['pie', 'duck','iguana','kingpin']
    }
   }

   render(){
       return( 
       <div>
       {this.state.arr.map(thing => {
           return(
              
               <h1>{thing}</h1>
               
           )})}
           </div>)
    
       


}}