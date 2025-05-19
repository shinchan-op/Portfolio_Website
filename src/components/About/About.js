import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am a passionate cybersecurity professional with a strong interest in business and finance. My journey in cybersecurity began with a fascination for understanding how systems work and how they can be protected from malicious actors.
            </p>
            
            <p className="about-description">
              With expertise in ethical hacking, penetration testing, and network security, I help organizations identify vulnerabilities before they can be exploited. I believe that security is not just a technical issue but a business imperative.
            </p>
            
            <p className="about-description">
              My background in business and finance allows me to bridge the gap between technical security measures and business objectives. I understand that effective security solutions must align with an organization's financial constraints and business goals.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-number">5+</h3>
                <p className="highlight-text">Years of Experience</p>
              </div>
              
              <div className="highlight-item">
                <h3 className="highlight-number">20+</h3>
                <p className="highlight-text">Projects Completed</p>
              </div>
              
              <div className="highlight-item">
                <h3 className="highlight-number">10+</h3>
                <p className="highlight-text">Certifications</p>
              </div>
            </div>
          </div>
          
          <div className="terminal-about">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt"></span>
                  <span className="terminal-command">cat about_me.txt</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-output">
                    Name: Your Name<br />
                    Role: Cybersecurity Professional<br />
                    Focus: Ethical Hacking & Business Security<br />
                    Location: Your Location<br />
                    Education: Your Degree, University<br />
                    Interests: Cybersecurity, Business, Finance, Technology<br />
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt"></span>
                  <span className="terminal-command">ls -la skills/</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-output">
                    drwxr-xr-x  ethical_hacking/<br />
                    drwxr-xr-x  penetration_testing/<br />
                    drwxr-xr-x  network_security/<br />
                    drwxr-xr-x  business_analysis/<br />
                    drwxr-xr-x  financial_security/<br />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;