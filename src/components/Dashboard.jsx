import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  state = { 
    dashboardOpen: false,
  }

  render() { 
    const { user } = this.props;
    const { dashboardOpen } = this.state;
    const icon = dashboardOpen ? faWindowClose : faPenSquare;
    const buttonProps = {
      onClick: this.toggleDashboard,
      className: 'Dashboard-open',
      'aria-label': 'Open Dashboard'
    }
    return ( 
      <div className='Dashboard'>
        {user && dashboardOpen &&
        <div className='Dashboard-buttons'>
          <Link to='/create-article'>Create Article</Link>
          <Link to='/create-topic'>Create Topic</Link>
        </div>
        }
        <button {...buttonProps} ><FontAwesomeIcon icon={icon} className='dashboard-icon' /></button>
      </div>
     );
  }

  toggleDashboard = () => {
    const { dashboardOpen } = this.state;
    this.setState({
      dashboardOpen: !dashboardOpen,
    })
  }
}

Dashboard.propTypes = {
  user: PropTypes.object
}
 
export default Dashboard;