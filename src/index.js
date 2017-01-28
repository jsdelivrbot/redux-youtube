import _ from 'lodash';
import React , { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//npm install --save youtube-api-search
const API_KEY = 'AIzaSyDyqm6gPKQWDvK9xz2fCcK53uKwYKe9ndI';

//returns youtube data to console
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
// 	console.log(data);
// });

// Create a new component. this component should produce html
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		 };

		 this.videoSearch('surboards');

		// YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		// 	this.setState({
		// 		videos: videos,
		// 		selectedVideo: videos[0]
		// 	 });
		// 	//this.setState({ videos: videos }); works with same names only
		// });
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			 });
			//this.setState({ videos: videos }); works with same names only
		});
	}

	render() {
		//this _.debounce is from lodash
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
