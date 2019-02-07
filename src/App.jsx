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
import Dashboard from './components/Dashboard';
import CreateArticle from './components/CreateArticle';
import CreateTopic from './components/CreateTopic';

class App extends Component {
  state = {
    user: {
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url: "https://image.flaticon.com/icons/svg/145/145842.svg"
    },
    dashboardOpen: false,
  }
  render() {
    const { user, dashboardOpen } = this.state;
    return (
      <div className="App">
        <Header user={user}/>
        <Auth user={user} setUser={this.setUser} >
          <Router onClick={this.toggleDashboard} className="App-page">
            <Home path='/'/>
            <Articles path='/articles' />
            <Article user={user} path='/articles/:article_id' />
            <CreateArticle user={user} path='/create-article'/>
            <Topics path='/topics'/>
            <CreateTopic path='/create-topic'/>
            <Articles path='/topics/:topic/articles' />
            <Users path='/users' />
            <User path='/users/:username' />
            <Profile path='/profile'/>
          </Router>
          <Dashboard dashboardOpen={dashboardOpen} toggleDashboard={this.toggleDashboard} user={user} />
        </Auth>
      </div>
    );
  }
  setUser = (user) => {
    this.setState({
      user,
    })
  }
  toggleDashboard = (e) => {
    const { dashboardOpen } = this.state;
    const { tagName } = e.target;
    if (!dashboardOpen) {
      if(tagName === 'path' || tagName === 'svg'){
        this.setState({
          dashboardOpen: true,
        })
      }
    } else {
      this.setState({
        dashboardOpen: false,
      })
    }
  }
}

export default App;
