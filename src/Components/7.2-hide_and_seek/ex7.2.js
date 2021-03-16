import React, { Component } from 'react'

export default class ex7 extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            show:false,
        }

    }
    ShowPictureHandler = () =>{
        this.setState({show:!this.state.show})
     
    }

    render() {

        let message;
        if(this.state.show){
            message =  (<div className='box'> </div>)
        }
        else{
            message = ''
        }

   
        return (
            <div>                
             <button onClick={this.ShowPictureHandler}>Show picture</button>
                {message}
            </div>
        )
    }
}
