import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <nav>
        <ul className="navigation">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
