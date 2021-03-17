
import React, { Component } from 'react'

import Form from './Form'
import FormAccept from './FormAccept'
import './style.css'
export default class ex11 extends Component {
    
    
    state = {
        firstname:'',
        lastname:'',
        age:'young',
        freetext:'',
        FormArray:[],
        showForm:true
    }
    

    onChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    ShowFormHandler = (e) =>{
        this.setState({showForm:e})
    }


    conirmFormHandler = (e) =>{
        
        if (e === 'send') {
            
         let temp = this.state.FormArray 
            temp.push({
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                age:this.state.age,
                freetext:this.state.freetext
            })   
            this.setState({
                firstname:'',
                lastname:'',
                age:'young',
                freetext:'',
                FormArray:temp,
                showForm:true
            })

        }else{
            this.setState({showForm:true})
        }
    }


    render() {

        let form;
        if (this.state.showForm) {
            form = <Form 
                    onChangeHandler = {this.onChangeHandler} 
                    ShowFormHandler = {this.ShowFormHandler} 
                    firstname ={this.state.firstname}
                    lastname = {this.state.lastname}
                    age={this.state.age}
                    freetext ={this.state.freetext}></Form>
        }else{
            form = (<FormAccept 
                    firstname ={this.state.firstname}
                    lastname = {this.state.lastname}
                    age={this.state.age}
                    freetext ={this.state.freetext}
                    conirmFormHandler = {this.conirmFormHandler}></FormAccept>)
        }


        return (

            <div className="container">
            <div className="body left">
                {form}
            </div>
           
            <div className="body right">
            {
                this.state.FormArray.map(p =>{
                return( 
                    <div className="border">
                    <h2><u>Survey</u></h2>
                    <h3>{p.firstname}</h3>
                    <h3>{p.lastname}</h3>
                    <h3>{p.age}</h3>
                    <h3>{p.freetext}</h3>
                    </div>  
                    )
                })
            }
            </div>
            </div>
        )
    }
}
