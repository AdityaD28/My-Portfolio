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
      id: 'current-role',
      type: 'experience',
      title: 'Project Engineer (Academic Role) | Tech Lead',
      organization: 'Educational Technology Initiative',
      location: 'Bangalore, India',
      period: 'Jul 2025 – Present',
      description: 'Leading development of smart learning platform for rural education',
      achievements: [
        'Architected and deployed smart learning platform with 5+ interactive modules for 200+ rural students',
        'Engineered offline-first PWA with React.js + Node.js + PostgreSQL, reducing internet dependency by 70%',
        'Directed 3-member Agile team, improving sprint completion rates by 80% and feature releases by 25%',
        'Optimized backend performance, reducing server response times by 30% and production bugs by 40%',
      ],
      color: '#6366f1',
      status: 'Current',
      logo: '/presidency.jpg'
    },
    {
      id: 'presidency',
      type: 'education',
      title: 'Bachelor\'s Degree in Computer Science and Engineering',
      organization: 'Presidency University',
      location: 'Bangalore, Karnataka, India',
      period: 'Nov 2022 - Jul 2026',
      description: 'Specialization: Full-Stack Development and System Design',
      achievements: [
        'Focused on web application development, API integration, and cloud-ready architectures',
        'Core Subjects: Data Structures, Algorithms, Database Systems, Software Engineering, System Design',
        'Technical Projects: Developed 15+ full-stack applications including e-commerce and management systems',
        'Leadership: Serving as Tech Lead while maintaining academic excellence'
      ],
      color: '#22c55e',
      status: 'In Progress',
      logo: '/presidency.jpg'
    },
    {
      id: 'pre-university',
      type: 'education',
      title: 'Pre-University | PCMB',
      organization: 'Prarthana PU Science College',
      location: 'Bagalkot, Karnataka, India',
      period: 'Jun 2020 - Apr 2022',
      description: 'Foundation in Physics, Chemistry, Mathematics, and Biology',
      achievements: [
        'Strong foundation in mathematics and logical reasoning',
        'Developed problem-solving skills that translate well to programming',
        'Participated in science projects and technical competitions',
        'Maintained consistent academic performance'
      ],
      color: '#8b5cf6',
      status: 'Completed',
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
          {/* Arrow pointing to timeline - Hidden on mobile */}
          <div 
            className="timeline-arrow"
            style={{
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
            }} 
          />

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
            width: 70% !important;
            max-width: 70% !important;
          }
        }
        
        @media (max-width: 768px) {
          .timeline-container {
            padding: 0 1rem !important;
            max-width: 100% !important;
          }
          
          .timeline-card {
            width: 85% !important;
            max-width: 85% !important;
            padding: 24px !important;
            margin-bottom: 60px !important;
          }
          
          .timeline-card h3 {
            font-size: 1.2rem !important;
          }
          
          .timeline-card h4 {
            font-size: 1rem !important;
          }
          
          .timeline-card p {
            font-size: 0.85rem !important;
          }
          
          .timeline-card span {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .timeline-container {
            padding: 0 0.5rem !important;
            margin: 0 !important;
          }
          
          .timeline-container > div[style*="position: absolute"][style*="linear-gradient"] {
            display: none !important;
          }
          
          .timeline-card {
            width: 90% !important;
            max-width: 90% !important;
            padding: 20px !important;
            margin-bottom: 50px !important;
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          
          .timeline-arrow {
            display: none !important;
          }
          
          .timeline-card h3 {
            font-size: 1.1rem !important;
            line-height: 1.3 !important;
          }
          
          .timeline-card h4 {
            font-size: 0.95rem !important;
          }
          
          .timeline-card p {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          
          .timeline-card span {
            font-size: 0.75rem !important;
          }
          
          .timeline-card > div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 8px !important;
          }
          
          .timeline-card img {
            width: 24px !important;
            height: 24px !important;
          }
          
          /* Hide timeline nodes on mobile */
          .timeline-card + div[style*="position: absolute"][style*="borderRadius"] {
            display: none !important;
          }
          
          /* Timeline container mobile layout */
          .timeline-container > div:first-child {
            position: relative !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
          }
          
          /* Center all timeline items */
          .timeline-container > div[style*="display: flex"] {
            justify-content: center !important;
            margin-bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
