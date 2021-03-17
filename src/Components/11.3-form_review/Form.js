import React, { Component } from "react";
import './style.css'


export default class Form extends Component {
  
  
    FormSubmit = (e) =>{
        e.preventDefault()
       this.props.ShowFormHandler(false)
    }
  
  
render() {
    return (
      <div>
        <form action="" onSubmit={this.FormSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={this.props.onChangeHandler}
            value = {this.props.firstname}
          />
          <label htmlFor="lastname">First Name</label>
          <input type="text" id="lastname" name="lastname"  onChange={this.props.onChangeHandler}  value = {this.props.lastname}/>

          <label htmlFor="age">Free Text:</label>
          <select name="age" id="age"  onChange={this.props.onChangeHandler} value={this.props.age}>
            <option value="young">0-15</option>
            <option value="teeneger">15-20</option>
            <option value="adult">21-50</option>
            <option value="old">50-80</option>
          </select>

          <label htmlFor="freetext">Free Text:</label>
          <textarea
            name="freetext"
            id="freetext"
            cols="60"
            rows="10"
            onChange={this.props.onChangeHandler}
            value = {this.props.freetext}
          ></textarea>
          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
}
