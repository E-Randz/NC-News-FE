import React, { Component } from 'react';
import { fetchUserData } from '../api';
import UserItem from './UserItem';
import Articles from './Articles';

class User extends Component {
  state = { 
    user: null,
    articles: [],
  }
  componentDidMount() {
    const { username } = this.props;
    fetchUserData(username)
      .then(({user, articles}) => {
        this.setState({
          user,
          articles,
        })
      })
  }
  
  render() { 
    const { user,  articles } = this.state;
    const { username } = user;
    return ( 
      user &&
      <>
        <h1>{username}</h1>
        <UserItem user={user} className='User-profile-item' />
        <Articles className='User-articles' articles={articles} title={`${username}'s Articles`} />
      </>
    );
  }
}
 
export default User;