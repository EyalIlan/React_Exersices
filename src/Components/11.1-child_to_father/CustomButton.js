import React, { Component } from 'react'
import './style.css'

export default class CustomButton extends Component {
    
    
    ButttonColorsHandler = (e) =>{
      
       this.props.ParentColorHandler(e.target.value)     
      
    }
    
    render() {
        return (
            <div>
                <button className={this.props.color} onClick={this.ButttonColorsHandler} type="button" value={this.props.color}>{this.props.color}</button>
            </div>
        )
    }
}
