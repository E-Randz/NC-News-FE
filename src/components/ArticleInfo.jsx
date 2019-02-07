import React from 'react';
import Votes from './Votes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import '../styles/ArticleInfo.css'

const ArticleInfo = (props) => {
  const { article } = props
  return ( 
    <div className="Article-info"> 
    <div className="Article-header">
      <h1 className='Article-title'>{article.title}</h1>
      <p className="Article-author">{article.author}</p>
      <p className="Article-topic">~{article.topic}~</p>
      <p className='Article-createdAt'>{article.created_at}</p> 
    </div>
      <div className="Comments-And-Votes">
        <Votes votes={article.votes} item={article} />
        <p className="ArticleInfo-commentCount"><FontAwesomeIcon icon={faComment}/> {article.comment_count}</p>
      </div>
    </div>
  );
}
 
export default ArticleInfo;