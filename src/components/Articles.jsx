import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import '../styles/Articles.css';
import { assembleQueryString } from '../utils';
import Button from './Button';
import ArticleCard from './ArticleCard';
import { navigate } from '@reach/router';

class Articles extends Component {
  state = { 
    articles: [],
    queries: {
      sortBy: 'created_at',
      limit: 10, 
      sortOrder: 'desc',
    },
    toggleFilter: 'Filter',
    err: null,
    errMessage: '',
  }

  componentDidMount() {
    const { topic, queries } = this.props;
    fetchArticles(topic, queries)
      .then((articles) => {
        this.setState({
          articles
        })
      })
      .catch((err) => {
        navigate('/error', {state: {errCode: err.response.status}});
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
    const { articles, queries, toggleFilter, err, errMessage } = this.state
    const { topic, className, title } = this.props;
    const sortFields = ['created_at', 'title', 'topic', 'created_by', 'votes']

    const FilterProps = {
      queries: queries,
      handleFilterSubmit: this.handleFilterSubmit,
      handleFilterChange: this.handleFilterChange,
      sortFields: sortFields,
    }
    return ( 
      <div className={className}>
        <div className='Articles-results'>
          <h1>{title}</h1>
          {topic && <h3>~{topic}~</h3>}
          <Button className='Articles-filter' buttonPurpose={toggleFilter} handleClick={this.toggleFilter} />
          {toggleFilter !== 'Filter' && <SortAndFilter FilterProps={FilterProps} />}
          {!err &&
            <div className='Articles-list'>
              {articles.map(article => {
                const { article_id } = article;
                return <ArticleCard key={article_id} article={article} />
              })}
            </div>
          }
          {err && <h2>{errMessage}</h2>}
        </div>
      </div>
    );
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    const { queries: { sortBy, limit, sortOrder } } = this.state;
    const { topic } = this.props;
    const queryString = assembleQueryString(sortBy, limit, sortOrder);
    fetchArticles(topic, queryString)
      .then((articles) => {
        this.setState({
          articles,
        })
      })
      .catch((err) => {
        this.setState({err})
      })
  }

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      const newQueries = {...prevState.queries, [name]: value}
      return {
        queries: newQueries,
      }
    })
  }

  toggleFilter = (e) => {
    const { innerText } = e.target;
    const toggleFilter = innerText === 'Filter' ? 'Hide Filter' : 'Filter';
    this.setState({
      toggleFilter,
    })
  }
}

 
export default Articles;