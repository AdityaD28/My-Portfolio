import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply theme to document body
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  // Initialize theme on component mount
  useEffect(() => {
    document.body.className = 'dark-theme';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    console.log('Scrolling to:', href);
    // First close the mobile menu
    setIsMobileMenuOpen(false);
    
    // Small delay to let menu close animation start
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('Found element and scrolling');
      } else {
        console.log('Element not found:', href);
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      style={{
        padding: '16px 0',
        zIndex: 1000
      }}
    >
      <div className="container mx-auto px-6">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('#home')}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '18px'
            }}>
              AD
            </div>
            <span style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }} className="brand-name">
              ADITYA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }} className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => {
                  console.log(`Desktop nav clicked: ${item.name} -> ${item.href}`);
                  scrollToSection(item.href);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#e9ecef',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e9ecef';
                }}
              >
                {item.name}
                <motion.div
                  className="nav-underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    transformOrigin: 'left',
                    borderRadius: '1px'
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: isMobileMenuOpen 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 10003
              }}
              className="mobile-menu-toggle"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="desktop-theme-toggle"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/Aditya-Dasappanavar-Resume4.pdf" // Add your resume PDF to public folder
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              className="desktop-resume-btn"
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 10001
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(26, 32, 46, 0.98))',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 10002,
              padding: '20px',
              paddingTop: '80px',
              paddingBottom: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
              isolation: 'isolate',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              overflowY: 'auto',
              overflowX: 'hidden',
              maxHeight: '100vh'
            }}
          >
            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  console.log(`Mobile menu item clicked: ${item.name} -> ${item.href}`);
                  scrollToSection(item.href);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#e9ecef',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '14px 16px',
                  textAlign: 'left',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: '6px',
                  position: 'relative',
                  zIndex: 1,
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0px)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)'
                  }}
                />
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                console.log('Theme toggle clicked');
                setIsDarkMode(!isDarkMode);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#e9ecef',
                fontSize: '18px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '14px 16px',
                textAlign: 'left',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '6px',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0px)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </div>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)'
                }}
              />
            </button>

            {/* Mobile Resume Button */}
            <a
              href="/Aditya-Dasappanavar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                console.log('Resume download clicked');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '6px',
                marginTop: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .brand-name {
          white-space: nowrap;
        }
        
        .desktop-nav {
          display: flex;
        }
        
        .mobile-menu-toggle {
          display: none !important;
        }
        
        .desktop-theme-toggle {
          display: flex;
        }
        
        .desktop-resume-btn {
          display: flex;
        }
        
        /* Remove all button focus styles that might cause highlighting */
        button:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        
        button:active {
          outline: none !important;
        }
        
        button:-moz-focusring {
          outline: none !important;
        }
        
        /* Mobile menu with maximum priority */
        .mobile-menu {
          z-index: 10002 !important;
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          isolation: isolate !important;
          transform: none !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          -webkit-overflow-scrolling: touch !important;
        }
        
        .mobile-menu * {
          z-index: 1 !important;
          position: relative !important;
        }
        
        /* Ensure all mobile menu buttons have consistent styling */
        .mobile-menu button {
          background: transparent !important;
          -webkit-tap-highlight-color: transparent !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
        }
        
        @media (max-width: 768px) {
          .brand-name {
            display: none !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: flex !important;
            position: relative !important;
            z-index: 10003 !important;
          }
          
          .desktop-theme-toggle {
            display: none !important;
          }
          
          .desktop-resume-btn {
            display: none !important;
          }
          
          /* Navigation container adjustments */
          nav {
            position: fixed !important;
            z-index: 1000 !important;
          }
          
          nav > div > div {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          nav {
            padding: 12px 0 !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            padding: 80px 20px 60px !important;
          }
          
          /* Ensure scrolling works on small screens */
          .mobile-menu {
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          
          /* Fix hamburger positioning on very small screens */
          .mobile-menu-toggle {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 10003 !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navigation;
