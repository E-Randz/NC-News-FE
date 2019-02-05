import React, { Component } from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import Button from './Button';


const Header = () => {
  return ( 
    <div className='App-header'>
      <Logo />
      <Nav />
    </div>
   );
}
 
export default Header;