import React from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import Dashboard from './Dashboard';

const Header = (props) => {
    const { user, toggleDashboard } = props;
    return ( 
      <div className='App-header'>
        <Dashboard toggleDashboard={toggleDashboard} user={user}/>
        <Logo />
        <Nav user={user}/>
      </div>
     );
  }

 
export default Header;