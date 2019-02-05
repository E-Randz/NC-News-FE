import React from 'react';

const Comment = (props) => {
  const { author, body, votes, comment_id} = props.comment;
  let timestamp = props.comment.created_at.toString();
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
}
 
export default Comment;