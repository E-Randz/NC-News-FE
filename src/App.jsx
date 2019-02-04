import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'
import Topics from './components/Topics';


class App extends Component {
  state = {
    currentUser: null,
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router className="App-page">
          <Home path='/'/>
          <Topics />
        </Router>
      </div>
    );
  }
}

export default App;
