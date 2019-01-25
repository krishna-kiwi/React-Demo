import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default class Message extends Component {
	render() {
        return (
            <BrowserRouter>
			      <div>
			        <ul>
			          <li>
			            <Link to="/">Home</Link>
			          </li>
			          <li>
			            <Link to="/about">About</Link>
			          </li>
			          
			        </ul>

			        <hr />

			        <Route exact path="/" component={Home} />
			        <Route path="/about" component={About} />
			        
			      </div>
			  </BrowserRouter>
        )
    }
}

export function Home() {
  return (
    <div>
      <h2>Home component</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
