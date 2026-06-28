import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <nav>
        <ul className="navigation">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
