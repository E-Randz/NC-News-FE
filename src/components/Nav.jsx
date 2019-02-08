import React, { Component } from 'react';
import '../styles/Nav.css'
import { Link } from '@reach/router'

class Nav extends Component {
  state = {  }
  render() { 
    // const { user } = this.props;
    return ( 
      <div className='Header-nav'>
        <ul className='Nav-list'>
          <li className='Nav-item'><Link to='/articles'>Articles</Link></li>
          <li className='Nav-item'><Link to='/topics'>Topics</Link></li>
          <li className='Nav-item'><Link to='/users'>Users</Link></li>
          {/* <li className='Nav-item'>
            
              <Link to='/profile'>
                {user ? user.username : 'Login'}
              </Link>
              <span className='User-img'>
               {user && <img src={user.avatar_url} alt='user avatar'/>}
              </span>
          </li> */}
        </ul>
      </div>
    );
  }
}
 
export default Nav;