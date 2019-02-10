import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'
import Topics from './components/Topics';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import CreateArticle from './components/CreateArticle';
import CreateTopic from './components/CreateTopic';
import HandleError from './components/HandleError';

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
          <Router onClick={this.toggleDashboard} className="App-page">
            <Home user={user} path='/'/>
            <Articles className='Articles' title='Articles' path='/articles' />
            <Articles className='Articles' title='Articles' path='/topics/:topic/articles' />
            <Article user={user} path='/articles/:article_id' />
            <CreateArticle className='Create-article' user={user} path='/create-article'/>
            <Topics path='/topics'/>
            <CreateTopic className='Create-topic' path='/create-topic'/>
            <Users path='/users' />
            <UserProfile path='/users/:username' />
            <Profile path='/profile'/>
            <HandleError default />
          </Router>
          <Dashboard user={user} />
        </Auth>
      </div>
    );
  }
  setUser = (user) => {
    this.setState({
      user,
    })
  }
}

export default App;
