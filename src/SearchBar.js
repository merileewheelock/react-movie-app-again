import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}


	handleSubmit(event){
		event.preventDefault()
		this.props.searchFunction(this.state.searchInput)
	}

	handleChange(event){
		this.setState({
			searchInput: event.target.value
		})
	}	

	render(){
		return(
			<form onSubmit={this.handleSubmit} className="text-center">
				<input type="text" placeholder="search" value={this.state.searchInput} onChange={this.handleChange} />
				<button type="submit">Go</button>
			</form>
		)
	}
}

export default SearchBar;