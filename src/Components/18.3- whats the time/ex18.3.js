import React,{useState} from 'react'

export default function Ex18() {
   

    const [Data,SetData] = useState([0,0,0])

    const  TimeMangement = (ID,e) =>{

        let value;         
        
       if (isNaN(parseInt(e.target.value))){
        value =0
       }else{
        value = e.target.value;    
       }


        let DATA = [...Data] 
        DATA[ID] = parseInt(value) 
        console.log(DATA)
        DATA[1] += parseInt(DATA[0]/60)
        DATA[2] += DATA[1]/60  
        DATA[0] = DATA[0]%60
        SetData(DATA)
    }

    return (
        <div>
            <label htmlFor="" >Seconds</label>
            <input type="number" value={Data[0]}  onChange={(e) => {TimeMangement(0,e)}}/>
            <label htmlFor="">Mintues</label>
            <input type="number" value={Data[1]}  onChange={(e) => {TimeMangement(1,e)}}/>
            <label htmlFor="">Hours</label>
            <input type="number" value={Data[2]} onChange={(e) => {TimeMangement(2,e)}}/>

        </div>
    )
}
