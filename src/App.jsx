import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'
import Topics from './components/Topics';
import Users from './components/Users';
import User from './components/User';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';



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
          <Articles path='/articles' />
          <Article path='/articles/:article_id' />
          <Topics path='/topics'/>
          <Articles path='/topics/:topic/articles' />
          <Users path='/users' />
          <User path='/users/:username' />
          <Profile path='/profile'/>
        </Router>
      </div>
    );
  }
}

export default App;
