import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Corporate Network Penetration Test',
      description: 'Conducted a comprehensive penetration test for a financial institution, identifying and helping remediate critical vulnerabilities in their network infrastructure.',
      technologies: ['Kali Linux', 'Metasploit', 'Nmap', 'Burp Suite'],
      category: 'Penetration Testing'
    },
    {
      title: 'Security Audit for FinTech Startup',
      description: 'Performed a thorough security audit for a fintech startup, ensuring compliance with financial regulations while maintaining robust security practices.',
      technologies: ['OWASP', 'ISO 27001', 'PCI DSS', 'Risk Assessment'],
      category: 'Security Audit'
    },
    {
      title: 'Secure Banking Application',
      description: 'Developed a secure banking application with advanced encryption and multi-factor authentication to protect sensitive financial data.',
      technologies: ['Encryption', 'MFA', 'Secure Coding', 'API Security'],
      category: 'Secure Development'
    },
    {
      title: 'Incident Response Plan',
      description: 'Created a comprehensive incident response plan for a medium-sized business, including procedures for detecting, containing, and recovering from security breaches.',
      technologies: ['Incident Management', 'Forensics', 'Business Continuity'],
      category: 'Incident Response'
    },
    {
      title: 'Security Awareness Training Program',
      description: 'Designed and implemented a security awareness training program for employees, focusing on recognizing phishing attempts and practicing good security hygiene.',
      technologies: ['Social Engineering', 'Phishing Simulation', 'Training'],
      category: 'Security Training'
    },
    {
      title: 'Vulnerability Management System',
      description: 'Implemented an automated vulnerability management system to continuously scan, identify, and prioritize security vulnerabilities across the organization.',
      technologies: ['Vulnerability Scanning', 'Risk Prioritization', 'Automation'],
      category: 'Vulnerability Management'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;