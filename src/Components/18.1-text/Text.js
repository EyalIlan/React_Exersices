import React,{useState} from 'react'

export default function Text(props) {
    
    const [text,SetText] = useState(props.text)
  
    const [showText,setShowText] = useState(false)

    const [btn,SetBtn] = useState('Show less');

    const  textLengthHandler = () =>{
            

            if(!showText){
                SetText(text.substring(0,props.Length))
                SetBtn('show less')
                
            }else{
                SetText(props.text)
                SetBtn('show more')
            } 

            setShowText(!showText)
    }




    return (
        <div>
            <h1>Hello world</h1>
            {text}
            <button onClick={textLengthHandler}>{btn}</button>
        </div>
    )
}
