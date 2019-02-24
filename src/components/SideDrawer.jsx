import React from 'react';
import { Link } from '@reach/router';
import '../styles/SideDrawer.css';
import PropTypes from 'prop-types';

const SideDrawer = ({ show, drawerToggleClick, handleLogout, user }) => {
  const drawerClasses = show ? 'side-drawer open' : 'side-drawer' 
  return ( 
    <nav className={drawerClasses}>
      <div>
        <button onClick={drawerToggleClick} className='close-button'>X</button>
      </div>
      <ul>
        <li onClick={drawerToggleClick} className='Nav-item'><Link to='/articles'>Articles</Link></li>
        <li onClick={drawerToggleClick} className='Nav-item'><Link to='/topics'>Topics</Link></li>
        <li onClick={drawerToggleClick} className='Nav-item'><Link to='/users'>Users</Link></li>
        {user && <li className='Nav-item' onClick={handleLogout}><Link to='/'>Log out</Link></li>}
      </ul>
    </nav>
  );
}

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
  drawerToggleClick: PropTypes.func.isRequired,
}

 
export default SideDrawer;