import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Globe, Server, Cpu, Wrench, Star, Zap, ChevronRight,
  Code, FileCode, Palette, FileText, Layers, Database,
  GitBranch, BarChart3, Eye, Workflow, Calculator
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'core' | 'frontend' | 'ai' | 'tools';
  logo: string; // Path to logo image in public folder
  description: string;
  related: string[];
}

const SkillConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Core Programming
    { 
      id: 'python', 
      name: 'Python', 
      level: 95, 
      category: 'core', 
      logo: '/logos/python.png',
      description: 'Advanced programming with data structures, algorithms, and OOP',
      related: ['tensorflow', 'scikit-learn', 'pandas']
    },

    // Frontend Development
    { 
      id: 'react', 
      name: 'React.js', 
      level: 92, 
      category: 'frontend', 
      logo: '/logos/react.png',
      description: 'Hooks, Context API, performance optimization, and modern patterns',
      related: ['tailwind', 'css']
    },
    { 
      id: 'tailwind', 
      name: 'Tailwind CSS', 
      level: 88, 
      category: 'frontend', 
      logo: '/logos/tailwind.png',
      description: 'Utility-first CSS framework for rapid UI development',
      related: ['react', 'css']
    },
    { 
      id: 'css', 
      name: 'CSS3', 
      level: 85, 
      category: 'frontend', 
      logo: '/logos/css3.png',
      description: 'Advanced animations, grid, flexbox, and responsive design',
      related: ['html', 'tailwind']
    },
    { 
      id: 'html', 
      name: 'HTML5', 
      level: 90, 
      category: 'frontend', 
      logo: '/logos/html.png',
      description: 'Semantic markup, accessibility, and modern web standards',
      related: ['css']
    },

    // AI/ML
    { 
      id: 'tensorflow', 
      name: 'TensorFlow', 
      level: 88, 
      category: 'ai', 
      logo: '/logos/tensorflow.png',
      description: 'Deep learning models, neural networks, and model deployment',
      related: ['python', 'ml']
    },
    { 
      id: 'scikit-learn', 
      name: 'Scikit-learn', 
      level: 90, 
      category: 'ai', 
      logo: '/logos/scikit-learn.png',
      description: 'Machine learning algorithms and data preprocessing',
      related: ['python', 'pandas', 'numpy']
    },
    { 
      id: 'pandas', 
      name: 'Pandas', 
      level: 92, 
      category: 'ai', 
      logo: '/logos/pandas.png',
      description: 'Data manipulation, analysis, and ETL processes',
      related: ['python', 'numpy']
    },
    { 
      id: 'numpy', 
      name: 'NumPy', 
      level: 88, 
      category: 'ai', 
      logo: '/logos/numpy.png',
      description: 'Numerical computing and array operations',
      related: ['python', 'pandas']
    },

    // Tools
    { 
      id: 'git', 
      name: 'Git', 
      level: 85, 
      category: 'tools', 
      logo: '/logos/git.png',
      description: 'Version control, collaboration, and workflow management',
      related: []
    }
  ];

  const categories = {
    core: { name: 'Core Programming', icon: Cpu, color: '#667eea', gradient: 'from-blue-500 to-purple-600' },
    frontend: { name: 'Frontend Development', icon: Globe, color: '#f093fb', gradient: 'from-pink-500 to-rose-500' },
    ai: { name: 'AI & Machine Learning', icon: Brain, color: '#43e97b', gradient: 'from-green-400 to-emerald-500' },
    tools: { name: 'Tools & Technologies', icon: Wrench, color: '#ffa726', gradient: 'from-orange-400 to-amber-500' }
  };

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-slate-500';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="section" style={{ overflow: 'visible' }}>
      <div className="container" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Skills & Expertise</h2>
          <p className="subtitle">
            Comprehensive technical skills across full-stack development and AI/ML
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory(null)}
            className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
            style={{
              padding: '12px 24px',
              borderRadius: '50px',
              border: 'none',
              background: selectedCategory === null 
                ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                : 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Star size={16} />
            All Skills
          </motion.button>
          
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(key)}
                className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
                style={{
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  background: selectedCategory === key 
                    ? `linear-gradient(135deg, ${category.color}, ${category.color}dd)` 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <IconComponent size={16} />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory || 'all'}
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <AnimatePresence mode="popLayout">
            {(selectedCategory ? getSkillsByCategory(selectedCategory) : skills).map((skill, index) => (
              <motion.div
                key={`${skill.id}-${selectedCategory || 'all'}`}
                layoutId={skill.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  layout: {
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  transition: { duration: 0.15, type: "spring", stiffness: 300 }
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="glass-card skill-card"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: hoveredSkill === skill.id 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  transition: 'background 0.2s ease'
                }}
              >
                {/* Skill Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${categories[skill.category].color}15, ${categories[skill.category].color}08)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${categories[skill.category].color}25`,
                      padding: '4px'
                    }}>
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        style={{
                          width: '32px',
                          height: '32px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                        onError={(e) => {
                          // Fallback in case image doesn't load
                          e.currentTarget.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.style.cssText = `
                            width: 32px; 
                            height: 32px; 
                            background: ${categories[skill.category].color}30; 
                            border-radius: 6px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 14px; 
                            font-weight: 600; 
                            color: ${categories[skill.category].color};
                          `;
                          fallback.textContent = skill.name.charAt(0);
                          e.currentTarget.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <div>
                      <h3 style={{
                        margin: 0,
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#fff'
                      }}>
                        {skill.name}
                      </h3>
                      <span style={{
                        fontSize: '0.875rem',
                        color: categories[skill.category].color,
                        fontWeight: '600'
                      }}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: categories[skill.category].color
                  }}>
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.03,
                      ease: "easeOut"
                    }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${categories[skill.category].color}, ${categories[skill.category].color}cc)`,
                      borderRadius: '4px',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: '20px',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3))',
                      animation: hoveredSkill === skill.id ? 'shimmer 2s infinite' : 'none'
                    }} />
                  </motion.div>
                </div>

                {/* Description */}
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: '#cbd5e1',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  {skill.description}
                </p>

                {/* Related Skills */}
                {skill.related.length > 0 && (
                  <div>
                    <h4 style={{
                      margin: 0,
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Related Technologies
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px'
                    }}>
                      {skill.related.slice(0, 4).map((relatedId) => {
                        const relatedSkill = skills.find(s => s.id === relatedId);
                        return relatedSkill ? (
                          <span
                            key={relatedId}
                            style={{
                              padding: '4px 8px',
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              color: '#e2e8f0',
                              border: `1px solid ${categories[relatedSkill.category].color}30`
                            }}
                          >
                            {relatedSkill.name}
                          </span>
                        ) : null;
                      })}
                      {skill.related.length > 4 && (
                        <span style={{
                          padding: '4px 8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          color: '#94a3b8'
                        }}>
                          +{skill.related.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.id ? 1 : 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${categories[skill.category].color}10, ${categories[skill.category].color}05)`,
                    pointerEvents: 'none',
                    borderRadius: 'inherit'
                  }}
                />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 8px',
                  background: categories[skill.category].color,
                  borderRadius: '12px',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {skill.category === 'ai' ? 'AI/ML' : skill.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            marginTop: '48px',
            padding: '32px',
            maxWidth: '800px',
            margin: '48px auto 0',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            marginBottom: '16px',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#fff'
          }}>
            Skills Overview
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '24px',
            marginTop: '24px'
          }}>
            {Object.entries(categories).map(([key, category]) => {
              const categorySkills = getSkillsByCategory(key);
              const avgLevel = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
              );
              const IconComponent = category.icon;
              
              return (
                <div key={key} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto 12px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}>
                    <IconComponent size={24} color="#000" />
                  </div>
                  <h4 style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '4px'
                  }}>
                    {category.name}
                  </h4>
                  <p style={{
                    margin: 0,
                    fontSize: '0.75rem',
                    color: '#94a3b8'
                  }}>
                    {categorySkills.length} skills • {avgLevel}% avg
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .skill-card {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .skill-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
        }
        
        .category-btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .category-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          
          .skill-card {
            margin: 0;
          }
          
          .skill-card:hover {
            transform: translateY(-3px) scale(1.005);
          }
        }
        
        @media (max-width: 480px) {
          .category-btn {
            padding: 8px 16px !important;
            font-size: 0.875rem;
          }
          
          .skill-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillConstellation;
