import React from 'react';
import '../styles/Button.css'
;
const Button = (props) => {
  const { buttonPurpose, handleClick, disabled = false } = props;
  return ( 
    <button disabled={disabled} onClick={handleClick}>{ buttonPurpose }</button>
  );
}
 
export default Button;

