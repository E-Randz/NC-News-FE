import React from 'react';
import { Link } from '@reach/router';
import '../styles/UserItem.css';
import PropTypes from 'prop-types';

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
      <Link to={`/users/${username}`} ><button>More Info</button></Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string.isRequired
}

export default UserItem;