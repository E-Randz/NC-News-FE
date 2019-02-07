import React, { Component } from 'react';
import { fetchOneArticle } from '../api'
import Button from './Button';
import Comments from './Comments';
import Delete from './Delete';
import ArticleInfo from './ArticleInfo';

class Article extends Component {
  state = { 
   article: null,
   comments: false,
   commentsButton: true,
   commentButtonPurpose: 'Show Comments',
   deleteShowing: false,
   deleteCheck: false,
  }
  async componentDidMount() {
    const { article_id, user } = this.props;
    const article  = await fetchOneArticle(article_id);
    this.setState({
      article,
      deleteShowing: user.username === article.author,
    })
  }
  render() { 
    const { user } = this.props;
    const { article, commentsButton, comments, commentButtonPurpose, deleteShowing } = this.state;
    if (article) {
      let timestamp = article.created_at.toString();
      const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
      article.created_at = created_at;
    }

    return ( 
      article &&
        <div className="Article">
          <ArticleInfo article={article} />
          {deleteShowing && <Delete itemType='article' item={article} text='Delete Article' />}
          <div className='Article-body'>
            <p>{article.body}</p>
          </div>
          <div className='Article-comments'>
            {commentsButton && <Button className='Show-comments' handleClick={this.handleClick} buttonPurpose={commentButtonPurpose} />}
            {comments && <Comments user={user} decrementCommentCount={this.decrementCommentCount} article_id={this.props.article_id} />
            }
          </div>
        </div>
    );
  }
  handleClick = (e) => {
    const {innerText} = e.target;
    if (innerText === 'Show Comments') {
      this.setState({
        comments: true,
        commentButtonPurpose: 'Hide Comments'
      })
    } else {
      this.setState({
        comments: false,
        commentButtonPurpose: 'Show Comments'
      })
    }
  }
  decrementCommentCount = () => {
    this.setState(prevState => {
      const { article } = prevState;
      return {
        article: {
          ...article,
          comment_count: article.comment_count - 1,
        }
      }
    })
  }
}
 
export default Article;