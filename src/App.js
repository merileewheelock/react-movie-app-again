import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {
	constructor(props) {
		super(props);
		// in order to define a state variable, we put it in the constructor
		// we define it as an object on this.state
		// this replaces getInitialState()
		this.state = {
			moviePosters: []
		}
	}

	// componentDidMount runs after the first render
	componentDidMount() {
		// This is where we will put our AJAX request because we cannot render yet
		console.log("I'm in the DOM");
		var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			// changing state the trigger a re-render (i.e. render will run again)
			// NEVER EVER change state directly
			this.setState({
				moviePosters: movieData.results
			})
		});
	}

	// every component must have a render member method
	render() {
		var postersArray = [];
		// first time through render, this will be an empty array
		// second time through (after componentDidMount), it won't be empty
		this.state.moviePosters.map((poster, index)=>{
			// console.log(poster);
			postersArray.push(<Poster poster={poster} key={index} />)
			return
		});

		// After componentDidMount is finished changing state, postersArray looks like:
		// postersArray[
		// 	<Poster poster={poster} key={index} />,
		// 	<Poster poster={poster} key={index} />,
		// 	<Poster poster={poster} key={index} />,
		// 	...
		// ]

		return (
			<div className="App">
				<h1>This is totally the first movie app we have made</h1>
				{postersArray}
			</div>
		);
	}
}

export default App;
