
import React,{useState} from 'react'

export default function Ex7Func() {
    
    
    const [showPic,setShowPic] = useState(false)
    
  
    
    let Show;
    if(showPic){ 
      Show = (<div className="box">

              </div>) 
      }else{
          console.log('dont Show')  
          
        Show = ''
    
      }


   let ShowPictureHandler = () =>{
        setShowPic(prevState => prevState = !prevState)    
    
    }

    return (
        <div>
        <button onClick={ShowPictureHandler}>Show Picture</button>
            {Show}
        </div>
    )
}
