import React, { useState } from 'react';
//import './styles/Header.css';
import logo from './logo.png';

function Header() {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Suvas farm & Party plot</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
      <div className="action-button">
        <button>Book Now</button>
      </div>
      <button className={`hamburger-menu-btn ${showNav ? 'active' : ''}`} onClick={toggleNav}>

<span className="hamburger-menu-icon"></span>
</button>
    </header>
  );
}

export default Header;
