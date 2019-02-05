import React from 'react';
import Button from './Button';
import { Link } from '@reach/router';

const UserItem = (props) => {
  const { username, name, avatar_url } = props.user;
  return ( 
    <div className="User-item">
      <div>
        <img src={avatar_url} alt={username} className="User-avatar"/>
      </div>
      <p className="User-username">Username: {username}</p>
      <p className="User-name">Name: {name}</p>
      <Link to={`${username}`} ><Button buttonPurpose='More Info'/></Link>
    </div>
  );
}
 
export default UserItem;