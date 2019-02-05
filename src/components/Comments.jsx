import React, { Component } from 'react';
import { fetchComments } from '../utils';

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
          const { author, body, votes, comment_id} = comment;
          let timestamp = comment.created_at.toString();
          const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
          return (
            <div key={comment_id} className='Comment'>
              <h3 className="Comment-author">{author}</h3>
              <p className="Comment-body">{body}</p>
              <div className="Comment-meta">
                <p className="Comment-votes">Votes: {votes}</p>
                <p className="Comment-createdAt">Created At: {created_at}</p>
              </div>
            </div> 
          )
        })}
      </div>
    );
  }
}
 
export default Comments;