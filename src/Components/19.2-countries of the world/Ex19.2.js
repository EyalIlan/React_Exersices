import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Ex19() {
    let url ='https://restcountries.eu/rest/v2/all'
    
    const [countrys,SetCountrys] = useState([])
    const [tempCountry,SetTempCountry] = useState([])
   

    useEffect(() =>{
    const REQUEST = async () =>{
        let request = await axios.get(url)
        SetCountrys(request.data)
    }
        REQUEST()
    },[])

    const CountryFilter = (e) =>{
        
       let Search = [...countrys].filter(p =>{
            return p.name.toLowerCase().includes(e.target.value)
       }) 
       SetTempCountry(Search)
       

    }

    return (
        <div style={{textAlign:'center'}}>
            <input type="text" onChange={CountryFilter}/>
            <div>
                <h1>Hello</h1>
                {
                  tempCountry.map((p,index) =>{
                     return <p key={index}>{p.name}</p> 
                  })
                }
            </div>
        </div>
    )
}
