import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, TrendingUp, Star, Clock } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  achievements: string[];
  color: string;
  description?: string;
  status?: string;
  logo?: string;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 'skillcraft',
      type: 'experience',
      title: 'Machine Learning Intern',
      organization: 'SkillCraft Technology',
      location: 'Remote',
      period: 'June 2024 - August 2024',
      description: 'Specialized in developing AI/ML solutions and computer vision applications',
      achievements: [
        'Developed predictive models for house pricing and customer segmentation achieving 92% accuracy',
        'Engineered a real-time hand gesture recognition system using computer vision and deep learning',
        'Collaborated with cross-functional teams to implement scalable ML solutions for production',
        'Optimized model performance leading to 35% faster inference times and reduced computational costs',
      ],
      color: '#6366f1',
      status: 'Completed',
      logo: '/skillcraft.jpeg'
    },
    {
      id: 'presidency',
      type: 'education',
      title: 'B.E. Computer Science & Engineering',
      organization: 'Presidency University',
      location: 'Bangalore, Karnataka, India',
      period: '2022 - 2026 (Expected)',
      description: 'Specialization: Internet of Things',
      achievements: [
        'CGPA: 6.82/10 - Consistent academic excellence with focus on AI/ML technologies',
        'Core Subjects: Machine Learning, Deep Learning, Computer Vision, Data Science, Algorithms',
        'Technical Projects: Developed 15+ AI/ML projects including computer vision applications',
        'Research: Working on thesis project involving computer vision for healthcare applications'
      ],
      color: '#22c55e',
      status: 'In Progress',
      logo: '/presidency.jpg'
    }
  ];

  const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const IconComponent = item.type === 'experience' ? Briefcase : GraduationCap;

    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          justifyContent: isLeft ? 'flex-start' : 'flex-end',
          marginBottom: '80px',
          position: 'relative'
        }}
      >
        {/* Timeline Node */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '30px',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '80px',
            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
            border: '6px solid rgba(10, 10, 15, 0.9)',
            boxShadow: `0 8px 32px ${item.color}40`,
            backdropFilter: 'blur(20px)'
          }}
        >
          <IconComponent size={32} color="#ffffff" />
        </motion.div>

        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-card timeline-card"
          style={{
            width: '45%',
            maxWidth: '45%',
            padding: '32px',
            position: 'relative',
            marginTop: isLeft ? '0' : '0',
            border: `1px solid ${item.color}30`,
            wordWrap: 'break-word',
            overflow: 'visible',
            isolation: 'isolate'
          }}
        >
          {/* Arrow pointing to timeline */}
          <div style={{
            position: 'absolute',
            top: '40px',
            [isLeft ? 'right' : 'left']: '-10px',
            width: '20px',
            height: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${item.color}30`,
            transform: 'rotate(45deg)',
            borderTop: 'none',
            borderLeft: 'none'
          }} />

          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            background: item.status === 'In Progress' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(34, 197, 94, 0.2)',
            color: item.status === 'In Progress' ? '#f97316' : '#22c55e',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '20px',
            border: `1px solid ${item.status === 'In Progress' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(34, 197, 94, 0.3)'}`
          }}>
            <Clock size={12} />
            {item.status}
          </div>

          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            {/* Organization Logo & Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px'
            }}>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.organization + ' logo'}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    background: '#fff',
                  }}
                />
              ) : (
                item.type === 'education' ? (
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    PU
                  </div>
                ) : (
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    SC
                  </div>
                )
              )}
              <div>
                <h4 style={{ 
                  color: '#f8fafc',
                  marginBottom: '4px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {item.organization}
                </h4>
                <h3 style={{ 
                  color: item.color,
                  marginBottom: '0',
                  fontSize: '1.4rem',
                  fontWeight: '700'
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
            
            {item.description && (
              <p style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                marginBottom: '0',
                fontStyle: 'italic',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                {item.description}
              </p>
            )}
          </div>

          {/* Meta Info */}
          <div style={{
            display: 'flex',
            gap: '24px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="#94a3b8" />
              <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{item.period}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#94a3b8" />
              <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{item.location}</span>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h5 style={{
              color: '#e2e8f0',
              marginBottom: '16px',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Star size={16} color={item.color} />
              Key Achievements
            </h5>
            <div style={{ display: 'grid', gap: '12px' }}>
              {item.achievements.map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + achIndex * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderColor: `${item.color}40`
                  }}
                >
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: item.color,
                    marginTop: '8px',
                    flexShrink: 0
                  }} />
                  <span style={{ 
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="timeline" className="section" style={{ overflow: 'visible' }}>
      <div className="container" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Career & Education Timeline</h2>
          <p className="subtitle">
            A clean, elegant vertical timeline showcasing my professional journey 
            and educational milestones with key achievements.
          </p>
        </motion.div>

        <div style={{ 
          position: 'relative', 
          maxWidth: '1000px', 
          margin: '0 auto',
          paddingTop: '40px',
          width: '100%',
          overflow: 'visible'
        }} className="timeline-container">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #6366f1 0%, #22c55e 100%)',
              transform: 'translateX(-50%)',
              zIndex: 1,
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
            }}
          />

          {/* Floating Gradient Orbs */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '20%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)',
            borderRadius: '50%',
            transform: 'translateX(-50%)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0
          }} />
          
          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: '20%',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent)',
            borderRadius: '50%',
            transform: 'translateX(-50%)',
            animation: 'float 6s ease-in-out infinite reverse',
            zIndex: 0
          }} />

          {timelineItems.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}

          {/* Future Goals Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '-40px',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #f59e0b, #f97316)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              border: '4px solid rgba(10, 10, 15, 0.9)',
              boxShadow: '0 8px 32px rgba(245, 158, 11, 0.4)'
            }}
          >
            <TrendingUp size={24} color="#ffffff" />
          </motion.div>
        </div>

        {/* Future Aspirations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '32px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '80px auto 0'
          }}
        >
          <h3 style={{ 
            color: '#f59e0b',
            marginBottom: '16px',
            fontSize: '1.3rem'
          }}>
            Looking Forward
          </h3>
          <p style={{
            color: '#cbd5e1',
            lineHeight: '1.6',
            fontSize: '1rem'
          }}>
            Excited to continue building innovative AI-powered solutions and contributing to 
            cutting-edge projects that make a real impact in the world of technology.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .timeline-card {
            width: 80% !important;
            maxWidth: 80% !important;
          }
        }
        
        @media (max-width: 768px) {
          .timeline-card {
            width: 95% !important;
            maxWidth: 95% !important;
          }
          
          .timeline-container {
            padding: 0 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .timeline-card {
            width: 100% !important;
            maxWidth: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
