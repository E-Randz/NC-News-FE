import React from 'react';
import '../styles/Backdrop.css'
import PropTypes from 'prop-types'

const Backdrop = ({ drawerToggleClick }) => {
  return ( 
    <div className='backdrop' onClick={drawerToggleClick}/>
  );
}

Backdrop.propTypes = {
  drawerToggleClick: PropTypes.func.isRequired,
}
 
export default Backdrop;