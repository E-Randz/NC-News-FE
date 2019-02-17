import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';

const Header = ({ user, handleLogout }) => <div className="App-header">
        <Logo />
        <Nav handleLogout={handleLogout} user={user}/>
      </div>



export default Header;