import React, { Component } from 'react'
import Store from './Store'
import {Link} from 'react-router-dom'

export default class Products extends Component {
    
    state = {
        store:Store
    }
    
    render() {
         
        return (
            <div> 
               {
                this.state.store.map(p =>{
                   return <Link style={{padding:'20px',fontSize:'30px'}} to={`/products/${p.id}`}>{p.title}</Link>
                })
               }
            </div>
        )
    }
}
