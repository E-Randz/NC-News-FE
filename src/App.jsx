import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'
import Topics from './components/Topics';
import Users from './components/Users';
import Profile from './components/Profile';


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
          <Topics path='/topics'/>
          <Users path='/users' />
          <Profile path='/profile'/>
        </Router>
      </div>
    );
  }
}

export default App;
