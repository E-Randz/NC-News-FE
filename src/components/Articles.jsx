import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../utils';

class Articles extends Component {
  state = { 
    articles: [],
    sortAndFilterCriteria: null,
  }

  componentDidMount() {
    const articles = this.fetchArticles();
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