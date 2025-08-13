import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code, Zap, Brain, Globe, ChevronRight, Award, TrendingUp } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  techStack: string[];
  github?: string;
  video?: string;
  image: string;
  category: 'ai' | 'web' | 'mobile';
  featured: boolean;
  achievements?: string[];
  metrics?: { label: string; value: string }[];
  impact?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to open modal - keep scrolling available but prevent jumping
  const openModal = (project: Project) => {
    // Just capture current scroll position and open modal
    const currentScrollY = window.scrollY;
    setScrollPosition(currentScrollY);
    setSelectedProject(project);
  };

  // Function to close modal - just close without any scroll manipulation
  const closeModal = () => {
    setSelectedProject(null);
    // Don't manipulate scroll position - let it stay where it is
  };

  // No scroll manipulation needed
  useEffect(() => {
    // Just cleanup on unmount
    return () => {
      // Clean component unmount
    };
  }, []);

  const projects: Project[] = [
    {
      id: 'greenguardian',
      title: 'GreenGuardian',
      tagline: 'AI-Powered Plant Disease Detection',
      challenge: 'Farmers struggle to identify plant diseases early, leading to significant crop losses and reduced agricultural productivity.',
      solution: 'Developed a comprehensive web application using React.js and TensorFlow.js that enables real-time plant disease detection through image analysis. The system provides instant diagnosis with treatment recommendations, helping farmers make informed decisions quickly.',
      techStack: ['React', 'TensorFlow', 'Python', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com/AdityaD28/GreenGuardian',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: true,
      achievements: [
        'Real-time disease detection with 95% accuracy',
        'Comprehensive treatment recommendation system',
        'User-friendly interface designed for farmers'
      ],
      metrics: [
        { label: 'Accuracy', value: '95%' },
        { label: 'Detection Time', value: '<2s' },
        { label: 'Diseases Supported', value: '20+' }
      ],
      impact: 'Helping farmers reduce crop losses by up to 40% through early disease detection'
    },
    {
      id: 'ai-portfolio',
      title: 'AI-Powered Portfolio Website',
      tagline: 'Intelligent Interactive Portfolio with AI Chatbot',
      challenge: 'Traditional portfolios lack interactivity and fail to provide personalized information to visitors.',
      solution: 'Created an innovative portfolio website featuring an AI-powered chatbot that can answer questions about projects, skills, and experience in real-time. Built with modern web technologies and integrated machine learning capabilities.',
      techStack: ['React', 'TypeScript', 'AI/ML', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/AdityaD28/My-Portfolio',
      image: '/api/placeholder/600/400',
      category: 'web',
      featured: true,
      achievements: [
        'Interactive AI chatbot for visitor engagement',
        'Modern glassmorphism design with smooth animations',
        'Responsive design across all devices'
      ],
      metrics: [
        { label: 'Performance', value: '98/100' },
        { label: 'Accessibility', value: '100/100' },
        { label: 'Load Time', value: '<1s' }
      ],
      impact: 'Revolutionizing how developers showcase their work with intelligent interactivity'
    },
    {
      id: 'hand-gesture',
      title: 'Real-time Hand Gesture Recognition',
      tagline: 'Computer Vision-Based Gesture Control System',
      challenge: 'Developing accurate real-time gesture recognition for intuitive human-computer interaction.',
      solution: 'Engineered a sophisticated computer vision system using OpenCV and deep learning techniques to recognize and interpret hand gestures in real-time, enabling touchless control interfaces.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'MediaPipe'],
      github: 'https://github.com/AdityaD28/SCT_ML_04',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: true,
      achievements: [
        'Real-time gesture processing at 30+ FPS',
        'Support for 10+ gesture commands',
        'High accuracy in various lighting conditions'
      ],
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'Processing Speed', value: '30 FPS' },
        { label: 'Gestures', value: '10+' }
      ],
      impact: 'Enabling touchless interfaces for healthcare and accessibility applications'
    },
    {
      id: 'dogs-vs-cats',
      title: 'Dogs Vs Cats Classification',
      tagline: 'Deep Learning Image Classification System',
      challenge: 'Accurately distinguishing between dog and cat images using machine learning techniques for automated image classification.',
      solution: 'Developed a convolutional neural network (CNN) model using deep learning frameworks to classify images of dogs and cats with high accuracy. Implemented data preprocessing, model training, and evaluation techniques.',
      techStack: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'CNN'],
      github: 'https://github.com/AdityaD28/SCT_ML_03',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: false,
      achievements: [
        'High accuracy image classification model',
        'Efficient CNN architecture implementation',
        'Comprehensive data preprocessing pipeline'
      ],
      metrics: [
        { label: 'Accuracy', value: '94%' },
        { label: 'Training Time', value: '2h' },
        { label: 'Model Size', value: '15MB' }
      ],
      impact: 'Demonstrating practical application of deep learning in image classification tasks'
    },
    {
      id: 'ai-career-recommender',
      title: 'AI Career Recommender',
      tagline: 'Intelligent Career Path Recommendation System',
      challenge: 'Helping individuals make informed career decisions by analyzing their skills, interests, and market trends to provide personalized career recommendations.',
      solution: 'Built an AI-powered recommendation system that analyzes user profiles, skills, and preferences to suggest optimal career paths. Incorporates machine learning algorithms to provide data-driven career guidance.',
      techStack: ['Python', 'Machine Learning', 'AI/ML', 'Data Analysis', 'Recommendation Systems'],
      github: 'https://github.com/AdityaD28/AI-Career-Recommender',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: false,
      achievements: [
        'Personalized career path recommendations',
        'Skills gap analysis and improvement suggestions',
        'Market trend integration for relevant advice'
      ],
      metrics: [
        { label: 'Accuracy', value: '88%' },
        { label: 'User Satisfaction', value: '4.5/5' },
        { label: 'Career Paths', value: '50+' }
      ],
      impact: 'Empowering individuals to make informed career decisions with AI-driven insights'
    }
  ];

  const techStackColors: { [key: string]: string } = {
    'React': '#61dafb',
    'TensorFlow': '#ff6f00',
    'Python': '#3776ab',
    'TypeScript': '#3178c6',
    'Computer Vision': '#43e97b',
    'Machine Learning': '#43e97b',
    'Deep Learning': '#43e97b',
    'OpenCV': '#5c3ee8',
    'Framer Motion': '#0055ff',
    'AI/ML': '#43e97b',
    'Three.js': '#000000',
    'MediaPipe': '#4285f4',
    'CNN': '#ff9500',
    'Data Analysis': '#2196f3',
    'Recommendation Systems': '#9c27b0'
  };

  const categoryIcons = {
    ai: Brain,
    web: Globe,
    mobile: Code
  };

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const IconComponent = categoryIcons[project.category];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.02 }}
        className="glass-card hover-lift"
        style={{
          padding: '0',
          height: '100%',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'visible',
          isolation: 'isolate'
        }}
        onClick={() => openModal(project)}
      >
        {/* Hero Section */}
        <div style={{
          height: '220px',
          background: `linear-gradient(135deg, ${techStackColors[project.techStack[0]] || '#667eea'}20, ${techStackColors[project.techStack[1]] || '#764ba2'}20)`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Animated Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 70%, ${techStackColors[project.techStack[0]] || '#667eea'}15, transparent 50%), radial-gradient(circle at 70% 30%, ${techStackColors[project.techStack[1]] || '#764ba2'}15, transparent 50%)`,
            animation: 'float 6s ease-in-out infinite'
          }} />
          
          {/* Category Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <IconComponent size={16} color="#fff" />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {project.category}
            </span>
          </div>

          {/* Main Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{
              fontSize: '4rem',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          >
            {project.category === 'ai' ? '🧠' : project.category === 'web' ? '🌐' : '📱'}
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          <motion.h3 
            style={{ 
              marginBottom: '8px', 
              color: '#f8fafc',
              fontSize: '1.5rem',
              fontWeight: '700'
            }}
            whileHover={{ color: techStackColors[project.techStack[0]] }}
          >
            {project.title}
          </motion.h3>
          
          <p style={{ 
            color: techStackColors[project.techStack[0]] || '#667eea',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.4'
          }}>
            {project.tagline}
          </p>

          <p style={{ 
            fontSize: '0.9rem',
            color: '#cbd5e1',
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            {project.challenge}
          </p>

          {/* Key Metrics */}
          {project.metrics && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '24px'
            }}>
              {project.metrics.map((metric, idx) => (
                <div key={idx} style={{
                  textAlign: 'center',
                  padding: '12px 8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: techStackColors[project.techStack[0]] || '#667eea',
                    marginBottom: '4px'
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="skill-tag"
                  style={{
                    background: `${techStackColors[tech] || '#667eea'}20`,
                    color: techStackColors[tech] || '#667eea',
                    border: `1px solid ${techStackColors[tech] || '#667eea'}40`,
                    fontSize: '0.75rem',
                    padding: '6px 12px'
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="skill-tag" style={{ fontSize: '0.75rem' }}>
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '10px 20px',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Code
              </motion.a>
            )}            <motion.button
              whileHover={{ x: 5 }}
              onClick={(e) => {
                e.stopPropagation();
                openModal(project);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: 'auto',
                cursor: 'pointer'
              }}
            >
              Learn More
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Project Detail Modal
  const ProjectModal: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '20px',
        overflow: 'auto'
      }}
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(30px)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          zIndex: 100000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(239, 68, 68, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            zIndex: 100001,
            transition: 'all 0.2s ease',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 1)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.8)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${techStackColors[project.techStack[0]] || '#667eea'}20, ${techStackColors[project.techStack[1]] || '#764ba2'}20)`,
          padding: '40px 40px 30px 40px',
          position: 'relative'
        }}>
          <h2 style={{ marginBottom: '8px', fontSize: '2rem' }}>{project.title}</h2>
          <p style={{ 
            color: techStackColors[project.techStack[0]] || '#667eea',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '0'
          }}>
            {project.tagline}
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          {/* Challenge & Solution */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={20} color="#f59e0b" />
              The Challenge
            </h3>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>{project.challenge}</p>
            
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="#22c55e" />
              My Solution
            </h3>
            <p style={{ marginBottom: '0', lineHeight: '1.7' }}>{project.solution}</p>
          </div>

          {/* Key Achievements */}
          {project.achievements && (
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={20} color="#6366f1" />
                Key Achievements
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {project.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: techStackColors[project.techStack[0]] || '#667eea'
                    }} />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="skill-tag"
                  style={{
                    background: `${techStackColors[tech] || '#667eea'}20`,
                    color: techStackColors[tech] || '#667eea',
                    border: `1px solid ${techStackColors[tech] || '#667eea'}40`,
                    padding: '8px 16px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          {project.impact && (
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '30px'
            }}>
              <h4 style={{ color: '#22c55e', marginBottom: '8px' }}>Impact</h4>
              <p style={{ margin: '0', fontSize: '0.95rem' }}>{project.impact}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <section id="projects" className="section" style={{ overflow: 'visible' }}>
        <div className="container" style={{ overflow: 'visible' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            <h2>My Projects</h2>
            <p className="subtitle">
              A comprehensive showcase of my projects, demonstrating technical expertise 
              and real-world impact across various domains.
            </p>
          </motion.div>

          <div className="grid-3" style={{ 
            gap: '32px',
            width: '100%',
            maxWidth: '100%',
            overflow: 'visible'
          }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .grid-3 {
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
