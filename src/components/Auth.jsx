import React, { Component } from 'react';
import { getUserByUsername } from '../api';
import PropTypes from 'prop-types';

class Auth extends Component {
  state = { 
    username: '',
    userErr: '',
    userLoading: false,
  }
  
  render() { 
    const { user, children } = this.props;
    const { username, userErr } = this.state;
    return (
      user ? children : 
      <div className='Login-page'>
        <h2>Please Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={username} name='username' placeholder='username here' onChange={this.handleChange} type="text"/>
          <button>Submit</button>
        </form>
        {userErr && <p>Invalid Username</p>}
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
        setUser(user)
      })
      .catch(err => {
        this.setState({
          username: '',
          userErr: err,
          userLoading: false,
        })
      })
  }
}

Auth.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,                           
  children: PropTypes.element,      
}
 
export default Auth;