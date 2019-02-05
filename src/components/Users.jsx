import React, { Component } from 'react';
import { fetchUsers } from '../utils';
import User from './User';


class Users extends Component {
  state = { 
    users: [],
    loadingUsers: true,
  }
  componentDidMount () {
    fetchUsers()
      .then(users => {
        this.setState({
          users,
          loadingUsers: false,
        })
      })
  }
  render() { 
    const { loadingUsers, users} = this.state;
    return ( 
      <div className='Users'>
      {loadingUsers && <p>Loading Users...</p>}
      {users.map(user => {
        return (
          <User user={user} />
        )
      })}
      </div>
    );
  }
}
 
export default Users;