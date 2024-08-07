import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/Sushanta-Pal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/sushanta-pal-340b77254/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:sp0071331@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.facebook.com/sushanta.pal.1000469/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/__like__obito__/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <ul className="menu">
        <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
        <li className="menu__item"><Link className="menu__link" to="/about">About</Link></li>
        <li className="menu__item"><Link className="menu__link" to="/services">Services</Link></li>
        <li className="menu__item"><Link className="menu__link" to="/team">Team</Link></li>
        <li className="menu__item"><Link className="menu__link" to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-bottom">
        <p>Copyright © 2024 Sushanta Pal</p>
      </div>
    </div>
  );
}

export default Footer;
