import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import '../styles/Articles.css';
import { assembleQueryString } from '../utils';
import Button from './Button';
import ArticleCard from './ArticleCard';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import PageSelector from './PageSelector';


class Articles extends Component {
  state = { 
    articles: [],
    queries: {
      sortBy: 'created_at',
      limit: 10, 
      sortOrder: 'desc',
      page: 1,
    },
    pageCount: 0,
    toggleFilter: 'Filter',
    err: false,
    errMessage: '',
  }

  componentDidMount() {
    const { topic, queries, articles, limit = 10 } = this.props;
    if (articles) {
      this.setState({
        articles,
      })
    }
    else {
      fetchArticles(topic, queries)
        .then(({ data: { articles, article_count } }) => {
          this.setState(({ queries }) => {
            return {
              articles,
              pageCount: Math.ceil(article_count/limit),
              queries: {...queries, limit}
            };
          })
        })
        .catch((err) => {
          navigate('/error', {state: {errCode: err.response.status}});
        })
    }
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
    const { articles, queries, toggleFilter, err, errMessage, pageCount } = this.state
    const { page } = queries;
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
              <PageSelector pageCount={pageCount} page={page} changePage={this.changePage} />
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
    if (e) e.preventDefault();
    const { queries: { sortBy, limit, sortOrder, page } } = this.state;
    const { topic } = this.props;
    const queryString = assembleQueryString(sortBy, limit, sortOrder, page);
    fetchArticles(topic, queryString)
      .then(({ data: { articles } }) => {
        let newState;
        if (!articles.length) {
          newState = { 
            err: true,
            errMessage: 'No articles match this query!',
           }
        } else {
          newState = {
            articles,
            err: false,
            errMessage: '',
          }
        }
        this.setState(newState);
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
  changePage = (e, change) => {
    const { queries: { page } } = this.state;
    const newPage = change ? page + change : +e.target.innerHTML;
    this.setState(({ queries }) => {
      return {
        queries: {...queries, page: newPage}
      }
    }, () => this.handleFilterSubmit())
  }
}

Articles.propTypes = {
  topic: PropTypes.string,
  queries: PropTypes.string,
  articles: PropTypes.array,                           
  className: PropTypes.string,
  title: PropTypes.string,
  limit: PropTypes.number,         
}

 
export default Articles;