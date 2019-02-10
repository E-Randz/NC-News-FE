import React, { Component } from 'react';
import { getUserByUsername, fetchUserArticles } from '../api';

class User extends Component {
  state = { 
    user: null,
  }
  componentDidMount() {
    const { username } = this.props;
    let user;
    getUserByUsername(username)
      .then((user) => {
        console.log(user);
      })
  }
  
  render() { 
    return ( 
      <div>Not in use yet. Will be filled with profile info and previous post and comments.
      </div>
    );
  }
}
 
export default User;