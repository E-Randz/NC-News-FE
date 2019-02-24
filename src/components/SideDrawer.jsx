import React from 'react';
import { Link } from '@reach/router';
import '../styles/SideDrawer.css';
import PropTypes from 'prop-types';

const SideDrawer = ({ show }) => {
  const drawerClasses = show ? 'side-drawer open' : 'side-drawer' 
  return ( 
    <nav className={drawerClasses}>
      <ul>
        <li className='Nav-item'><Link to='/articles'>Articles</Link></li>
        <li className='Nav-item'><Link to='/topics'>Topics</Link></li>
        <li className='Nav-item'><Link to='/users'>Users</Link></li>
      </ul>
    </nav>
  );
}

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
}

 
export default SideDrawer;