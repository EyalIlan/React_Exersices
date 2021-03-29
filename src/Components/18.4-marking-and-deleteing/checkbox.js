import React from 'react'

export default function checkbox(props) {
    

   let CheckHandler = () =>{
        props.changeChecked(props.id)
    }

    return (
        <div>
            <ul>
            <li>{props.name}
                <input type="checkbox"  checked={props.Checks} onChange={CheckHandler}/>
            </li>
            </ul>
        </div>
    )
}
