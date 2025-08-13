import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, BookOpen, Code, Brain } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  icon: string;
  color: string;
  category: 'ai' | 'web' | 'programming' | 'other';
  status: 'completed' | 'in-progress';
  level: 'beginner' | 'intermediate' | 'advanced';
}

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'programming' | 'other'>('all');

  const certifications: Certification[] = [
    {
      id: 'generative-ai',
      title: 'Generative AI',
      issuer: 'Industry Expert',
      date: '2024',
      description: 'Comprehensive understanding of generative AI technologies, including GPT models, image generation, and practical applications in modern software development.',
      skills: ['GPT Models', 'AI Applications', 'Prompt Engineering', 'Machine Learning', 'Neural Networks'],
      credentialUrl: 'https://www.geeksforgeeks.org/certificate/e2c093f5a0a458fb071c6a3fc532deb8',
      icon: '🤖',
      color: '#43e97b',
      category: 'ai',
      status: 'completed',
      level: 'advanced'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      issuer: 'Internshala',
      date: '2023',
      description: 'Full-stack web development certification covering modern frameworks, responsive design, and industry best practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'API Integration'],
      credentialUrl: 'https://trainings.internshala.com/s/v/3449032/a46c10cb',
      icon: '🌐',
      color: '#667eea',
      category: 'web',
      status: 'completed',
      level: 'intermediate'
    },
    {
      id: 'python',
      title: 'Python Programming',
      issuer: 'GeeksforGeeks',
      date: '2023',
      description: 'Advanced Python programming certification covering data structures, algorithms, and application development.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'OOP', 'Libraries'],
      credentialUrl: 'https://www.geeksforgeeks.org/certificate/6d5870869af47fd72502cb12c77aa963?utm_source=socials&utm_medium=cc_link',
      icon: '🐍',
      color: '#3776ab',
      category: 'programming',
      status: 'completed',
      level: 'advanced'
    },
    {
      id: 'css',
      title: 'CSS (Basic)',
      issuer: 'HackerRank',
      date: '2023',
      description: 'CSS fundamentals certification covering styling techniques, layouts, responsive design, and modern CSS practices.',
      skills: ['CSS3', 'Flexbox', 'Grid Layout', 'Responsive Design', 'Selectors', 'Box Model'],
      credentialUrl: 'https://www.hackerrank.com/certificates/18c684569983',
      icon: '🎨',
      color: '#264de4',
      category: 'web',
      status: 'completed',
      level: 'intermediate'
    },
    {
      id: 'javascript',
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: '2023',
      description: 'JavaScript fundamentals certification covering ES6+ features, DOM manipulation, functions, and core programming concepts.',
      skills: ['JavaScript ES6+', 'DOM Manipulation', 'Functions', 'Variables', 'Event Handling', 'Data Types'],
      credentialUrl: 'https://www.hackerrank.com/certificates/35d4b3bc0dc1',
      icon: '⚡',
      color: '#f7df1e',
      category: 'web',
      status: 'completed',
      level: 'intermediate'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Certifications', icon: Award, color: '#64748b' },
    { key: 'ai', label: 'AI/ML', icon: Brain, color: '#43e97b' },
    { key: 'web', label: 'Web Development', icon: Code, color: '#667eea' },
    { key: 'programming', label: 'Programming', icon: BookOpen, color: '#3776ab' }
  ];

  const filteredCertifications = filter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card"
      style={{
        padding: '0',
        height: '100%',
        cursor: 'pointer',
        position: 'relative',
        border: `1px solid ${cert.color}30`,
        overflow: 'visible',
        isolation: 'isolate'
      }}
    >
      {/* Header with Gradient */}
      <div style={{
        background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}10)`,
        padding: '24px 24px 20px 24px',
        position: 'relative'
      }}>
        {/* Floating Icon */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          fontSize: '4rem',
          opacity: 0.1,
          transform: 'rotate(15deg)'
        }}>
          {cert.icon}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: `0 8px 24px ${cert.color}40`
          }}>
            {cert.icon}
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{
              padding: '4px 8px',
              background: cert.status === 'completed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(249, 115, 22, 0.2)',
              color: cert.status === 'completed' ? '#22c55e' : '#f97316',
              borderRadius: '12px',
              fontSize: '0.7rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              border: cert.status === 'completed' ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              {cert.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
            </span>
            <span style={{
              padding: '4px 8px',
              background: 'rgba(99, 102, 241, 0.2)',
              color: '#a5b4fc',
              borderRadius: '12px',
              fontSize: '0.7rem',
              fontWeight: '600',
              textTransform: 'capitalize',
              border: '1px solid rgba(99, 102, 241, 0.3)'
            }}>
              {cert.level}
            </span>
          </div>
        </div>

        <h3 style={{
          color: '#f8fafc',
          marginBottom: '6px',
          fontSize: '1.25rem',
          fontWeight: '700'
        }}>
          {cert.title}
        </h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <p style={{
            color: cert.color,
            fontSize: '0.9rem',
            fontWeight: '600',
            margin: 0
          }}>
            {cert.issuer}
          </p>
          <span style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#64748b'
          }} />
          <p style={{
            color: '#94a3b8',
            fontSize: '0.85rem',
            margin: 0
          }}>
            {cert.date}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <p style={{
          color: '#cbd5e1',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          marginBottom: '20px'
        }}>
          {cert.description}
        </p>

        {/* Skills */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            color: '#e2e8f0',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Skills Gained
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cert.skills.slice(0, 4).map((skill, skillIndex) => (
              <span
                key={skill}
                className="skill-tag"
                style={{
                  background: `${cert.color}15`,
                  color: cert.color,
                  border: `1px solid ${cert.color}30`,
                  fontSize: '0.75rem',
                  padding: '4px 8px'
                }}
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 4 && (
              <span className="skill-tag" style={{ fontSize: '0.75rem' }}>
                +{cert.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        {cert.credentialUrl && (
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: `${cert.color}20`,
              color: cert.color,
              border: `1px solid ${cert.color}40`,
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              width: '100%'
            }}
          >
            <ExternalLink size={16} />
            View Credential
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="section" style={{ overflow: 'visible' }}>
      <div className="container" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h2>My Lab</h2>
          <p className="subtitle">
            A dedicated showcase of continuous learning and professional certifications 
            that fuel my passion for technology and innovation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = filter === category.key;
            
            return (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: isActive ? `${category.color}20` : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? category.color : '#94a3b8',
                  border: `1px solid ${isActive ? category.color + '40' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '16px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <IconComponent size={16} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Certifications Grid */}
        <div 
          className="grid-3"
          style={{ 
            gap: '24px',
            width: '100%',
            maxWidth: '100%',
            overflow: 'visible'
          }}
        >
          {filteredCertifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏆</div>
            <h3 style={{ color: '#22c55e', marginBottom: '8px' }}>{certifications.length}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Certifications Earned</p>
          </div>
          
          <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚀</div>
            <h3 style={{ color: '#6366f1', marginBottom: '8px' }}>3</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Technology Areas</p>
          </div>
          
          <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📚</div>
            <h3 style={{ color: '#f59e0b', marginBottom: '8px' }}>24/7</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Learning Mindset</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .grid-3 {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
