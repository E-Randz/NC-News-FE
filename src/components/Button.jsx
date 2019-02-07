import React from 'react';
import '../styles/Button.css'
;
const Button = (props) => {
  const { className, buttonPurpose, handleClick, disabled = false } = props;
  return ( 
    <button className={className} disabled={disabled} onClick={handleClick}>{ buttonPurpose }</button>
  );
}
 
export default Button;

