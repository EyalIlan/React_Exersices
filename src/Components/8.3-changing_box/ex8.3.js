
import React, { Component } from 'react'
import './style.css'
import Box from './box'
export default class ex8 extends Component {
    
    
    state ={
        Colors:[],
        Shape:'',
        counterColor:0,
        
    }
    

    componentDidMount(){
        this.setState({
            Colors:['red','blue','green','yellow','purple']
        })
    }


    componentDidUpdate(){


        setTimeout(()=>{
         
            if(this.state.counterColor > this.state.Colors.length-2){
                
                this.setState({
                    counterColor:0,
                    Shape:'Circle'
                })
            }else{
               
                this.setState({
                    counterColor:this.state.counterColor + 1,
                })
                
            }
        },500)

    }

    /// must do setState fro re render 

    render() {

        return (
            <div className="container">
                <Box CLcolor = {this.state.Colors[this.state.counterColor]} CLshape ={this.state.Shape}></Box>
            </div>
        )
    }
}
