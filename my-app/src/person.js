import React from 'react';

export default class Person extends React.Component{

	constructor(props){
		super();
		this.state={
			name: 'krishna',
			country: 'india',
			states: 'Delhi'
		}
	}

	render(){

		console.log(this.state)
		return(
			<section>
				<h1>hello </h1>
				<ul>
					<li>My Name is {this.state.name}</li>
					<li>I belong to {this.state.states} which is in {this.state.country} </li>
				</ul>
			</section>
		)
	}
}

