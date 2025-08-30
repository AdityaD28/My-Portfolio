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
      id: 'ai-portfolio',
      title: 'AI-Powered Portfolio Website',
      tagline: 'Interactive Portfolio with AI Chatbot Integration',
      challenge: 'Traditional portfolios lack interactivity and fail to provide instant, personalized information to recruiters.',
      solution: 'Developed a personal portfolio platform with AI chatbot integration, allowing recruiters to instantly query project insights. Optimized performance using React.js + Tailwind CSS + Node.js, delivering 40% faster load times and ensuring 100% mobile responsiveness.',
      techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AI/ML', 'Framer Motion'],
      github: 'https://github.com/AdityaD28/My-Portfolio',
      image: '/api/placeholder/600/400',
      category: 'web',
      featured: true,
      achievements: [
        'Showcased 15+ projects effectively',
        '2x increase in recruiter engagement',
        '40% faster load times',
        '100% mobile responsiveness'
      ],
      metrics: [
        { label: 'Load Time', value: '<1s' },
        { label: 'Mobile Score', value: '100%' },
        { label: 'Engagement', value: '+200%' }
      ],
      impact: 'Revolutionizing how developers showcase their work with intelligent interactivity'
    },
    {
      id: 'ecommerce-website',
      title: 'E-commerce Website',
      tagline: 'Full-Stack E-commerce Solution',
      challenge: 'Building a scalable e-commerce platform that can handle high traffic and provide seamless shopping experiences.',
      solution: 'Engineered a full-stack e-commerce solution supporting 500+ SKUs, featuring secure checkout, user authentication, and order history. Scaled the system to handle 100+ daily active users without downtime and improved conversion rates by 20% through optimization.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Payment Gateway', 'Authentication'],
      github: 'https://github.com/AdityaD28/E-commerce-Website',
      image: '/api/placeholder/600/400',
      category: 'web',
      featured: true,
      achievements: [
        'Supports 500+ product SKUs',
        'Handles 100+ daily active users',
        '20% improvement in conversion rates',
        '40% faster page load times'
      ],
      metrics: [
        { label: 'SKUs Supported', value: '500+' },
        { label: 'Daily Users', value: '100+' },
        { label: 'Conversion Rate', value: '+20%' }
      ],
      impact: 'Enabling small businesses to establish robust online presence with enterprise-grade features'
    },
    {
      id: 'employee-management-system',
      title: 'Employee Management System',
      tagline: 'Enterprise-Grade EMS with Payroll Automation',
      challenge: 'Organizations struggle with manual employee management and payroll processes, leading to errors and inefficiencies.',
      solution: 'Designed and deployed an employee management tool to handle 1000+ employee records with payroll automation and task assignments. Automated payroll processes reducing administrative overhead by 60% and increasing accuracy by 25% through structured SQL queries.',
      techStack: ['Web Technologies', 'SQL', 'Database Design', 'Authentication', 'Role-Based Access'],
      github: 'https://github.com/AdityaD28/Employee-Management-System',
      image: '/api/placeholder/600/400',
      category: 'web',
      featured: false,
      achievements: [
        'Manages 1000+ employee records',
        '60% reduction in administrative overhead',
        '25% increase in payroll accuracy',
        'Role-based access control system'
      ],
      metrics: [
        { label: 'Employee Records', value: '1000+' },
        { label: 'Admin Efficiency', value: '+60%' },
        { label: 'Payroll Accuracy', value: '+25%' }
      ],
      impact: 'Streamlining HR operations for large organizations with automated workflows'
    },
    {
      id: 'hand-gesture-recognition',
      title: 'Hand Gesture Recognition System',
      tagline: 'Real-time AI-Powered Gesture Control',
      challenge: 'Creating touchless interfaces for healthcare and accessibility applications using computer vision and machine learning.',
      solution: 'Developed an advanced hand gesture recognition system using OpenCV, MediaPipe, and deep learning for real-time gesture detection and control. Achieved high accuracy in various lighting conditions with 30+ FPS processing speed.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'MediaPipe'],
      github: 'https://github.com/AdityaD28/SCT_ML_04',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: true,
      achievements: [
        'Real-time gesture processing at 30+ FPS',
        'Support for 10+ gesture commands',
        'High accuracy in various lighting conditions',
        'Touchless interface implementation'
      ],
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'Processing Speed', value: '30 FPS' },
        { label: 'Gestures', value: '10+' }
      ],
      impact: 'Enabling touchless interfaces for healthcare and accessibility applications'
    },
    {
      id: 'dogs-vs-cats-classification',
      title: 'Dogs vs Cats Image Classification',
      tagline: 'Deep Learning Computer Vision Model',
      challenge: 'Accurately distinguishing between dog and cat images using machine learning techniques for automated image classification.',
      solution: 'Developed a convolutional neural network (CNN) model using deep learning frameworks to classify images of dogs and cats with high accuracy. Implemented comprehensive data preprocessing, model training, and evaluation techniques.',
      techStack: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'CNN'],
      github: 'https://github.com/AdityaD28/SCT_ML_03',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: false,
      achievements: [
        'High accuracy image classification model',
        'Efficient CNN architecture implementation',
        'Comprehensive data preprocessing pipeline',
        'Robust model evaluation metrics'
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
      title: 'AI Career Recommender System',
      tagline: 'Intelligent Career Path Recommendation Engine',
      challenge: 'Helping individuals make informed career decisions by analyzing their skills, interests, and market trends to provide personalized career recommendations.',
      solution: 'Built an AI-powered recommendation system that analyzes user profiles, skills, and preferences to suggest optimal career paths. Incorporates machine learning algorithms to provide data-driven career guidance with market trend integration.',
      techStack: ['Python', 'Machine Learning', 'AI/ML', 'Data Analysis', 'Recommendation Systems'],
      github: 'https://github.com/AdityaD28/AI-Career-Recommender',
      image: '/api/placeholder/600/400',
      category: 'ai',
      featured: false,
      achievements: [
        'Personalized career path recommendations',
        'Skills gap analysis and improvement suggestions',
        'Market trend integration for relevant advice',
        'User-friendly interface design'
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

          {/* View More Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              marginTop: '60px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '600px',
              width: '100%'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Explore More Projects
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#94a3b8',
                marginBottom: '32px'
              }}>
                Check out my complete portfolio on GitHub to see additional projects, 
                code samples, and contributions to open-source initiatives.
              </p>
              <motion.a
                href="https://github.com/AdityaD28"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: '12px',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                }}
              >
                <Github size={20} />
                View All Projects on GitHub
                <ChevronRight size={18} />
              </motion.a>
            </div>
          </motion.div>
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
