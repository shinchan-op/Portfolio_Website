import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt"></span>
                <span className="terminal-command">cat contact_info.txt</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">cp4144@srmist.edu.in</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">+1 (123) 456-7890</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Location:</span>
                    <span className="contact-value">Your City, Country</span>
                  </div>
                </span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt"></span>
                <span className="terminal-command">ls -la social/</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/chhayank-patel-173012264/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="https://github.com/shinchan-op" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;