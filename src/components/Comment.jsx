import React, {Component} from 'react';
import Votes from './Votes';
import Delete from './Delete';
import '../styles/Comment.css';

class Comment extends Component {
  state = { 
    deleteShowing: false
  }
  componentDidMount() {
    const { user } = this.props;
    const { author } = this.props.comment;
    if (user.username === author) {
      this.setState({
        deleteShowing: true,
      })
    }
  }

  render() { 
    const { comment_article_id, handleDelete } = this.props;
    const { author, body, votes } = this.props.comment;
    const { deleteShowing } = this.state;
    let timestamp = this.props.comment.created_at.toString();
    const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
    return ( 
      <div className='Comment'>
        <h3 className="Comment-author">{author}</h3>
        <p className="Comment-body">{body}</p>
        <div className="Comment-meta">
          <Votes comment_article_id={comment_article_id} votes={votes} item={this.props.comment} />
          <p className="Comment-createdAt">{created_at}</p>
        </div>

        {deleteShowing && <Delete 
          handleDelete={handleDelete}
          itemType='comment' 
          item={this.props.comment} 
          comment_article_id={comment_article_id} 
          text='Delete Comment' 
        />}
    </div> 
    );
  }
}
 
export default Comment;