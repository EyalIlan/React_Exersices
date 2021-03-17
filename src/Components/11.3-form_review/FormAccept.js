
import React from 'react'

export default function FormAccept(props) {
    

    let ButtonClicked = (e) =>{
        
        props.conirmFormHandler(e.target.value)

    }

    return (
        <div>
            <h1>{props.firstname}</h1>
            <h1>{props.lastname}</h1>
            <h1>{props.age}</h1>
            <h1>{props.freetext}</h1>
            <button value="back" onClick={ButtonClicked}>Back</button>
            <button value="send" onClick={ButtonClicked}>Send Survey</button>
        </div>
    )
}
