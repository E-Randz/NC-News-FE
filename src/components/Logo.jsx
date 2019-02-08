import React from 'react';
import '../styles/Logo.css';
import { Link } from '@reach/router';

const Logo = () => {
  return ( 
    <div className='Header-logo'>
      <h1><Link to='/'>Logo</Link></h1>
    </div>
   );
}
 
export default Logo;