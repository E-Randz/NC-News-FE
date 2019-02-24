import React, { Component } from 'react';
import { getUserByUsername } from '../api';
import PropTypes from 'prop-types';
import '../styles/Auth.css'

class Auth extends Component {
  state = { 
    username: 'tickle122',
    userErr: '',
    userLoading: false,
  }
  
  render() { 
    const { user, children } = this.props;
    const { username, userErr } = this.state;
    const userOptions = ['tickle122', 'grumpy19', 'happyamy2016', 'cooljmessy', 'weegembump', 'jessjelly'];
    return (
      user ? children : 
      <div className='Login-background'>
        <div className='Login-page'>
          <h1>Welcome to NC News</h1>
          <h2>Please Log In</h2>
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange} value={username}>
              {userOptions.map((user) => {
                return <option key={user} name={user}>{user}</option>
              })}
            </select>
            <button>Submit</button>
          </form>
          {userErr && <p>Invalid Username</p>}
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      username: value,
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
  children: PropTypes.array,      
}
 
export default Auth;