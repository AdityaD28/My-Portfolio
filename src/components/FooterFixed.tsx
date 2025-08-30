import * as React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Send } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

interface ServiceItem {
  name: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const services: ServiceItem[] = [
    { name: 'Full-Stack Software Development' },
    { name: 'System Architecture & Design' },
    { name: 'Performance Optimization' },
    { name: 'Technical Leadership' },
    { name: 'User-Centric Solutions' }
  ];

  return (
    <footer className="footer-container">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '20px'
                }}>AD</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: 0
              }} className="footer-heading">Aditya Dasappanavar</h3>
            </div>
            
            <p className="footer-text" style={{
              lineHeight: '1.6',
              marginBottom: '24px',
              fontSize: '14px'
            }}>
              Full-stack software developer currently serving as a Tech Lead, 
              focused on building efficient, user-centric applications with a 
              strong foundation in software design and system optimization.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/aditya-das-appanavar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/in/aditya-dasappanavar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:adityadasappanavar@gmail.com"
                className="footer-social-link"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-heading" style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '24px'
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navigationItems.map((item) => (
                <li key={item.name} style={{ marginBottom: '12px' }}>
                  <a
                    href={item.href}
                    className="footer-text"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.3s ease'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#667eea';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                    }}
                  >
                    <span style={{
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#667eea',
                      borderRadius: '50%'
                    }} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-heading" style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '24px'
            }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service) => (
                <li key={service.name} className="footer-text" style={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }} />
                  {service.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-heading" style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '24px'
            }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} style={{ color: '#667eea', marginTop: '2px' }} />
                <p className="footer-text" style={{
                  fontSize: '14px',
                  margin: 0
                }}>Bangalore, India</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Mail size={16} style={{ color: '#667eea', marginTop: '2px' }} />
                <a href="mailto:adityadasappanavar@gmail.com" className="footer-text" style={{
                  textDecoration: 'none',
                  fontSize: '14px'
                }}>
                  adityadasappanavar@gmail.com
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Phone size={16} style={{ color: '#667eea', marginTop: '2px' }} />
                <p className="footer-text" style={{
                  fontSize: '14px',
                  margin: 0
                }}>+91 9945161604</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Send size={16} style={{ color: '#667eea', marginTop: '2px' }} />
                <a href="https://linkedin.com/in/aditya-dasappanavar" target="_blank" rel="noopener noreferrer" className="footer-text" style={{
                  textDecoration: 'none',
                  fontSize: '14px'
                }}>
                  linkedin.com/in/aditya-dasappanavar
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <p className="footer-text" style={{
            fontSize: '14px',
            margin: 0
          }}>
            © {currentYear} Aditya Dasappanavar. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="footer-scroll-button"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
