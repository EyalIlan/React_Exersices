
import React, { Component } from 'react'

export default class ex8 extends Component {
    
    
    state = {
        favoriteColor:'blue'
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState({
                favoriteColor:'red'
            })

        },1500)
    }


    componentDidUpdate(){
        let content = document.querySelector('#content')
        let h2 = document.createElement('h2')
        h2.innerHTML = `${this.state.favoriteColor}`
        content.appendChild(h2)
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.favoriteColor}</h1>
                <div id="content">

                </div>
            </div>
        )
    }
}
