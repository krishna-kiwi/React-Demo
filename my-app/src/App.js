import React from 'react';
import ChangeInput from './click-event.js';
import Message from './message.js';
import Banner, {Content,Header} from './banner.js';
import Person,{cube,foo,graph} from './my-module.js';



class App extends React.Component {
	
  render() {
  	const MyComponents = {
  			DatePicker: function DatePicker(props) {
    		return <div>Imagine a {props.color} datepicker here.</div>;
  		},
  		TimePicker: function timePicker(props){
  			return <div> Imagine a {props.time} timepicker here.</div>
  		}
	}
	console.log(cube(3));
  graph.draw();
  console.log(foo);
	
    return (
      <div>
          <Person/>
          <Banner/>
          <Content/>
          <Header/>
        	<ChangeInput color="green"/>
        	<Message />
        	<MyComponents.DatePicker color="blue" />
        	<MyComponents.TimePicker time="11:21AM" />
        	<HelloWorld />

      </div>

    );
  }
}


export default App;

	function HelloWorld() {
  
  		return <Hello toWhat="World" />;
	}

	function Hello(props){
		console.log(props)
		return <div>{props.toWhat}</div>;
	}

