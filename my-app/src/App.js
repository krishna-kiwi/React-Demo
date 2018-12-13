import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.js';
import Welcome from './demo.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <Welcome name="krishna"/>
         <Welcome name="React"/>
      </div>
    );
  }
}


export default App;

