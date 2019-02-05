import React, { Component } from 'react';
import { fetchComments } from '../utils';
import Comment from './Comment';

class Comments extends Component {
  state = { 
    comments: [],
  }
  componentDidMount() {
    const { article_id } = this.props;
    fetchComments(article_id)
    .then((comments) => {
      console.log(comments);
      this.setState({
        comments,
      })
    })
    .catch(err => console.log(err.message));
  }
  render() { 
    const { comments } = this.state;
    return ( 
      <div>
        <h2 className='Comments-title'>Comments</h2>
        {comments.map(comment => {
          return (
            <Comment comment={comment}/>
          )
        })}
      </div>
    );
  }
}
 
export default Comments;