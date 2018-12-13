import React from 'react';

export default class Banner extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component{
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
          <h2>Content</h2>
          <p>The content text!!!</p>
      </div>
    );
  }
}








