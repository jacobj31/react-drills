import React, {Component} from "react"

export default class Filter extends Component{
constructor(){
    super()
    
    
    this.state={
        arr : ['pie', 'duck','iguana','kingpin'],
        text: ''
    }
   }
   handleText = okay => {
    this.setState({text: okay})
}
   render(){

   let newarr = this.state.arr.filter
   ((str, index) => {
       return str.includes(this.state.text)
    })
    .map((str, index) => {
        return <h2 key={index}>{str}</h2>;
      });


       return( 
        
         <div>
         <input type='text' onChange={e => this.handleText(e.target.value)}></input>
         
            {newarr}
        </div>
        
        )
    }
}