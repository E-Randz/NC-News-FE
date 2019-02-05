import React, { Component } from 'react';
import { fetchOneArticle } from '../utils'
import Button from './Button';

class Article extends Component {
  state = { 
   article: null,
   commentsButton: true,
   comments: null,
  }
  async componentDidMount() {
    const { article_id } = this.props;
    const article  = await fetchOneArticle(article_id);
    this.setState({
      article,
    })
  }
  render() { 
    const { article, commentsButton, comments } = this.state;
    if (article) {
      let timestamp = article.created_at.toString();
      const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
      article.created_at = created_at;
    }
    return ( 
      article &&
        <div className="Article">
          <div className="Article-info"> 
             <h1 className='Article-title'>{article.title}</h1>
             <p className="Article-author">Author: {article.author}</p>
             <p className="Article-topic">Topic: {article.topic}</p>
             <p className='Article-createdAt'>{article.created_at}</p>
             <p className="Article-votes">Votes: {article.votes}</p>
             <p className="Article-commentCount">Comments: {article.comment_count}</p>
          </div>
          <div className='Article-body'>
            <p>{article.body}</p>
          </div>
          <div className='Article-comments'>
            {commentsButton && <Button handleClick={this.handleClick} buttonPurpose='Show Comments' />}
            {comments && <p>Comments</p>}
          </div>
        </div>
    );
  }
  handleClick = () => {
    this.setState({
      commentsButton: false,
      comments: true,
    })
  }
}
 
export default Article;