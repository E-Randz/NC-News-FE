import React, { Component } from 'react';
import { fetchComments } from '../api';
import Comment from './Comment';

class Comments extends Component {
  state = { 
    comments: null,
    loadingComments: true,
    commentsErr: null,
  }
  componentDidMount() {
    const { article_id } = this.props;
    fetchComments(article_id)
    .then((comments) => {
      this.setState({
        comments,
        loadingComments: false,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() { 
     const { article_id } = this.props
     const { comments, loadingComments, commentsErr } = this.state;
    return ( 
      <div>
        {loadingComments && <h2>Loading Comments...</h2>}
        {comments &&
        <>
         <h2 className='Comments-title'>Comments</h2> 
         {comments.map(comment => {
          return (
            <Comment handleDelete={this.handleDelete} comment_article_id={article_id} key={comment.comment_id} comment={comment}/>
          )
         })}
        </>
        }
        { commentsErr && <p>hello</p>}
      </div>
    );
  }
  handleDelete = (comment_id) => {
    this.setState(prevState => {
      const { comments } = prevState;
      const newCommentList = comments.filter(comment => {
        return comment.comment_id !== comment_id;
      })
      return {
        comments: newCommentList,
      }
    })
  }
}
 
export default Comments;