import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import { Link } from '@reach/router';
import '../styles/Articles.css';
import { assembleQueryString } from '../utils';
import Button from './Button';

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
    const { topic } = this.props;
    fetchArticles(topic)
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
    const { topic, className } = this.props;
    const sortFields = ['created_at', 'title', 'topic', 'created_by', 'votes']
    return ( 
      <div className={className}>
        <div className='Articles-results'>
          <h1>Articles</h1>
          {topic && <h3>~{topic}~</h3>}
          <Button className='Articles-filter' buttonPurpose={toggleFilter} handleClick={this.toggleFilter} />
          {toggleFilter !== 'Filter' && <SortAndFilter queries={queries} handleFilterSubmit={this.handleFilterSubmit} handleFilterChange={this.handleFilterChange} sortFields={sortFields} />}
          <div className='Articles-list'>
            {articles.map(article => {
              const {article_id, title, author, topic, comment_count, votes } = article;
              let timestamp = article.created_at.toString();
              const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
              return (
                <div key={article_id} className="Article-item">
                  <h2 className="Article-title"><Link to={`/articles/${article_id}`}>{title}</Link></h2>
                  <p className="Article-author">{author}</p>
                  <p className="Article-topic">~{topic}~</p>
                  <div className="Article-meta">
                    <p className="Article-commentCount">Comments: {comment_count}</p>
                    <p className="Article-votes">Votes: {votes}</p>
                    <p className="Article-createdAt">{created_at}</p>
                  </div>
                </div>
              )
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