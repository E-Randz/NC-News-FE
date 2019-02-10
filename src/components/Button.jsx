import React from 'react';
import '../styles/Button.css'
;
const Button = ({ className, buttonPurpose, handleClick, disabled = false }) => {
  return ( 
    <button className={className} disabled={disabled} onClick={handleClick}>{ buttonPurpose }</button>
  );
}
 
export default Button;

