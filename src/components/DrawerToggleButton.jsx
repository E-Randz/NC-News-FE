import React from 'react';
import '../styles/DrawerToggleButton.css';

const DrawerToggleButton = (props) => {
  return ( 
    <button className="toggle-button">
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
}
 
export default DrawerToggleButton;