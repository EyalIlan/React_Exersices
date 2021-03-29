import React from 'react'
export default function post(props) {
    
    
    let text;
    let icon;

    const COMPLETED = () =>{
        props.complete(props.Postid)
    }

    if(props.completed){
        text = (<div>
                <h1>{props.name}</h1>
                </div>)
        icon = <p>&#10003;</p>

     }else{
        text = (<div>
               <del> <h1>{props.name}</h1></del> 
              </div>)
        icon = <p>&#x58;</p>      
     }

    return (
        <div>
            {text}
            <button onClick={COMPLETED}>{icon}</button>
        </div>
    )
}

// &#10003;
{/* <del></del> */}
// &#x58;
