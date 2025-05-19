import React from 'react';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      title: 'Senior Cybersecurity Analyst',
      company: 'SecureTech Solutions',
      period: '2021 - Present',
      description: [
        'Lead penetration testing and vulnerability assessments for enterprise clients',
        'Develop and implement security policies and procedures',
        'Conduct security audits and risk assessments for financial institutions',
        'Train junior security analysts and develop team capabilities'
      ]
    },
    {
      title: 'Cybersecurity Consultant',
      company: 'CyberDefense Partners',
      period: '2018 - 2021',
      description: [
        'Provided security consulting services to clients across various industries',
        'Performed network security assessments and penetration tests',
        'Developed security awareness training programs for client organizations',
        'Assisted in incident response and forensic investigations'
      ]
    },
    {
      title: 'Security Analyst',
      company: 'FinSecure Inc.',
      period: '2016 - 2018',
      description: [
        'Monitored and analyzed security alerts from various security tools',
        'Conducted vulnerability scans and assisted in remediation efforts',
        'Helped implement security controls for financial applications',
        'Participated in business continuity and disaster recovery planning'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Cybersecurity',
      institution: 'Tech University',
      period: '2014 - 2016',
      description: 'Specialized in network security and ethical hacking with a minor in business information systems.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2010 - 2014',
      description: 'Focused on software development and information security fundamentals with coursework in business administration.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-container">
          <div className="experience-column">
            <h3 className="experience-category">Work Experience</h3>
            <div className="timeline">
              {workExperience.map((job, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{job.title}</h4>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <h5 className="timeline-company">{job.company}</h5>
                    <ul className="timeline-description">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-column">
            <h3 className="experience-category">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <h5 className="timeline-company">{edu.institution}</h5>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;