import React, { Component } from 'react';
import '../styles/Header.css'
import Logo from './Logo';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  state = { 
    dashboardOpen: false,
    icon: faPenSquare,
  }
  render() { 
    const { user } = this.props
    const { icon } = this.state;
    return ( 
      <div className='App-header'>
        <FontAwesomeIcon onClick={this.toggleModal} icon={icon} />
        <Logo />
        <Nav user={user}/>
      </div>
     );
  }
  toggleModal = () => {
    const { dashboardOpen } = this.state;
    if (!dashboardOpen) {
      this.setState({
        dashboardOpen: true,
        icon: faWindowClose,
      })
    } else {
      this.setState({
        dashboardOpen: false,
        icon: faPenSquare,
      })
    }
  }
}
 
export default Header;