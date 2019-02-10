import React, { Component } from 'react';
import { fetchOneArticle } from '../api'
import Button from './Button';
import Comments from './Comments';
import Delete from './Delete';
import ArticleInfo from './ArticleInfo';
import '../styles/Article.css';
import { timestampToDate } from '../utils';

class Article extends Component {
  state = { 
   article: null,
   comments: false,
   commentButtonPurpose: 'Show Comments',
   deleteShowing: false,
   deleteCheck: false,
  }

  componentDidMount() {
    const { article_id, user } = this.props;
    // If new article just been posted, use the article object that is sent back
    if (this.props.location.state.article) {
      const { article, article : {username} } = this.props.location.state;
      const deleteShowing = user.username === username;
      article.comment_count = 0;
      this.setState({article, deleteShowing});
    } else {
        fetchOneArticle(article_id)
          .then((article) => {
            const { author } = article;
            const deleteShowing = user.username === author;
            this.setState({article, deleteShowing});
          })
      }
  }

  render() { 
    const { user } = this.props;
    const { article, comments, commentButtonPurpose, deleteShowing } = this.state;
    let date;

    if (article) {
     date = timestampToDate(article.created_at);
    }

    return ( 
      article &&
        <div className="Article">
          <ArticleInfo article={article} date={date} />
          {deleteShowing && <Delete itemType='article' item={article} text='Delete Article' />}
          <div className='Article-body'>
            <p>{article.body}</p>
          </div>
          <div className='Article-comments'>
            <Button className='Show-comments' handleClick={this.handleClick} buttonPurpose={commentButtonPurpose} />
            {comments && <Comments user={user} changeCommentCount={this.changeCommentCount} article_id={this.props.article_id} />
            }
          </div>
        </div>
    );
  }

  handleClick = (e) => {
    const {innerText} = e.target;
    const newState = innerText === 'Show Comments' ? {comments: true, commentButtonPurpose: 'Hide Comments'}
                                                   : {comments: false, commentButtonPurpose: 'Show Comments'};
    this.setState(newState);
  }

  changeCommentCount = (change) => {
    this.setState(prevState => {
      const { article } = prevState;
      return {
        article: {
          ...article,
          comment_count: +article.comment_count + change,
        }
      }
    })
  }
}
 
export default Article;