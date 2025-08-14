import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code, Brain, Heart, Coffee, Rocket, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Learning', value: '3+', icon: Calendar, color: '#6366f1' },
    { label: 'Projects Built', value: '20+', icon: Code, color: '#22c55e' },
    { label: 'Technologies', value: '15+', icon: Brain, color: '#f59e0b' },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee, color: '#8b5cf6' }
  ];

  const interests = [
    { name: 'AI/ML Research', icon: '🧠', description: 'Exploring cutting-edge AI technologies' },
    { name: 'Open Source', icon: '🌟', description: 'Contributing to developer community' },
    { name: 'Innovation', icon: '🚀', description: 'Building solutions for tomorrow' },
    { name: 'Learning', icon: '📚', description: 'Continuous skill development' }
  ];

  const personalityTraits = [
    'Problem Solver', 'Team Player', 'Innovation Driven', 'Detail Oriented',
    'Fast Learner', 'Creative Thinker', 'Collaboration Focused', 'Tech Enthusiast'
  ];

  return (
    <section id="about" className="section" style={{
      overflow: 'visible'
    }}>
      <div className="container" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h2>About Me</h2>
          <p className="subtitle">
            Passionate developer crafting innovative solutions at the intersection of 
            technology and creativity.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          width: '100%',
          maxWidth: '100%'
        }} className="about-grid">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Personal Info */}
            <div className="glass-card" style={{ padding: '40px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  👨‍💻
                </div>
                <div>
                  <h3 style={{ color: '#f8fafc', marginBottom: '8px' }}>Aditya Dasappanavar</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                    <MapPin size={16} />
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>

              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                I'm a final-year Computer Science student with an insatiable passion for technology 
                and innovation. My journey in the world of programming began with curiosity and has 
                evolved into a deep commitment to creating meaningful digital experiences.
              </p>

              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                Specializing in <span style={{ color: '#6366f1', fontWeight: '600' }}>Full-Stack Development</span> and 
                <span style={{ color: '#22c55e', fontWeight: '600' }}> AI/ML technologies</span>, I love building 
                solutions that bridge the gap between complex technology and user-friendly experiences.
              </p>

              {/* Personality Traits */}
              <div>
                <h4 style={{
                  color: '#e2e8f0',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>
                  What Defines Me
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {personalityTraits.map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="skill-tag"
                      style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#a5b4fc',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        fontSize: '0.8rem'
                      }}
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass-card"
                    style={{ padding: '24px', textAlign: 'center' }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px auto',
                      boxShadow: `0 8px 24px ${stat.color}40`
                    }}>
                      <IconComponent size={20} color="white" />
                    </div>
                    <h3 style={{ color: stat.color, marginBottom: '4px' }}>{stat.value}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Interests & Passions */}
            <div className="glass-card" style={{ padding: '40px', marginBottom: '30px' }}>
              <h3 style={{ color: '#f8fafc', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Heart size={24} color="#ef4444" />
                Interests & Passions
              </h3>

              <div style={{ display: 'grid', gap: '20px' }}>
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{
                      fontSize: '24px',
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px'
                    }}>
                      {interest.icon}
                    </div>
                    <div>
                      <h4 style={{ color: '#e2e8f0', marginBottom: '4px', fontSize: '1rem' }}>
                        {interest.name}
                      </h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
                        {interest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-card"
              style={{ padding: '40px' }}
            >
              <h3 style={{ color: '#f8fafc', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Star size={24} color="#fbbf24" />
                My Philosophy
              </h3>
              
              <blockquote style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#cbd5e1',
                lineHeight: '1.7',
                margin: 0,
                padding: '0 0 0 20px',
                borderLeft: '3px solid #6366f1',
                position: 'relative'
              }}>
                "Technology is best when it brings people together and solves real problems. 
                I believe in writing code that not only works but makes a difference in people's lives."
              </blockquote>

              <div style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                background: 'rgba(99, 102, 241, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                <Rocket size={20} color="#6366f1" />
                <p style={{ color: '#a5b4fc', fontSize: '0.9rem', margin: 0 }}>
                  Always ready to take on new challenges and push the boundaries of what's possible!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-grid {
            gap: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;