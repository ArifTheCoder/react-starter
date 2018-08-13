import React, { Component } from 'react';
import './App.css';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBCVJpn3gnfSTyKieqo05WumMlFzWWDqiI';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: [], 
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'tom-cat'}, (videos) => {
      this.setState({videos: videos,
        selectedVideo: videos[0]
      });        // this.setState({videos: videos})
    });
  }
  render() {
    return (
      <div className="App">
       <SearchBar />
       <VideoDetail  video={this.state.selectedVideo}/>
       <VideoList 
       onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
       videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
