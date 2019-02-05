import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../utils';

class Articles extends Component {
  state = { 
    articles: [],
    sortAndFilterCriteria: null,
  }

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      articles
    })
  }
  render() { 
    return ( 
      <div className='Articles'>
        <SortAndFilter />
        <div className='Articles-results'>

        </div>
      </div>
    );
  }

}
 
export default Articles;