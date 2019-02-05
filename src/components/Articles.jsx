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
    const { articles } = this.state
    return ( 
      <div className='Articles'>
        <SortAndFilter />
        <div className='Articles-results'>
          {articles.map(article => {
            let timestamp = article.created_at.toString();
            const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
            return (
              <div key={article.article_id} className="Article-item">
                <h2 className="Article-title">{article.title}</h2>
                <p className="Article-author">{article.author}</p>
                <p className="Article-topic">{article.topic}</p>
                <p className="Article-createdAt">{created_at}</p>
                <p className="Article-commentCount">{article.comment_count}</p>
                <p className="Article-votes">Votes: {article.votes}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}
 
export default Articles;