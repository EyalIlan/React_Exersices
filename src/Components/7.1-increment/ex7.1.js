
import React, { Component } from 'react'

export default class ex7 extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            number:0
        }
    }
    
    ButtonNumberUpper = () =>{
           this.setState({
             number:this.state.number + 1
           }) 
    }



    render() {
        return (
            <div>
                <button   onClick={this.ButtonNumberUpper}>Upper Number</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}
