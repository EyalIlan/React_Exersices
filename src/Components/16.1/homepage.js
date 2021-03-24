import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'


export default class homepage extends Component {
    
    
    PageOne = () =>{
        return <div><h2>gdjaogsjagsjgaosj</h2></div>
    }
    
    render() {
        return (
            <div>

                <Header></Header>
                <BrowserRouter>
                    <div>
                     <Route path="/" exact component={this.PageOne}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
