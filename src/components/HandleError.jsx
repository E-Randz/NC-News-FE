import React from 'react';
import '../styles/PageNotFound.css';
import PropTypes from 'prop-types';

const HandleError = (props) => {
  const { errCode } = props.location.state;
  const errorMessages = {
    '404': 'Page Not Found!',
    '400': 'Bad Request',
    '500': 'Something went wrong',
  }
  return (
    <div className="Page-not-found">
      <h1>{errCode}</h1>
      <p>{errorMessages[errCode]}</p>
    </div>
  );
}

HandleError.propTypes = {
  state: PropTypes.object,
  location: PropTypes.object
}

export default HandleError;