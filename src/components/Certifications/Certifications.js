import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'January 2022',
      description: 'Demonstrates knowledge of penetration testing, ethical hacking methodologies, and security assessment techniques.'
    },
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      date: 'March 2021',
      description: 'Validates expertise in designing, implementing, and managing cybersecurity programs.'
    },
    {
      name: 'Offensive Security Certified Professional (OSCP)',
      issuer: 'Offensive Security',
      date: 'June 2020',
      description: 'Demonstrates hands-on penetration testing skills and ability to identify and exploit vulnerabilities.'
    },
    {
      name: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      date: 'September 2019',
      description: 'Focuses on information security governance, risk management, and compliance.'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'February 2018',
      description: 'Covers network security, compliance, operational security, threats and vulnerabilities.'
    },
    {
      name: 'Financial Risk Management (FRM)',
      issuer: 'GARP',
      date: 'November 2017',
      description: 'Demonstrates knowledge of financial risk assessment and management principles.'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="timeline-container">
          <div className="timeline">
            {certifications.map((cert, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-title">{cert.name}</h4>
                    <span className="timeline-period">{cert.date}</span>
                  </div>
                  <h5 className="timeline-company">{cert.issuer}</h5>
                  <p className="timeline-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;