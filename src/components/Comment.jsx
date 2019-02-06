import React from 'react';
import Votes from './Votes';
import Article from './Article';

const Comment = (props) => {
  const { comment_article_id } = props;
  const { author, body, votes } = props.comment;
  let timestamp = props.comment.created_at.toString();
  const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
  return ( 
      <div className='Comment'>
        <h3 className="Comment-author">{author}</h3>
        <p className="Comment-body">{body}</p>
        <div className="Comment-meta">
          <Votes comment_article_id={comment_article_id} votes={votes} item={props.comment} />
          <p className="Comment-createdAt">Created At: {created_at}</p>
        </div>
      </div> 
    )
}
 
export default Comment;