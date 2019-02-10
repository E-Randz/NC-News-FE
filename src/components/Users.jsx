import React, { Component } from 'react';
import { fetchUsers } from '../api';
import UserItem from './UserItem';
import '../styles/Users.css';


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
      <h1>Users</h1>
        {loadingUsers && <p>Loading Users...</p>}
        {users.map(user => {
          return (
            <UserItem className="User-item" key={user.username} user={user} />
          )
        })}
      </div>
    );
  }
}
 
export default Users;