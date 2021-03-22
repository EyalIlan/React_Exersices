import React, { Component } from 'react'

export default class ex14 extends Component {

    constructor(props){
        super(props)

        this.InputRef = React.createRef()

    }

    componentDidMount(){
        this.InputRef.current.focus()
    }


    render() {
        return (
            <div>
                
                <input type="text" ref={this.InputRef}/>
                <input type="text" />

            </div>
        )
    }
}
