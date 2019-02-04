import React, { Component } from 'react';
import Articles from './Articles';
import Dashboard from './Dashboard';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Dashboard />
        <Articles />
      </div>
    );
  }
}
 
export default Home;