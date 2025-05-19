import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'January 2022',
      description: 'Demonstrates knowledge of penetration testing, ethical hacking methodologies, and security assessment techniques.',
      logo: 'ceh-logo.png' // You can add actual logos later
    },
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      date: 'March 2021',
      description: 'Validates expertise in designing, implementing, and managing cybersecurity programs.',
      logo: 'cissp-logo.png'
    },
    {
      name: 'Offensive Security Certified Professional (OSCP)',
      issuer: 'Offensive Security',
      date: 'June 2020',
      description: 'Demonstrates hands-on penetration testing skills and ability to identify and exploit vulnerabilities.',
      logo: 'oscp-logo.png'
    },
    {
      name: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      date: 'September 2019',
      description: 'Focuses on information security governance, risk management, and compliance.',
      logo: 'cism-logo.png'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'February 2018',
      description: 'Covers network security, compliance, operational security, threats and vulnerabilities.',
      logo: 'security-plus-logo.png'
    },
    {
      name: 'Financial Risk Management (FRM)',
      issuer: 'GARP',
      date: 'November 2017',
      description: 'Demonstrates knowledge of financial risk assessment and management principles.',
      logo: 'frm-logo.png'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-logo">
                {/* You can add actual logos later */}
                <div className="logo-placeholder">{cert.name.split(' ').map(word => word[0]).join('')}</div>
              </div>
              <div className="certification-content">
                <h3 className="certification-name">{cert.name}</h3>
                <div className="certification-issuer">
                  <span className="issuer-name">{cert.issuer}</span>
                  <span className="certification-date">{cert.date}</span>
                </div>
                <p className="certification-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;