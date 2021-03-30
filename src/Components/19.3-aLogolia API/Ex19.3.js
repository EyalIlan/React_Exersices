import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
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
  
let Content;
    if(loading){
        Content = (<div className="spinner"><h2><img className="spinnerImg" style={{width:'400px',height:'400px'}} src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7" alt="" /></h2></div>) 
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
