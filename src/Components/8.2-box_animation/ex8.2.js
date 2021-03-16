
import React, { Component } from 'react'
import Box from './box'
import './style.css'

export default class ex8 extends Component {
   

    state = {
        slide:''
    }


    componentDidMount(){

        setTimeout(()=>{

            this.setState({
                slide:'showBox'
            })

        },1000)

    }

    componentDidUpdate(){

        setTimeout(() =>{

            this.setState({
                slide:''
            })

        },4000)

    }



    render() {
        return (
            <div className="boxContainer">
                <Box cla ={this.state.slide} width ='300' height ='300'></Box>
                
                <Box cla ={this.state.slide} width='200' height='200'></Box>
                
                <Box cla ={this.state.slide} width='100' height='100'></Box>
            </div>
        )
    }
}
