import './Header.css';
import logo from '../../resources/mosaic_logo.png';
import React, { useState } from 'react';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="topper">
      <img src={logo} className="logo" alt="logo" />
      <div className='header-text'>
        <h1>Mosaic Mind Psychotherapy</h1>
        <h3>LCSW PC</h3>
      </div>
      <button
        className="nav-toggle"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={`header-nav nav-popup${navOpen ? ' active' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
