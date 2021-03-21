import React, { Component } from 'react'
import axios from 'axios'
export default class ex12 extends Component {
    
    state = {
        joke:'',
        term:'random',
        Categoris:[]
    }
    
    
    async componentDidMount(){
      let req = await axios.get('https://api.chucknorris.io/jokes/categories')
    
        this.setState({Categoris:req.data})
        
    }


    GetRandomJokeHandler = async() =>{

      let request; 
        if(this.state.term === 'random'){
            request =  await axios.get('https://api.chucknorris.io/jokes/random',{})
        }else{
            request = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.term}`,{})
        }

        this.setState({
            joke:request.data.value
        })
        
    }

    CategorySelectHandler = (p) =>{
        this.setState({
            term:p.target.value
        })
    }

    render() {
        return (
            <div>
                   <button onClick = {this.GetRandomJokeHandler}>Get a Chack Noris Joke</button>
                    <select name="" id="" onChange={this.CategorySelectHandler}>
                          <option value="random">random</option>
                          {
                            this.state.Categoris.map(p =>{
                                return <option value={p} key={p}>{p}</option>
                            })
                          }  
                    </select>
                   <p>{this.state.joke}</p>
            </div>
        )
    }
}
