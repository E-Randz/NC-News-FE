import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css';
import { Link } from '@reach/router';

class Dashboard extends Component {
  state = { 
    icon: faPenSquare,
    dashboardOpen: false,
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
    const { user } = this.props;
    const { icon, dashboardOpen } = this.state;

    return ( 
      <div className='Dashboard'>
        {user && dashboardOpen &&
        <div className='Dashboard-buttons'>
        <Link to='/create-article'>Create Article</Link>
        <Link to='/create-topic'>Create Topic</Link>
        </div>
        }
        <button onClick={this.toggleDashboard} className='Dashboard-open' aria-label="Open Dashboard" ><FontAwesomeIcon icon={icon} className='dashboard-icon' /></button>
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
 
export default Dashboard;