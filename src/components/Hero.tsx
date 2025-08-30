import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import profileImage from '../profile2.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    ).fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))`,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 180, 360] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', minHeight: '70vh' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ textAlign: 'left' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px', justifyContent: 'center' }} className="skill-tags-container">
                <span className="skill-tag"><Sparkles size={16} style={{ marginRight: '8px' }} />Tech Lead</span>
                <span className="skill-tag">Full-Stack Developer</span>
                <span className="skill-tag">System Optimizer</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ marginBottom: '24px' }}>
              <h1 ref={titleRef} style={{ marginBottom: '16px', lineHeight: '1.1' }}>
                Hey, I'm <br />
                <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #43e97b 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}>
                  Aditya
                </span>
              </h1>
            </motion.div>

            <motion.p ref={subtitleRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ced4da', marginBottom: '40px', maxWidth: '500px' }}>
              Full-stack software developer currently serving as a Tech Lead, focused on building efficient, user-centric applications with a strong foundation in 
              <span style={{ color: '#667eea', fontWeight: '600' }}> software design</span> and <span style={{ color: '#43e97b', fontWeight: '600' }}>system optimization</span>. 
              Skilled at delivering reliable, high-performance solutions that enhance <span style={{ color: '#764ba2', fontWeight: '600' }}>usability and scalability</span>, 
              with proven experience leading teams to measurable improvements.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }} className="hero-buttons">
              <button className="btn btn-primary btn-glow" onClick={scrollToProjects} style={{ fontSize: '1.1rem' }}>
                Explore My Work <ArrowDown size={20} style={{ marginLeft: '8px' }} />
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Get In Touch <Mail size={18} style={{ marginLeft: '8px' }} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }} className="social-links">
              {[{ icon: <Github size={20} />, href: 'https://github.com/AdityaD28', label: 'GitHub' }, { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/adityadasappanavar/', label: 'LinkedIn' }, { icon: <Mail size={20} />, href: 'mailto:adityadasappanavar@gmail.com', label: 'Email' }].map((social, index) => (
                <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 1 + index * 0.1 }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#e2e8f0', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} title={social.label}>
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
            className="profile-container"
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              position: 'relative', 
              width: '300px', 
              height: '300px', 
              margin: '0 auto', 
              zIndex: 2 
            }}
          >
            {/* Rotating background gradient */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
              style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                background: 'conic-gradient(from 0deg, #667eea, #764ba2, #43e97b, #667eea)', 
                opacity: 0.08, 
                zIndex: 0 
              }} 
            />
            
            {/* Glass frame container */}
            <div style={{ 
              width: '280px', 
              height: '280px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))', 
              backdropFilter: 'blur(30px)', 
              border: '2px solid rgba(255, 255, 255, 0.2)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              zIndex: 1, 
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Profile image */}
              <div style={{
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '4rem',
                fontWeight: 'bold'
              }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  onError={(e) => {
                    console.log('Image failed to load:', e);
                    console.log('Attempted to load:', profileImage);
                    e.currentTarget.style.display = 'none';
                    // Show fallback text
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div style="color: white; font-size: 3rem; font-weight: bold;">AD</div>';
                    }
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully from:', profileImage);
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderRadius: '50%',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={scrollToProjects}>
          <span style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '12px', fontWeight: '500' }}>
            Scroll to explore
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={24} color="#667eea" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          .skill-tags-container {
            justify-content: center !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
          }
          
          .social-links {
            justify-content: center !important;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
            min-height: 100vh !important;
            display: flex !important;
            align-items: center !important;
          }

          .hero-grid {
            gap: 30px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            min-height: auto !important;
          }
          
          .profile-container {
            order: -1 !important;
            width: 220px !important;
            height: 220px !important;
            margin: 0 auto 2rem auto !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
          
          .profile-container > div:first-child {
            width: 220px !important;
            height: 220px !important;
          }
          
          .profile-container > div:last-child {
            width: 200px !important;
            height: 200px !important;
          }
          
          .profile-container > div:last-child > div {
            width: 180px !important;
            height: 180px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 1rem !important;
          }
          
          .hero-buttons .btn {
            width: 100% !important;
            max-width: 280px !important;
            margin: 0 !important;
          }
          
          .skill-tags-container {
            margin-bottom: 1.5rem !important;
            justify-content: center !important;
            text-align: center !important;
          }
          
          .skill-tag {
            margin: 0 4px 8px 0 !important;
            font-size: 0.8rem !important;
            padding: 8px 12px !important;
          }
          
          .hero p {
            text-align: center !important;
            max-width: 100% !important;
            margin: 0 auto 2rem auto !important;
          }
          
          .social-links {
            justify-content: center !important;
            margin-top: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 80px !important;
            padding-bottom: 40px !important;
            min-height: 100vh !important;
          }
          
          .profile-container {
            width: 180px !important;
            height: 180px !important;
            margin: 0 auto 1.5rem auto !important;
          }
          
          .profile-container > div:first-child {
            width: 180px !important;
            height: 180px !important;
          }
          
          .profile-container > div:last-child {
            width: 160px !important;
            height: 160px !important;
          }
          
          .profile-container > div:last-child > div {
            width: 140px !important;
            height: 140px !important;
          }
          
          .hero-buttons .btn {
            max-width: 250px !important;
            font-size: 0.9rem !important;
            padding: 12px 20px !important;
          }
          
          .skill-tag {
            font-size: 0.75rem !important;
            padding: 6px 10px !important;
          }
          
          .social-links {
            gap: 12px !important;
            margin-top: 1.5rem !important;
          }
          
          .social-links a {
            padding: 10px !important;
          }
          
          .hero h1 {
            font-size: clamp(2.2rem, 8vw, 2.8rem) !important;
            line-height: 1.1 !important;
            margin-bottom: 1rem !important;
          }
          
          .hero p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
