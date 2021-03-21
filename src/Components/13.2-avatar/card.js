
import React from 'react'


export default function card(props) {
    return (
        <div className="card">
            
            <h1>{props.firstname} {props.lastname}</h1>
            <img src={props.picture} alt=""/>

        </div>
    )
}
