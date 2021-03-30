import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Ex19() {
    
    
    

    const [url,SetUrl] = useState('https://hn.algolia.com/api/v1/search?query=')
    const [Data,SetData] = useState([])
    const [term,SetTerm] = useState('hooks')
    const [loading,SetLoading] = useState(true)

    useEffect(() =>{
    const Request = async () =>{
    let request = await axios.get(url+term)
        SetData(request.data.hits)    
    }
    Request()
        SetLoading(false)   
    },[url])
    

   const changeQueryHandler = (e) =>{
        SetTerm(e.target.value.toLowerCase())
    }
    
 const SearchTermHandler = () =>{
        SetLoading(true)    
        SetUrl('https://hn.algolia.com/api/v1/search?query='+term)  
  }



//   console.log(Data)
let Content;
    if(loading){
        Content = (<div><h2>Loading</h2></div>) 
    }else{
        Content = (<div>
                    {Data.map((p,index) =>{
                       return <p key={index}> {p.title}</p> 
                    })}
                  </div>)
    }
    

    return (
        <div>
            <h1>Algolia search</h1>
            <input type="text" onChange={changeQueryHandler}/>
            <button onClick={SearchTermHandler}>Search</button>
            {Content}
        </div>
    )
}
