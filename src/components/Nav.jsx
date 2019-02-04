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
          <li className='Nav-item'><Link to='/topics'>Topics</Link></li>
          <li className='Nav-item'><Link to='/users'>Users</Link></li>
          <li className='Nav-item'>Profile</li>
        </ul>
      </div>
    );
  }
}
 
export default Nav;