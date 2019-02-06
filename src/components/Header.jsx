import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';

const Header = (props) => {
    const { user } = props;
    return ( 
      <div className='App-header'>
        <Logo />
        <Nav user={user}/>
      </div>
     );
  }

 
export default Header;