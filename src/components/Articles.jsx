import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import '../styles/Articles.css';
import { assembleQueryString } from '../utils';
import Button from './Button';
import ArticleCard from './ArticleCard';

class Articles extends Component {
  state = { 
    articles: [],
    queries: {
      sortBy: '',
      limit: '', 
      sortOrder: '',
    },
    toggleFilter: 'Filter',
  }

  componentDidMount() {
    const { topic, queries } = this.props;
    fetchArticles(topic, queries)
      .then((articles) => {
        this.setState({
          articles
        })
      })
  }

  componentDidUpdate(prevProps) {
    if(this.props.topic !== prevProps.topic ) {
      fetchArticles()
        .then((articles) => {
          this.setState({
            articles,
            queries: {},
          })
        })
    }
  }
  
  render() { 
    const { articles, queries, toggleFilter } = this.state
    const { topic, className, title } = this.props;
    const sortFields = ['created_at', 'title', 'topic', 'created_by', 'votes']
    return ( 
      <div className={className}>
        <div className='Articles-results'>
          <h1>{title}</h1>
          {topic && <h3>~{topic}~</h3>}
          <Button className='Articles-filter' buttonPurpose={toggleFilter} handleClick={this.toggleFilter} />
          {toggleFilter !== 'Filter' && <SortAndFilter queries={queries} handleFilterSubmit={this.handleFilterSubmit} handleFilterChange={this.handleFilterChange} sortFields={sortFields} />}
          <div className='Articles-list'>
            {articles.map(article => {
              const { article_id } = article;
              return <ArticleCard key={article_id} article={article} />
            })}
          </div>
        </div>
      </div>
    );
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    const {sortBy, limit, sortOrder} = this.state.queries;
    const { topic } = this.props;
    const queryString = assembleQueryString(sortBy, limit, sortOrder);
    fetchArticles(topic, queryString)
      .then((articles) => {
        this.setState({
          articles,
        })
      })
  }
    handleFilterChange = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => {
        const { queries } = prevState;
        const newQueries = {...queries, [name]: value}
        return {
          queries: newQueries,
        }

      })
  }
  toggleFilter = (e) => {
    console.log(e.target.className);
    const { innerText } = e.target;
    if (innerText === 'Filter') {
      this.setState({
        toggleFilter: 'Hide Filter',
      })
    } else {
      this.setState({
        toggleFilter: 'Filter',
      })
    }

  }
}

 
export default Articles;