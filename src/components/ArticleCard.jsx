import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { timestampToDate } from '../utils';
import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
  const { article_id, title, author, topic, comment_count, votes, created_at } = article;
  const date = timestampToDate(created_at)
  return (
    <div className="Article-item">
      <h2 className="Article-title"><Link to={`/articles/${article_id}`}>{title}</Link></h2>
      <p className="Article-author">{author}</p>
      <p className="Article-topic">~{topic}~</p>
      <div className="Article-meta">
        <p className="Article-votes"><FontAwesomeIcon icon={faThumbsUp}/>{votes}</p>
        <p className="Article-commentCount"><FontAwesomeIcon icon={faComment}/>{comment_count}</p>
        <p className="Article-createdAt">{date}</p>
      </div>
   </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,                
}

export default ArticleCard;