import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import { Link } from '@reach/router';
import '../styles/Articles.css';
import { assembleQueryString } from '../utils';

class Articles extends Component {
  state = { 
    articles: [],
    queries: {},
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
  render() { 
    const { articles } = this.state
    const { topic } = this.props;
    const sortFields = ['created_at', 'title', 'topic', 'created_by']
    return ( 
      <div className='Articles'>
        <SortAndFilter handleFilterSubmit={this.handleFilterSubmit} sortFields={sortFields} />
        <div className='Articles-results'>
          <h2>Articles</h2>
          {topic && <h3>~{topic}~</h3>}
          {articles.map(article => {
            const {article_id, title, author, topic, comment_count, votes } = article;
            let timestamp = article.created_at.toString();
            const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
            return (
              <div key={article_id} className="Article-item">
                <h2 className="Article-title"><Link to={`/articles/${article_id}`}>{title}</Link></h2>
                <p className="Article-author">{author}</p>
                <p className="Article-topic">{topic}</p>
                <p className="Article-createdAt">{created_at}</p>
                <p className="Article-commentCount">{comment_count}</p>
                <p className="Article-votes">Votes: {votes}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  handleFilterSubmit = (e, sortBy, limit, sortOrder) => {
    e.preventDefault();
    const newQueries = {sortBy, limit, sortOrder}
    const { topic } = this.props;
    const queryString = assembleQueryString(sortBy, limit, sortOrder);
    fetchArticles(topic, queryString)
      .then((articles) => {
        this.setState({
          articles,
          queries: newQueries,
        })
      })
  }
}

 
export default Articles;