import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';

class Topics extends Component {
  state = { 
    topics: [],
  }
  render() { 
    return ( 
      <div className='Topics'>
        Topics
      </div>
    );
  }
}
 
export default Topics;