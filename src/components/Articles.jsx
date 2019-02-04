import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';

class Articles extends Component {
  state = { 
    articles: [],
    sortAndFilterCriteria: null,
  }
  render() { 
    return ( 
      <div className='Articles'>
        <SortAndFilter />
        <div>Articles</div>
      </div>
    );
  }
}
 
export default Articles;