import React, { useState, useEffect } from 'react'
import Axios from 'axios'
export default function Ex20 () {
    
    const [Data,SetData] = useState([])
    const [url,SetUrl] = useState('https://hn.algolia.com/api/v1/search?query=hooks')
    const [show,SetShow] = useState(true)
    let source =  Axios.CancelToken.source()

    useEffect(() =>{
        

        const LoadData = async () =>{
            try{
                
                const responce = await Axios.get('https://hn.algolia.com/api/v1/search?query=hooks',{
                    cancelToken:source.token
                })
                SetData(responce)
                
            }catch(error){
                if(Axios.isCancel(error)){
                    console.log('caught cancel')
                }
                console.log('error')
            }
            
        }
        
        LoadData()

        return () =>{
            source.cancel()
        }
    },[show])


    const ShowHandler = () =>{
        SetShow(!show)
        source.cancel()
    }

    let display;

    if(!show){
        display = <div></div>
    }else{
        display = <div>{JSON.stringify(Data)}</div>
    }

    console.log(Data)

    return (
        <div>
            <button onClick={ShowHandler}>SHOW</button>
            {display}
        </div>
    )
}
