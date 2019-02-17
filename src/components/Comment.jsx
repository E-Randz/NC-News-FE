import React, {Component} from 'react';
import Votes from './Votes';
import Delete from './Delete';
import '../styles/Comment.css';
import { timestampToDate } from '../utils';
import PropTypes from 'prop-types';

class Comment extends Component {
  state = { 
    deleteShowing: false
  }

  componentDidMount() {
    const { user, comment: { username, author } } = this.props;
    const deleteShowing = user.username === username || user.username === author;
    this.setState({
      deleteShowing,
    })
  }


  render() { 
    const {  comment_article_id, 
             removeComment,
             comment, 
             comment: {author, body, votes, created_at},
          } = this.props;
    const { deleteShowing } = this.state;
    const date = timestampToDate(created_at)

    const DeleteProps = {
      removeComment,
      itemType: 'comment',
      item: comment, 
      comment_article_id: comment_article_id, 
      text: 'Delete Comment', 
    }

    return ( 
      <div className='Comment'>
        <h3 className="Comment-author">{author}</h3>
        <p className="Comment-body">{body}</p>
        <div className="Comment-meta">
          <Votes comment_article_id={comment_article_id} votes={votes} item={this.props.comment} />
          <p className="Comment-createdAt">{date}</p>
        </div>
        {deleteShowing && <Delete DeleteProps={DeleteProps} />}
    </div> 
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  comment_article_id: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired,
}

export default Comment;