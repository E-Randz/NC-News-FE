import React from 'react';
import '../styles/DrawerToggleButton.css';
import PropTypes from 'prop-types';

const DrawerToggleButton = ({ drawerToggleClick }) => {
  return ( 
    <button className="toggle-button" onClick={drawerToggleClick}>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
}

DrawerToggleButton.propTypes = {
  drawerToggleClick: PropTypes.func.isRequired,
}
 
export default DrawerToggleButton;