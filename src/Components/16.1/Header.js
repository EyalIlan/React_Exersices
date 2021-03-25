import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}
