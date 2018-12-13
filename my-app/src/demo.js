import React from 'react';

export default class Welcome extends React.Component{
	render(){
		return(
			<section>
				<h1 id="view">Hello,{this.props.name}</h1>
			</section>
		)
	}
}

