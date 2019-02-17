import React from 'react';
import '../styles/Button.css';
import PropTypes from 'prop-types';

const Button = ({ className, buttonPurpose, handleClick, disabled = false, children }) => {
  return (
    <button 
      className={className}
      disabled={disabled}
      onClick={handleClick}>{ buttonPurpose || children }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  buttonPurpose: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.element,
}


export default Button;

