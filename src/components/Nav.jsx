import React, { Component } from 'react';
import { Router } from '@reach/router'

class Nav extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
       <ul>
         <li>Articles</li>
         <li>Topics</li>
         <li>Users</li>
         <li>Profile</li>
       </ul>
      </div>
    );
  }
}
 
export default Nav;