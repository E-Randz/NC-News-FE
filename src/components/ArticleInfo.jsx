import React from 'react';
import Votes from './Votes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import '../styles/ArticleInfo.css';
import PropTypes from 'prop-types';


const ArticleInfo = ({ article, date }) => 

<div className="Article-info">
  <div className="Article-header">
    <h1 className="Article-title">{article.title}</h1>
    <p className="Article-author">{article.author}</p>
    <p className="Article-topic">~{article.topic}~</p>
    <p className="Article-createdAt">{date}</p>
  </div>
  <div className="Comments-And-Votes">
    <Votes votes={article.votes} item={article} />
    <p className="ArticleInfo-commentCount"><FontAwesomeIcon icon={faComment}/> {article.comment_count}</p>
  </div>
</div>

ArticleInfo.propTypes = {
  article: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,        
}

export default ArticleInfo;