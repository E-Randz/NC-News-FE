import React, { Component } from 'react';
import '../styles/Nav.css'
import { Link } from '@reach/router'
import PropTypes from 'prop-types';

class Nav extends Component {
  state = {  }
  render() { 
    const { user, handleLogout } = this.props;
    return ( 
      <nav className='Header-nav'>
        <ul className='Nav-list'>
          <li className='Nav-item'><Link to='/articles'>Articles</Link></li>
          <li className='Nav-item'><Link to='/topics'>Topics</Link></li>
          <li className='Nav-item'><Link to='/users'>Users</Link></li>
          {user && <li className='Nav-item'><button onClick={handleLogout}>Logout</button></li>}
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func
}
 
export default Nav;