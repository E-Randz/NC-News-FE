import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css';
import Button from './Button';
import { Link } from '@reach/router';

class Dashboard extends Component {
  state = { 
    dashboardOpen: false,
    icon: faPenSquare,
  }
  render() { 
    const { user } = this.props;
    const { icon, dashboardOpen } = this.state;
    return ( 
      <div className='Dashboard'>
        {user && dashboardOpen &&
        <div className='Dashboard-buttons'>
        <Link to='/create-article'><Button buttonPurpose={'New Article'}/></Link>
        <Link to='/create-topic'><Button buttonPurpose={'New Topic'}/></Link>
        </div>
        }
        <button className='Dashboard-open' aria-label="Open Dashboard" ><FontAwesomeIcon onClick={this.toggleModal} icon={icon} /></button>
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
 
export default Dashboard;