import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Ex19() {
   
    
    const [Data,SetData] = useState([])

    useEffect(() =>{
        const Dima = async () =>{
            let request = await axios.get('https://swapi.dev/api/films/1')
            SetData(request.data)
        }
        Dima()

    },[])

    console.log(Data)
    
    return (
        <div>
            <h1>{Data.title}</h1>
            <h1>{Data.director}</h1>
        </div>
    )
}

// netfilix
// אתר קניות
// אתר שמזין חיפוש של צמחים
//  צמח מוציא את שגרת הטיפוח של אותו
//מניות 

// מתכונים 
// מכניס לך חומרים ומוציא מתכונים עם המוצרים האלה