import React, { useState, useEffect,useRef } from 'react'
export default function EX21() {
   
    const [show,SetView] = useState(true)
   
    const inputRef = useRef()

    useEffect( ()=>{

        if(inputRef.current){
            inputRef.current.focus()
        }
    },[show])


    const ChangeView = () =>{
        
        

        SetView(!show)
    }

    let Show;
    if(show){
        Show = (<div><button onClick={ChangeView}>edit</button></div>)
    }else{
        Show = (<div>
                <input ref={inputRef} type="text"/>
                <button onClick={ChangeView}>save</button>
                </div>)
    }

    return (
        <div>
            {Show}
        </div>
    )
}
