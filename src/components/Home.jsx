import React, { Component } from 'react';
import Articles from './Articles';
import Dashboard from './Dashboard';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <Dashboard />
        <Articles />
      </>
    );
  }
}
 
export default Home;