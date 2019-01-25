import React, { Component } from "react";

export default class ChangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hello",
      isToggleOn: false,
      image:require('./pic_bulboff.gif')
    };
    this.handleClick = this.handleClick.bind(this);
  }
  changeText = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Enter Text here </label>
        <input type="text" id="name" onChange={this.changeText} />
        <h3>{this.state.name}</h3>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        <img src={this.state.isToggleOn ? require('./pic_bulbon.gif') : this.state.image} alt="" title="" />

      </div>
    );
  }
}



