import React, { useState } from 'react';
import Post from './post'



export default function Ex18() {
   
   
const [Data,SetData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ]) 


const ChangeComplete = (id) =>{
    let DATA = [...Data]
    DATA[id].completed = !DATA[id].completed
    SetData(DATA)
}

    return (
        <div>
            {
                Data.map((p,index) =>{
                   return <Post name = {p.name} completed = {p.completed} key={index} Postid={index} complete = {ChangeComplete}></Post>
                })
            }

        </div>
    )
}
