import React, { Component } from 'react';
import './App.css';

import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBCVJpn3gnfSTyKieqo05WumMlFzWWDqiI';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar />
      </div>
    );
  }
}

export default App;
