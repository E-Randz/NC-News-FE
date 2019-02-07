import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css';
import { Link } from '@reach/router';

class Dashboard extends Component {
  state = { 
    icon: faPenSquare,
  }
  componentDidUpdate(prevProps, _){
    const { dashboardOpen } = this.props;
    if (dashboardOpen !== prevProps.dashboardOpen){
      const icon = dashboardOpen ? faWindowClose : faPenSquare;
      this.setState({
        icon,
      })
    }
  }
  render() { 
    const { user, toggleDashboard, dashboardOpen } = this.props;
    const { icon } = this.state;
    return ( 
      <div className='Dashboard'>
        {user && dashboardOpen &&
        <div className='Dashboard-buttons'>
        <Link to='/create-article'>Create Article</Link>
        <Link to='/create-topic'>Create Topic</Link>
        </div>
        }
        <button className='Dashboard-open' aria-label="Open Dashboard" ><FontAwesomeIcon onClick={toggleDashboard} icon={icon} className='dashboard-icon' /></button>
      </div>
     );
  }

}
 
export default Dashboard;