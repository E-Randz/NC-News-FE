import React from 'react';
import Button from './Button';
import { Link } from '@reach/router';
import '../styles/UserItem.css';

const UserItem = (props) => {
  const { username, name, avatar_url } = props.user;
  const { className } = props;

  return (
    <div className={className}>
      <div >
        <img src={avatar_url} alt={username} className="User-avatar"/>
      </div>
      <p className="User-username">Username: {username}</p>
      <p className="User-name">Name: {name}</p>
      <Link to={`/users/${username}`} ><Button buttonPurpose="More Info"/></Link>
    </div>
  );
}

export default UserItem;