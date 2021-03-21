import React, { Component } from 'react'
import Data from './data'
import Name from './Names'
import Card from './card'
export default class ex13 extends Component {
    

state = {
    Students:Data.data,
    Names:[],
    before:[]
}


 componentDidMount(){
    this.GetAllNames()
    this.GetAllBornbefore()
}

GetAllNames = () =>{
    let Names = this.state.Students.map(p =>{
       return  p.name
    })
    this.setState({Names:Names})
}

GetAllBornbefore = () =>{

let born =  this.state.Students.filter(p =>{
        let el = p.birthday.split('-')
        el = parseInt(el[2])
        if(el < 1990){
            return p
        }
 })

  this.setState({
    before: born
    })
}
    render() {

      
        return (
            <div>
              {this.state.Names.map(p =>{
                    return <Name name ={p}></Name>
                })}

                {this.state.before.map(p =>{
                   return  <Card name = {p.name} birthday = {p.birthday} favoriteFoods = {p.favoriteFoods}></Card>
                })}

            </div>
            
        
        )
    }
}
