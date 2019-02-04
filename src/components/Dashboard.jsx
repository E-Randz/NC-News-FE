import React from 'react';
import UserOverview from './UserOverview';
import Button from './Button';
// import NewTopic from './NewTopic';

const Dashboard = () => {
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
    </div>
   );
}
 
export default Dashboard;