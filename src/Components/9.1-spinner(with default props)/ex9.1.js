import React, { Component } from 'react'
import Spinner from './Spinner'
export default class ex9 extends Component {
    
    
    state ={
        loading:false
    }
    
    componentDidMount(){
       

        setTimeout(()=>{

        this.setState({loading:true})

        },3000)

    }
    

    render() {

        let message
        if(this.state.loading === false){
            message  = (<Spinner></Spinner>)
        }else{
            message = (<h1>Welcome to the App</h1>)
        }

        return (
            <div>
                {message}
            </div>
        )
    }
}
