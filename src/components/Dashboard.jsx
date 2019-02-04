import React from 'react';
import UserOverview from './UserOverview';
import Button from './Button';
// import NewTopic from './NewTopic';

const Dashboard = () => {
  const buttonPurposes = ['New Topic', 'New Article']
  return ( 
    <div>
      <UserOverview />
      {buttonPurposes.map(buttonPurpose => {
        return <Button buttonPurpose={buttonPurpose} />
      })}
    </div>
   );
}
 
export default Dashboard;