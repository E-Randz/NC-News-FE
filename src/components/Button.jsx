import React from 'react';

const Button = (props) => {
  const { buttonPurpose } = props;
  return ( 
    <button>{ buttonPurpose }</button>
   );
}
 
export default Button;