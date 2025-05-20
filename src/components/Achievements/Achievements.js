import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Competition Winner',
      organization: 'Competition Name',
      date: 'Month Year',
      description: 'Brief description of the competition and your achievement.',
      type: 'competition'
    },
    {
      title: 'Research Paper',
      organization: 'Journal/Conference Name',
      date: 'Under Review',
      description: 'Brief description of your research paper and its significance.',
      type: 'paper'
    },
    {
      title: 'Second Research Paper',
      organization: 'Journal/Conference Name',
      date: 'Under Review',
      description: 'Brief description of your second research paper and its significance.',
      type: 'paper'
    }
    // You can add more achievements as needed
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">
                <div className="icon-placeholder">
                  {achievement.type === 'competition' ? '🏆' : '📄'}
                </div>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="organization-name">{achievement.organization}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;