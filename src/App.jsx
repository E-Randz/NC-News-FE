import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'


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
        </Router>
      </div>
    );
  }
}

export default App;
