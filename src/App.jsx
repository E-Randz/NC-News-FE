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
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

class App extends Component {
  state = {
    user: null,
    isSideDrawerOpen: false,
  }

  componentDidMount() {
    const user = sessionStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    if (user) {
      this.setState({
        user: parsedUser
      });
    }
  }

  render() {
    const { user, isSideDrawerOpen } = this.state;
    return (
      <div className="App">
        <Header handleLogout={this.handleLogout} drawerToggleClick={this.drawerToggleClick}  user={user}/>
        <SideDrawer drawerToggleClick={this.drawerToggleClick} handleLogout={this.handleLogout} user={user} show={isSideDrawerOpen}/>
        {isSideDrawerOpen &&
          <>
          <Backdrop drawerToggleClick={this.drawerToggleClick}/>
          </>
        }
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
    const userString = JSON.stringify(user);
    sessionStorage.setItem('user', userString);
    this.setState({
      user,
    })
  }
  handleLogout = () => {
    sessionStorage.removeItem('user')
    this.setState((prevState) => {
      return {
        user: null,
        isSideDrawerOpen: false,
      }
    })
  }

  drawerToggleClick = () => {
    this.setState((prevState) => {
      return {
        isSideDrawerOpen: !prevState.isSideDrawerOpen,
      }
      
    })
  }
}

export default App;
