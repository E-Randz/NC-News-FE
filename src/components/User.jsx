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
      <div>hello</div>
    );
  }
}
 
export default User;