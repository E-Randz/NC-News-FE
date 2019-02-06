import React from 'react';
import Votes from './Votes';

const ArticleInfo = (props) => {
  const { article } = props
  return ( 
    <div className="Article-info"> 
      <h1 className='Article-title'>{article.title}</h1>
      <p className="Article-author">Author: {article.author}</p>
      <p className="Article-topic">Topic: {article.topic}</p>
      <p className='Article-createdAt'>{article.created_at}</p>
      <Votes votes={article.votes} item={article} />
      <p className="Article-commentCount">Comments: {article.comment_count}</p>
    </div>
  );
}
 
export default ArticleInfo;