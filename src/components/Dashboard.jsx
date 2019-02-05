import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component {
  state = { 
    dashboardOpen: false,
    icon: faPenSquare,
  }
  componentDidUpdate(_, prevState) {
    const { toggleDashboard } = this.props;
    const { dashboardOpen } = this.state;
    if(prevState.dashboardOpen !== dashboardOpen) {
      toggleDashboard(dashboardOpen);
    }
  }
  render() { 
    const { user } = this.props
    const { icon } = this.state;
    return ( 
      user && 
      <div className='Dashboard-button'>
        <button aria-label="Open Dashboard" ><FontAwesomeIcon onClick={this.toggleModal} icon={icon} /></button>
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