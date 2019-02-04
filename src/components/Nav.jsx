import React, { Component } from 'react';
import '../styles/Nav.css'
import { Link } from '@reach/router'

class Nav extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='Header-nav'>
        <ul className='Nav-list'>
          <li className='Nav-item'><Link to='/'>Articles</Link></li>
          <li className='Nav-item'>Topics</li>
          <li className='Nav-item'>Users</li>
          <li className='Nav-item'>Profile</li>
        </ul>
      </div>
    );
  }
}
 
export default Nav;