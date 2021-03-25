import React, { Component } from 'react'
import axios from 'axios'


export default class ex17 extends Component {
    

    state ={
        data:[]
    }


    async componentDidMount(){
     let data =  await axios.get('https://605b56db27f0050017c06ea5.mockapi.io/Students')
     this.setState({data:[...data.data]})
    }
    
    
    DeleteHandler = async (e) =>{
        let data =  await axios.delete(`https://605b56db27f0050017c06ea5.mockapi.io/Students/${e.target.value}`)
        console.log(data)
    }


    UpdateHandler  = async(e) =>{        
        let data = await axios.put(`https://605b56db27f0050017c06ea5.mockapi.io/Students/${e.target.value}`,{name:'eyalllllllllllll'})
       
    }

    AddNewStudent = async () =>{
        let data = await axios.post(`https://605b56db27f0050017c06ea5.mockapi.io/Students`,{name:'eyalllllllllllll!!!!!!!!!!!!!!!!!!!'})
           
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                {
                    this.state.data.map(p=>{
                        console.log(p)
                        return (
                        <div>
                            <h1>{p.name}</h1>
                            <button value={p.id} onClick = {this.DeleteHandler}>Delete</button>
                            <button value={p.id} onClick={this.UpdateHandler}>Update</button>
                        </div>
                        )
                    })
                }
                <button onClick={this.AddNewStudent}>Add New</button>
            </div>
        )
    }
}
