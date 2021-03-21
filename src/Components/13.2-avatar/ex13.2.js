import React, { Component } from "react";
import axios from "axios";
import Card from "./card";
import './style.css'

export default class ex13 extends Component {
  state = {
    avatars: [],
    filterAvatars: [],
    Search:'',
  };

  async componentDidMount() {
    let request = await axios.get("https://randomuser.me/api/?results=10", {});

    this.setState({
      avatars: request.data.results,
    });
  }

  changeInputHander = (e) => {
    this.setState({
      Search: e.target.value,
    });
  };

  onClickSearchHandler = () => {
    let search = this.state.avatars.filter((p) => {
      return p.name.first.includes(this.state.Search);
    });

    this.setState({ filterAvatars: search });
  };

  render() {
    let Display = this.state.filterAvatars.map(p =>{
        return <Card firstname = {p.name.first} lastname = {p.name.last} picture = {p.picture.large}></Card>
    })


    return (
      <div>
        <input onChange={this.changeInputHander} />
        <button onClick={this.onClickSearchHandler}>Search</button>
        <div className="grid">
        {Display}
        </div>
      </div>
    );
  }
}

// return student[typeSearch].includes(p.target.value)
