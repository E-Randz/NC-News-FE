import React, { Component } from 'react';
import UserOverview from './UserOverview';
import Button from './Button';
// import NewTopic from './NewTopic';

class Dashboard extends Component {
  state = { 
    showing: false
  }
  render() { 
    const buttonPurposes = ['New Topic', 'New Article']
    return ( 
       <div className='Dashboard'>
      <UserOverview />
      {buttonPurposes.map(buttonPurpose => {
        return (
          <div>
            <Button buttonPurpose={buttonPurpose} />
          </div>
        )
      })}
      <Button buttonPurpose='>' />
    </div>
    );
  }
}
 
export default Dashboard;