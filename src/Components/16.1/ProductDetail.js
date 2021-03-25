import React, { Component } from 'react'
import Store from './Store'
export default class ProductDetail extends Component {
    
    state ={
        id:parseInt(this.props.match.params.id),
        product:Store
    }
    
    componentDidMount(){
        let product = this.state.product
        product = product.find(p => p.id === this.state.id)
        this.setState({product:product})
    
    }


    render() {

        console.log(this.state.product)

        return (
            <div>
                
                <h1>{this.state.product.title}</h1>
                <h1><img src={`${this.state.product.imageUrl}`} alt=""/></h1>
                <h1>${this.state.product.price}</h1>
            </div>
        )
    }
}
