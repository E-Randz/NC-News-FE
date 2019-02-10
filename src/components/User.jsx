import React, { Component } from 'react';

class User extends Component {
  state = { 
    user: null,
  }
  componentDidMount() {
    console.log(this.props);
  }
  
  render() { 
    return ( 
      <div>Not in use yet. Will be filled with profile info and previous post and comments.
      </div>
    );
  }
}
 
export default User;