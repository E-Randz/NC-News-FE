import React, { Component } from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icons from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  state = { 
    dashboardOpen: false
  }
  render() { 
    const { user } = this.props
    return ( 
      <div className='App-header'>
        <Logo />
        <Nav user={user}/>
      </div>
     );
  }
}
 
export default Header;