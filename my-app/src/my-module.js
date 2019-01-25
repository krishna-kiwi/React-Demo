import React from 'react';

function cube(x) {
    return x * x * x;
}

var foo = Math.PI + Math.SQRT2;

var graph = {
    options: {
        color: 'white',
        thickness: '2px'
    },
    draw: function () {
        console.log('From graph draw function');
    }
};
export {cube,foo,graph};

 const Person= () => {

	return( 
		<fragment>
			<div>I am React App</div>
			<p>I' am a Person! and I am {Math.floor(Math.random() * 30)} year old.</p>
		</fragment>
	)
}

export default Person;