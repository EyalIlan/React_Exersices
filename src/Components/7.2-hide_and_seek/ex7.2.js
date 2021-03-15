import React, { Component } from 'react'

export default class ex7 extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            show:false,
            box:'box'
        }

    }

    ShowPictureHandler = () =>{

        this.setState({show:!this.state.show})

        if(this.state.show){
            this.setState({box:'box'})
        }else{
            this.setState({box:''})
        }

    }

    
    render() {
        return (
            <div>                
             <button onClick={this.ShowPictureHandler}>Show picture</button>
                <div className={this.state.box}>

                </div>
            </div>
        )
    }
}
