//functional component example
// import React from 'react';
//
// const SearchBar = () => {
// 	return <input />;
// };
//
// export default SearchBar;


//class based component
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};//this.state will always be an object
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// onInputChange(e) {
// 	console.log(e.target.value);//logs input field in input box
//
// }

export default SearchBar;
