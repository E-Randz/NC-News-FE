import React, { Component } from 'react';
import './styles/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header'
import Topics from './components/Topics';
import Users from './components/Users';
// import User from './components/User';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import CreateArticle from './components/CreateArticle';
import CreateTopic from './components/CreateTopic';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  state = {
    user: null,
    dashboardOpen: false,
  }
  render() {
    const { user, dashboardOpen } = this.state;
    return (
      <div className="App">
        <Header user={user}/>
        <Auth user={user} setUser={this.setUser} >
          <Router onClick={this.toggleDashboard} className="App-page">
            <Home user={user} path='/'/>
            <Articles className='Articles' title='Articles' path='/articles' />
            <Article user={user} path='/articles/:article_id' />
            <CreateArticle className='Create-article' user={user} path='/create-article'/>
            <Topics path='/topics'/>
            <CreateTopic className='Create-topic' path='/create-topic'/>
            <Articles className='Articles' title='Articles' path='/topics/:topic/articles' />
            <Users path='/users' />
            {/* <User path='/users/:username' /> Not in use yet need to do another join to get comments and post history */}
            <Profile path='/profile'/>
            <PageNotFound default />
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
    const targetClasses = [...e.target.classList];
    if (!dashboardOpen) {
      if(targetClasses.includes('fa-pen-square') || targetClasses.includes('Dashboard-open')){
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
