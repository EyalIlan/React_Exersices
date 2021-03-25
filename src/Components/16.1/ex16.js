import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import HomePage from './homepage'
import Products from './Products'
import ProductsDetail from './ProductDetail'

export default class ex16 extends Component {
    render() {
        return (
            <div>
            
                <BrowserRouter>
                <Header></Header>
                    <div>
                     <Route path="/" exact component={HomePage}/>
                     <Route path="/products" exact component={Products}></Route>
                     <Route path="/products/:id"  component={ProductsDetail}></Route>
                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}
