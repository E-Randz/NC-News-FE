import React from 'react';

const Button = (props) => {
  const { buttonPurpose, handleClick } = props;
  return ( 
    <button onClick={handleClick}>{ buttonPurpose }</button>
  );
}
 
export default Button;

