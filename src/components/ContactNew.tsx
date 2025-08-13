import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Linkedin, Github, CheckCircle, AlertCircle, MessageSquare, User, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS configuration - using environment variables for security
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_su988du';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_ynropac';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'EI9Vj3qhdzoFTLLOd';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if EmailJS is properly configured
      if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY' || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured. Please set environment variables.');
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        name: formData.name,
        from_email: formData.email,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.'
      });
      
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error: any) {
      console.error('Email sending error:', error);
      
      // If EmailJS fails, provide fallback option
      setFormStatus({
        type: 'error',
        message: 'Unable to send message automatically. Please contact me directly at adityadasappanavar@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityadasappanavar@gmail.com',
      href: 'mailto:adityadasappanavar@gmail.com',
      color: '#ef4444'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/adityadasappanavar',
      href: 'https://linkedin.com/in/adityadasappanavar',
      color: '#0ea5e9'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AdityaD28',
      href: 'https://github.com/AdityaD28',
      color: '#6b7280'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h2>Have a project in mind? Let's build the future together.</h2>
          <p className="subtitle">
            Ready to transform your ideas into intelligent digital experiences? 
            I'm excited to collaborate on innovative projects that make a real impact.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '40px', overflow: 'visible' }}>
              <h3 style={{ 
                marginBottom: '32px',
                fontSize: '1.5rem',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <MessageSquare size={24} color="#6366f1" />
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                {/* Name Field */}
                <div style={{ position: 'relative', marginTop: '24px', overflow: 'visible' }}>
                  <motion.div
                    animate={{
                      scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                      y: focusedField === 'name' || formData.name ? -28 : 0,
                      x: focusedField === 'name' || formData.name ? -2 : 0,
                      color: focusedField === 'name' ? '#6366f1' : '#94a3b8'
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '18px',
                      pointerEvents: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transformOrigin: 'left center',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: focusedField === 'name' || formData.name ? 'rgba(30, 41, 59, 0.95)' : 'transparent',
                      padding: focusedField === 'name' || formData.name ? '4px 10px' : '0',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <User size={16} />
                    Your Name
                  </motion.div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      width: '100%',
                      padding: '22px 16px 18px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `2px solid ${focusedField === 'name' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email Field */}
                <div style={{ position: 'relative', marginTop: '8px', overflow: 'visible' }}>
                  <motion.div
                    animate={{
                      scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                      y: focusedField === 'email' || formData.email ? -28 : 0,
                      x: focusedField === 'email' || formData.email ? -2 : 0,
                      color: focusedField === 'email' ? '#6366f1' : '#94a3b8'
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '18px',
                      pointerEvents: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transformOrigin: 'left center',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: focusedField === 'email' || formData.email ? 'rgba(30, 41, 59, 0.95)' : 'transparent',
                      padding: focusedField === 'email' || formData.email ? '4px 10px' : '0',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Mail size={16} />
                    Your Email
                  </motion.div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      width: '100%',
                      padding: '22px 16px 18px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `2px solid ${focusedField === 'email' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Message Field */}
                <div style={{ position: 'relative', marginTop: '8px', overflow: 'visible' }}>
                  <motion.div
                    animate={{
                      scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                      y: focusedField === 'message' || formData.message ? -28 : 0,
                      x: focusedField === 'message' || formData.message ? -2 : 0,
                      color: focusedField === 'message' ? '#6366f1' : '#94a3b8'
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '18px',
                      pointerEvents: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transformOrigin: 'left center',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: focusedField === 'message' || formData.message ? 'rgba(30, 41, 59, 0.95)' : 'transparent',
                      padding: focusedField === 'message' || formData.message ? '4px 10px' : '0',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <MessageSquare size={16} />
                    Your Message
                  </motion.div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '22px 16px 18px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `2px solid ${focusedField === 'message' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      resize: 'vertical',
                      minHeight: '120px',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="btn btn-primary btn-glow"
                  style={{
                    padding: '16px 32px',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '8px',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid transparent',
                          borderTop: '2px solid white',
                          borderRadius: '50%'
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Status */}
              <AnimatePresence>
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      marginTop: '20px',
                      padding: '16px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: formStatus.type === 'success' 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'rgba(239, 68, 68, 0.1)',
                      border: formStatus.type === 'success'
                        ? '1px solid rgba(34, 197, 94, 0.3)'
                        : '1px solid rgba(239, 68, 68, 0.3)',
                      color: formStatus.type === 'success' ? '#22c55e' : '#ef4444'
                    }}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                      {formStatus.message}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'grid', gap: '24px' }}
          >
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 style={{
                marginBottom: '24px',
                fontSize: '1.5rem',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Phone size={24} color="#22c55e" />
                Let's Connect
              </h3>
              
              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.6',
                marginBottom: '32px',
                fontSize: '1rem'
              }}>
                I'm always excited to discuss new opportunities, innovative projects, 
                or simply chat about the latest in AI and web development. 
                Feel free to reach out through any of these channels!
              </p>

              <div style={{ display: 'grid', gap: '20px' }}>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px 20px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        textDecoration: 'none',
                        color: '#cbd5e1',
                        transition: 'all 0.3s ease'
                      }}
                      onHoverStart={() => {}}
                      onHoverEnd={() => {}}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${info.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${info.color}40`
                      }}>
                        <IconComponent size={20} color={info.color} />
                      </div>
                      <div>
                        <h4 style={{
                          color: '#f8fafc',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          {info.label}
                        </h4>
                        <p style={{
                          color: '#94a3b8',
                          fontSize: '0.875rem',
                          margin: 0
                        }}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-card"
              style={{
                padding: '32px',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>⚡</div>
              <h4 style={{
                color: '#22c55e',
                marginBottom: '12px',
                fontSize: '1.2rem'
              }}>
                Quick Response Guaranteed
              </h4>
              <p style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                margin: 0
              }}>
                I typically respond to messages within 24 hours. 
                Let's turn your ideas into reality!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            gap: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
