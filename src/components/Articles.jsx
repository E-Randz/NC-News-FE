import React, { Component } from 'react';
import SortAndFilter from './SortAndFilter';
import { fetchArticles } from '../api';
import { Link } from '@reach/router';
import '../styles/Articles.css';

class Articles extends Component {
  state = { 
    articles: [],
    sortAndFilterCriteria: null,
  }

  async componentDidMount() {
    const { topic } = this.props;
    const articles = await fetchArticles(topic);
    this.setState({
      articles
    })
  }
  render() { 
    const { articles } = this.state
    return ( 
      <div className='Articles'>
        <SortAndFilter />
        <div className='Articles-results'>
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
}
 
export default Articles;