import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import PropTypes from 'prop-types';

const Header = ({ user, handleLogout, drawerToggleClick }) => {
  return(
    <div className="App-header">
      <Logo />
      <Nav handleLogout={handleLogout} drawerToggleClick={drawerToggleClick} user={user}/>   
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
  drawerToggleClick: PropTypes.func.isRequired,
}

export default Header;