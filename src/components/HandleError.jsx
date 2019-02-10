import React from 'react';
import '../styles/PageNotFound.css';

const PageNotFound = (props) => {
  const { errCode } = props.location.state;
  const errorMessages = {
    '404': 'Page Not Found!',
    '400': 'Bad Request'
  }
  return ( 
    <div className='Page-not-found'>
      <h1>{errCode}</h1>
      <p>{errorMessages[errCode]}</p>
    </div>
  );
}
 
export default PageNotFound;