import React, { Component } from 'react';
import { fetchUsers } from '../utils';
import UserItem from './UserItem';


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
          <UserItem key={user.username} user={user} />
        )
      })}
      </div>
    );
  }
}
 
export default Users;