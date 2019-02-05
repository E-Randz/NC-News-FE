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
import Auth from './components/Auth';



class App extends Component {
  state = {
    user: null,
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header user={user}/>
        <Auth user={user} setUser={this.setUser} >
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
        </Auth>
      </div>
    );
  }
  setUser = (user) => {
    console.log(user, '<===setuser')
    this.setState({
      user,
    })
  }
}

export default App;
