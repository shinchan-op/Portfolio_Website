import React from 'react';
import Terminal from '../Terminal/Terminal';
import './Hero.css';

const Hero = () => {
  const commands = [
    { text: 'whoami', prompt: true, className: 'terminal-command' },
    { text: 'Cybersecurity Professional', className: 'terminal-output', delay: 1000 },
    { text: 'cat skills.txt', prompt: true, className: 'terminal-command', delay: 1500 },
    { 
      text: '- Ethical Hacking\n- Penetration Testing\n- Network Security\n- Business Security Analysis\n- Financial Risk Assessment', 
      className: 'terminal-output', 
      delay: 1000 
    },
    { text: 'contact --info', prompt: true, className: 'terminal-command', delay: 1500 },
    { 
      text: 'Email: cp4144@srmist.edu.in\nLinkedIn: linkedin.com/in/chhayank-patel-173012264\nGitHub: github.com/shinchan-op', 
      className: 'terminal-output', 
      delay: 1000 
    },
    { text: 'start portfolio.sh', prompt: true, className: 'terminal-command', delay: 1500 },
    { text: 'Loading portfolio...', className: 'terminal-success', delay: 800 },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Chhayank Patel</span></h1>
          <h2 className="hero-subtitle">Cybersecurity Professional</h2>
          <p className="hero-description">
            Specializing in ethical hacking, penetration testing, and securing business assets.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-terminal">
          <Terminal commands={commands} />
        </div>
      </div>
    </section>
  );
};

export default Hero;