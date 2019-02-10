import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment, faThumbsUp} from '@fortawesome/free-solid-svg-icons';


const ArticleCard = ({ article }) => {
  const {article_id, title, author, topic, comment_count, votes } = article;
  let timestamp = article.created_at.toString();
  const created_at = new Date(timestamp).toString().replace(/ GMT.*/, '');
  return ( 
    <div className="Article-item">
      <h2 className="Article-title"><Link to={`/articles/${article_id}`}>{title}</Link></h2>
      <p className="Article-author">{author}</p>
      <p className="Article-topic">~{topic}~</p>
      <div className="Article-meta">
        <p className="Article-votes"><FontAwesomeIcon icon={faThumbsUp}/>{votes}</p>
        <p className="Article-commentCount"><FontAwesomeIcon icon={faComment}/>{comment_count}</p>
        <p className="Article-createdAt">{created_at}</p>
      </div>
   </div>
  );
}
 
export default ArticleCard;