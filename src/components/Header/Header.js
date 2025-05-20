import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>      
      <div className="container header-container">
        <div className="logo">
          <a href="#home" className="terminal-text">How are you !</a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#certifications" className="nav-link">Certifications</a></li>
            <li><a href="#achievements" className="nav-link">Achievements</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="/resume.pdf" className="nav-link resume-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;