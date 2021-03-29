import React,{useState} from 'react'
import CheckBox from './checkbox'
export default function Ex18() {
    
    const Names = ["one", "two", "three", "four", "five"];
    const [Checks,SetCheck] =  useState([{name:"one",check:false}, {name:"two",check:false}, {name:"three",check:false}, {name:"four",check:false}, {name:"five",check:false}]) 


    const changeChecked = (id) =>{
      let  CHECKS = [...Checks]
        CHECKS[id].check = !CHECKS[id].check
        SetCheck(CHECKS)
    }


    const DELETHandler = () =>{
        let CHECKS  = [...Checks]
        CHECKS = CHECKS.filter(p =>{
            return p.check !==  true
        })
    
        SetCheck(CHECKS)
    }


    const ResetHandler = () =>{

        let CHECK = Names.map(p =>{
            return {name:p,check:false}
        })

        SetCheck(CHECK)

    }
     

    return (
        <div>
            <button onClick={DELETHandler}>delete</button>
            <button onClick={ResetHandler}>Reset</button>
            {
              Checks.map((p,index) =>{
                    return  <CheckBox name = {p.name} key={index} id={index} Checks = {p.check} changeChecked = {changeChecked}></CheckBox>
              })   
            }
    
        </div>
    )
}
