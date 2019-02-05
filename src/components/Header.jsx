import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';


const Header = () => {
  return ( 
    <div className='App-header'>
      <Logo />
      <Nav />
    </div>
   );
}
 
export default Header;