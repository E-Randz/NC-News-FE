import React from 'react';
import '../styles/Button.css';
const Button = ({ className, buttonPurpose, handleClick, disabled = false, children }) => <button className={className} disabled={disabled} onClick={handleClick}>{ buttonPurpose || children }</button>


export default Button;

