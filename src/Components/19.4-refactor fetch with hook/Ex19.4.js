import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Ex19(){ 
    
   
    const [joke,SetJoke] = useState('')
    const [term,SetTerm] = useState('random')
    const [Categoris,SetCategoris] = useState([])

    


    useEffect(() =>{
        const Request = async () =>{
            let req = await axios.get('https://api.chucknorris.io/jokes/categories')
            SetCategoris(req.data)
        }
        Request()
    },[])


   const GetRandomJokeHandler = async() =>{
       
       let request; 
       if(term === 'random'){
           request =  await axios.get('https://api.chucknorris.io/jokes/random',{})
        }else{
            // console.log(term,'aaa')
            request = await axios.get(`https://api.chucknorris.io/jokes/random?category=${term}`,{})
        }
        SetJoke(request.data.value)
    }

  const  CategorySelectHandler = (p) =>{
        SetTerm(p.target.value)
    }

  
        return (
            <div>
                   <button onClick = {GetRandomJokeHandler}>Get a Chack Noris Joke</button>
                    <select name="" id="" onChange={CategorySelectHandler}>
                          <option value="random">random</option>
                          {
                           Categoris.map(p =>{
                                return <option value={p} key={p}>{p}</option>
                            })
                          }  
                    </select>
                   <p>{joke}</p>
            </div>
        )
    
}

