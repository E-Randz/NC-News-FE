import React from 'react';
import '../styles/Logo.css';
import { Link } from '@reach/router';

const Logo = () => <div className="Header-logo">
      <h1><Link to="/">{'NC NEWS'}</Link></h1>
    </div>


export default Logo;