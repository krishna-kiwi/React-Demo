import React from 'react';

export default class Banner extends React.Component {
  render() {
    return (
      <div>
        my banner
      </div>
    );
  }
}

export class Header extends React.Component{
  render() {
    var myStyle={
      fontSize:20,
      color:'red'
    }
    return (
      <div style={myStyle}>Header Logo</div>
    );
  }
}

export class Content extends React.Component {
  render() {
    return (
      <div>
          <h2>My Content component</h2>
          <p>The content text!!!</p>
      </div>
    );
  }
}








