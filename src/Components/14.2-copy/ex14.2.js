import React, { Component } from 'react'

export default class ex14 extends Component {
    
    constructor(props){
        
        super(props)
        this.TextAreaRef = React.createRef()
    }

    copyClickHandler = () =>{

        let number = this.TextAreaRef.current.value
        console.log(number)

    }

    render() {
        return (
            <div>
                
            <textarea name="" id="" cols="30" rows="10" ref={this.TextAreaRef}></textarea>
            <button onClick={this.copyClickHandler}>Copy</button>
            </div>
        )
    }
}
