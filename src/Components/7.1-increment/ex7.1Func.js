
import React,{useState} from 'react'

export default function Ex7Func() {
   
    const [number,setNumber] = useState(0)

    const ButtonNumberHandler = () =>{

        setNumber(number  =>  number + 1)        
    }

    return (
        <div>
            <button onClick = {ButtonNumberHandler}>Up Number</button>
                <h1>{number}</h1>         
        </div>
    )
}
