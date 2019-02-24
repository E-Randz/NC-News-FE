import React from 'react';
import { Link } from '@reach/router';

const SideDrawer = (props) => {
  return ( 
    <nav className='side-drawer'>
      <ul>
        <li className='Nav-item'><Link to='/articles'>Articles</Link></li>
        <li className='Nav-item'><Link to='/topics'>Topics</Link></li>
        <li className='Nav-item'><Link to='/users'>Users</Link></li>
      </ul>
    </nav>
  );
}
 
export default SideDrawer;