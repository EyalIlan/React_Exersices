import React, { Component } from 'react'


//Function
const Circle = (props) =>{

    return(
        <div>
            <h1>Circle</h1>
        </div>
    )

}


//Class
export default Circle

class  Circle extends Component{

    constructor(props){
        super(props)

        this.state ={

        }
    }
    render(){
        return(
            <div>
                <h1>Circle</h1>
            </div>
        )
    }

}

export default Circle

