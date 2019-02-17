import React, { Component } from 'react';
import { fetchComments, addNewComment } from '../api';
import Comment from './Comment';
import Button from './Button';
import '../styles/Comments.css'
import CreateComment from './CreateComment';
import PropTypes from 'prop-types';


class Comments extends Component {
  state = { 
    comments: null,
    loadingComments: true,
    commentsErr: null,
    newComment: false,
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
    .catch(() => {
      this.setState({
        commentsErr: 'There are no comments for this article yet!',
        loadingComments: false,
      })
    });
  }

  render() { 
     const { article_id, user } = this.props
     const { comments, loadingComments, commentsErr, newComment } = this.state;

    return ( 
      <div className='Comments-list'>
        {loadingComments && <h2>Loading Comments...</h2>}
        {comments &&
        <>
         <h2 className='Comments-title'>Comments</h2> 
         <Button handleClick={this.handleNewComment} className='New-Comment-Button' buttonPurpose='New Comment'/>
         {newComment && <CreateComment handleSubmit={this.handleSubmit}/>}
         {comments.map(comment => {
          return (
            <Comment user={user} removeComment={this.removeComment} comment_article_id={article_id} key={comment.comment_id} comment={comment}/>
          )
         })}
        </>
        }
        { commentsErr && 
        <>
          <p>{commentsErr}</p>
          <Button handleClick={this.handleNewComment} className='New-Comment-Button' buttonPurpose='New Comment'/>
          {newComment && <CreateComment handleSubmit={this.handleSubmit}/>}
        </>
        }
      </div>
    );
  }
  removeComment = (comment_id) => {
    const {changeCommentCount} = this.props
    this.setState(prevState => {
      const { comments } = prevState;
      const newCommentList = comments.filter(comment => {
        return comment.comment_id !== comment_id;
      })
      return {
        comments: newCommentList,
      }
    })
    changeCommentCount(-1)
  }

  handleNewComment = () => {
    this.setState({
      newComment: true,
    })
  }

  handleSubmit = (e, body) => {
    const { changeCommentCount } = this.props;
    e.preventDefault();
    const { article_id, user } = this.props
    addNewComment(article_id, user.username, body)
      .then(({data: {comment}}) => {
        this.setState(prevState => {

          const newComments = prevState.comments ? [...prevState.comments] : [];
          newComments.unshift(comment)
          return {
            comments: newComments,
            newComment: false,
          }
        })
      })
      changeCommentCount(1)
  }
}

Comments.propTypes = {
  article_id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  changeCommentCount: PropTypes.func.isRequired,
}
 
export default Comments;