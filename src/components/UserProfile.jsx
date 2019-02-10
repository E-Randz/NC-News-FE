import React, { Component } from 'react';
import { getUserByUsername, fetchUserArticles } from '../api';

class User extends Component {
  state = { 
    user: null,
  }
  componentDidMount() {
    const { username } = this.props;
    getUserByUsername(username)
      .then(({ user }) => {
        this.setState({
          user,
        })
      })
  }

  componentDidUpdate() {

  }
  
  render() { 
    return ( 
      <div>Not in use yet. Will be filled with profile info and previous post and comments.
      </div>
    );
  }
}
 
export default User;