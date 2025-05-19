import React from 'react';
import './Skills.css';
// Import all images
import kaliLinuxLogo from '../../assets/images/kali-linux.png';
import wiresharkLogo from '../../assets/images/wireshark.png';
import metasploitLogo from '../../assets/images/metasploit.png';
import burpSuiteLogo from '../../assets/images/burp-suite.png';
import nmapLogo from '../../assets/images/nmap.png';
import pythonLogo from '../../assets/images/python.png';

const Skills = () => {
  const technicalSkills = [
    { name: 'Ethical Hacking', percentage: 90 },
    { name: 'Penetration Testing', percentage: 85 },
    { name: 'Network Security', percentage: 80 },
    { name: 'Vulnerability Assessment', percentage: 85 },
    { name: 'Security Auditing', percentage: 75 },
    { name: 'Incident Response', percentage: 70 },
  ];

  const businessSkills = [
    { name: 'Risk Assessment', percentage: 80 },
    { name: 'Financial Security Analysis', percentage: 75 },
    { name: 'Business Continuity Planning', percentage: 70 },
    { name: 'Security Policy Development', percentage: 85 },
  ];

  const toolsSkills = [
    { name: 'Kali Linux', icon: kaliLinuxLogo, percentage: 90 },
    { name: 'Wireshark', icon: wiresharkLogo, percentage: 85 },
    { name: 'Metasploit', icon: metasploitLogo, percentage: 80 },
    { name: 'Burp Suite', icon: burpSuiteLogo, percentage: 85 },
    { name: 'Nmap', icon: nmapLogo, percentage: 90 },
    { name: 'Python', icon: pythonLogo, percentage: 75 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Business & Finance Skills</h3>
            {businessSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="tech-stack-grid">
              {toolsSkills.map((skill, index) => (
                <div className="tech-item" key={index}>
                  <div className="tech-icon-container">
                    <div 
                      className={`tech-icon ${skill.name === 'Kali Linux' ? 'kali-linux-icon' : ''} ${skill.name === 'Nmap' ? 'nmap-icon' : ''}`} 
                      style={{backgroundImage: `url(${skill.icon})`}}
                    ></div>
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{skill.name}</span>
                    <div className="tech-bar">
                      <div 
                        className="tech-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
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

export default Skills;