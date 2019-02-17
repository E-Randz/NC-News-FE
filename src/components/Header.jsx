import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import PropTypes from 'prop-types';

const Header = ({ user, handleLogout }) => {
  return(
    <div className="App-header">
      <Logo />
      <Nav handleLogout={handleLogout} user={user}/>   
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func
}

export default Header;