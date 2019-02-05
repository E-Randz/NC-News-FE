import React, { Component } from 'react';
import { getUserByUsername } from '../utils';

class Auth extends Component {
  state = { 
    username: '',
    userErr: '',
    userLoading: false,
  }
  render() { 
    const { user, children } = this.props;
    const { username } = this.state;
    return (
      user ? children : 
      <div className='Login-page'>
        <h2>Please Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={username} name='username' placeholder='username here' onChange={this.handleChange} type="text"/>
        </form>
      </div>
    );
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      userErr: null,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { setUser } = this.props;
    const { username } = this.state;
    this.setState({
      userLoading: true,
    })
    getUserByUsername(username)
      .then(({ user }) => {
        console.log(user);
        setUser(user)
      })
      .catch(err => {
        this.setState({
          userErr: err,
          userLoading: false,
        })
      })
  }
}
 
export default Auth;