import React, { Component } from 'react';
import { fetchUserData } from '../api';
import UserItem from './UserItem';
import Articles from './Articles';
import { navigate } from '@reach/router';
import '../styles/UserProfile.css';
import '../styles/UserItem.css';
import '../styles/Articles.css';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  state = { 
    user: null,
    articles: [],
  }
  componentDidMount() {
    const { username } = this.props;
    fetchUserData(username)
      .then(({user, articles}) => {
        this.setState({
          user,
          articles,
        })
      })
      .catch((err) => {
        navigate('/error', {state: {errCode: err.response.status}});
      })
  }
  
  render() { 
    const { user,  articles } = this.state;
    return ( 
      user &&
      <div className="User-profile">
        <h1>Profile</h1>
        <UserItem user={user} className='User-profile-item' />
        <Articles className='User-articles' articles={articles} title={`${user.username}'s Articles`} />
      </div>
    );
  }
}

UserProfile.propTypes = {
  username: PropTypes.string,
}
 
export default UserProfile;