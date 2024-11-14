import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
  id="menu"
  className={`navbar navbar-default navbar-fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
>
  <div className="container">
    <div className="navbar-header">
      <a className="navbar-brand_page-scroll_logo" onClick={scrollToTop}>
        Xeno
      </a>
    </div>

    <div className="navbar-nav-container">
      <ul className="nav navbar-nav">
        <li><a href="#about" className="page-scroll">About</a></li>
        <li><a href="#Pricing" className="page-scroll">Pricing</a></li>
        <li><a href="#faq" className="page-scroll">FAQ</a></li>
        <li><a href="#team" className="page-scroll">Team</a></li>
        <li><a href="#contact" className="page-scroll">Contact</a></li>
      </ul>
    </div>

    <div className="auth-buttons">
      <RouterLink to="/login"><button><span>Login</span></button></RouterLink>
      <RouterLink to="/register"><button><span>Register</span></button></RouterLink>
    </div>
  </div>
</nav>
  );
};

export default Navbar;