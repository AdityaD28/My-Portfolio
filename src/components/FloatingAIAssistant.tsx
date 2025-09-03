import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  confidence: number;
}

const FloatingAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Aditya's AI assistant. I can answer questions about his full-stack development skills, current projects, Tech Lead experience, certifications, and more. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Effect to handle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Knowledge base about Aditya from his updated resume
  const knowledgeBase = {
    skills: {
      core: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3'],
      databases: ['MySQL', 'PostgreSQL'],
      tools: ['Git', 'GitHub', 'VS Code', 'REST APIs', 'Agile/Scrum'],
      competencies: ['Web Application Development', 'API Integration', 'Cloud-Ready Architectures']
    },
    projects: {
      aiportfolio: {
        name: 'AI-Powered Portfolio Website',
        description: 'Personal portfolio platform with AI chatbot integration, allowing recruiters to instantly query project insights',
        tech: ['React.js', 'Tailwind CSS', 'Node.js'],
        achievements: ['Showcased 15+ projects', '2x increase in recruiter engagement', '40% faster load times', '100% mobile responsiveness']
      },
      ecommerce: {
        name: 'E-commerce Website',
        description: 'Full-stack e-commerce solution supporting 500+ SKUs with secure checkout, user authentication, and order history',
        tech: ['React.js', 'Node.js', 'Express.js', 'Database'],
        achievements: ['Handles 100+ daily active users', '20% conversion rate improvement', '40% faster page load times']
      },
      ems: {
        name: 'Employee Management System',
        description: 'Employee management tool handling 1000+ employee records with payroll automation and task assignments',
        tech: ['SQL', 'Web Technologies'],
        achievements: ['60% reduction in administrative overhead', '25% increase in payroll accuracy', 'Role-based access control']
      },
      smartlearning: {
        name: 'Smart Learning Platform',
        description: 'Offline-first PWA with 5+ interactive modules improving access to digital education for 200+ rural students',
        tech: ['React.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'Bluetooth/Wi-Fi Direct'],
        achievements: ['70% reduction in internet dependency', 'Seamless offline access', 'Led 3-member Agile team']
      }
    },
    experience: {
      current: {
        title: 'Project Engineer (Academic Role) | Tech Lead',
        period: 'Jul 2025 – Present',
        achievements: [
          'Architected smart learning platform with 5+ interactive modules for 200+ rural students',
          'Engineered offline-first PWA reducing internet dependency by 70%',
          'Led 3-member Agile team with 80% sprint completion improvement',
          'Optimized backend performance reducing response times by 30%'
        ]
      }
    },
    education: {
      university: 'Presidency University',
      degree: 'Bachelor\'s Degree in Computer Science and Engineering',
      location: 'Bangalore',
      period: 'Nov 2022 - Jul 2026'
    },
    contact: {
      phone: '+91 9902806818',
      email: 'adityadasappanavar@gmail.com',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      twitter: 'Twitter'
    },
    certifications: [
      'Python - GeeksforGeeks',
      'JavaScript - HackerRank',
      'Web Development - Internshala',
      'CSS - HackerRank',
      'Generative AI - GeeksforGeeks'
    ]
  };

  // Enhanced AI response generation with better natural language processing
  const generateResponse = (userInput: string): ChatResponse => {
    const input = userInput.toLowerCase();
    
    // Enhanced keyword matching with synonyms and context
    const skillKeywords = ['skill', 'technology', 'programming', 'tech', 'expertise', 'proficient', 'languages', 'frameworks'];
    const projectKeywords = ['project', 'work', 'built', 'developed', 'created', 'portfolio', 'app', 'application', 'system'];
    const experienceKeywords = ['experience', 'work', 'job', 'role', 'position', 'current', 'career', 'professional'];
    const educationKeywords = ['education', 'university', 'degree', 'study', 'academic', 'college', 'graduation'];
    const contactKeywords = ['contact', 'email', 'reach', 'connect', 'phone', 'call', 'message', 'hire'];
    const certificationKeywords = ['certification', 'certificate', 'qualified', 'certified', 'achievement', 'credential'];

    // Skills-related questions with enhanced matching
    if (skillKeywords.some(keyword => input.includes(keyword))) {
      if (input.includes('database') || input.includes('sql') || input.includes('data')) {
        return {
          response: `Aditya has strong database expertise with ${knowledgeBase.skills.databases.join(' and ')}. He's skilled in SQL queries, data validation, optimization, and has experience handling 1000+ employee records with complex database operations. His database work includes payroll automation and ensuring data accuracy across large-scale systems.`,
          confidence: 0.92
        };
      }
      if (input.includes('tool') || input.includes('platform') || input.includes('development')) {
        return {
          response: `Aditya uses modern development tools including ${knowledgeBase.skills.tools.join(', ')}. He's experienced in Agile/Scrum methodologies, having led a 3-member team with 80% improvement in sprint completion rates. His expertise extends to building cloud-ready architectures and API integration.`,
          confidence: 0.91
        };
      }
      if (input.includes('frontend') || input.includes('front-end') || input.includes('ui') || input.includes('interface')) {
        return {
          response: `Aditya specializes in modern frontend development with React.js, HTML5, CSS3, and has achieved 100% mobile responsiveness in his projects. He's optimized applications for 40% faster load times and focuses on user-centric design. His frontend work has led to 2x increase in recruiter engagement.`,
          confidence: 0.93
        };
      }
      if (input.includes('backend') || input.includes('back-end') || input.includes('server') || input.includes('api')) {
        return {
          response: `Aditya's backend expertise includes Node.js, Express.js, REST APIs, and database integration. He's optimized backend performance to reduce server response times by 30% and lower production bugs by 40%. His backend work supports applications handling 100+ daily active users without downtime.`,
          confidence: 0.93
        };
      }
      return {
        response: `Aditya is a full-stack developer with expertise in ${knowledgeBase.skills.core.join(', ')}. His core competencies include ${knowledgeBase.skills.competencies.join(', ')}. He combines technical skills with leadership abilities, having successfully led development teams and delivered scalable solutions.`,
        confidence: 0.90
      };
    }

    // Project-related questions with enhanced context
    if (projectKeywords.some(keyword => input.includes(keyword))) {
      if (input.includes('portfolio') || input.includes('website') || input.includes('ai') || input.includes('chatbot')) {
        const project = knowledgeBase.projects.aiportfolio;
        return {
          response: `The ${project.name} showcases Aditya's ability to integrate AI technology with web development. ${project.description} The project demonstrates his full-stack capabilities with ${project.tech.join(', ')} and achieved impressive results: ${project.achievements.join(', ')}. This very website you're interacting with is an example of his work!`,
          confidence: 0.96
        };
      }
      if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('shopping') || input.includes('store') || input.includes('marketplace')) {
        const project = knowledgeBase.projects.ecommerce;
        return {
          response: `The ${project.name} demonstrates Aditya's expertise in building scalable commercial applications. ${project.description} This project showcases his ability to handle complex business logic, user authentication, and high-traffic scenarios. Key achievements: ${project.achievements.join(', ')}.`,
          confidence: 0.95
        };
      }
      if (input.includes('employee') || input.includes('management') || input.includes('payroll') || input.includes('hr') || input.includes('enterprise')) {
        const project = knowledgeBase.projects.ems;
        return {
          response: `The ${project.name} showcases Aditya's ability to build enterprise-level solutions. ${project.description} This project highlights his expertise in database design, automation, and security implementation. Results achieved: ${project.achievements.join(', ')}.`,
          confidence: 0.95
        };
      }
      if (input.includes('learning') || input.includes('education') || input.includes('smart') || input.includes('platform') || input.includes('offline')) {
        const project = knowledgeBase.projects.smartlearning;
        return {
          response: `The ${project.name} represents Aditya's most innovative work, addressing real-world challenges in rural education. ${project.description} Built with cutting-edge technologies like ${project.tech.join(', ')}, this project achieved remarkable results: ${project.achievements.join(', ')}. This project demonstrates his ability to lead teams and create socially impactful technology.`,
          confidence: 0.97
        };
      }
      return {
        response: `Aditya has developed several impressive projects that showcase different aspects of his expertise: AI-Powered Portfolio (this website), E-commerce Website, Employee Management System, and Smart Learning Platform. Each project demonstrates his full-stack development skills, problem-solving abilities, and focus on creating user-centric solutions with measurable impact.`,
        confidence: 0.92
      };
    }

    // Experience questions with detailed context
    if (experienceKeywords.some(keyword => input.includes(keyword))) {
      const exp = knowledgeBase.experience.current;
      return {
        response: `Aditya is currently serving as a ${exp.title} (${exp.period}), where he's making significant impact in educational technology. His role involves both technical leadership and hands-on development. Key achievements include: ${exp.achievements.join(' • ')}. This position showcases his ability to combine technical expertise with leadership skills in delivering socially impactful solutions.`,
        confidence: 0.94
      };
    }

    // Education questions
    if (educationKeywords.some(keyword => input.includes(keyword))) {
      const edu = knowledgeBase.education;
      return {
        response: `Aditya is pursuing his ${edu.degree} at ${edu.university}, ${edu.location} (${edu.period}). His academic journey is complemented by practical experience through internships, projects, and his current role as Tech Lead. He combines theoretical knowledge with hands-on application, making him well-prepared for real-world software development challenges.`,
        confidence: 0.91
      };
    }

    // Contact questions with helpful context
    if (contactKeywords.some(keyword => input.includes(keyword))) {
      const contact = knowledgeBase.contact;
      return {
        response: `Ready to connect with Aditya? Here are his contact details: 📞 Phone: ${contact.phone} | 📧 Email: ${contact.email}. You can also find him on LinkedIn, GitHub, check out his Portfolio, or follow him on Twitter. He's always open to discussing new opportunities, collaborations, or tech conversations!`,
        confidence: 0.96
      };
    }

    // Certification questions
    if (certificationKeywords.some(keyword => input.includes(keyword))) {
      return {
        response: `Aditya has earned multiple certifications that validate his expertise: ${knowledgeBase.certifications.join(' • ')}. These certifications span programming languages, web development, and emerging technologies like Generative AI, demonstrating his commitment to staying current with industry trends and continuously expanding his skill set.`,
        confidence: 0.92
      };
    }

    // Summary/overview questions
    if (input.includes('summary') || input.includes('about') || input.includes('overview') || input.includes('who') || input.includes('tell me about')) {
      return {
        response: `Aditya Dasappanavar is a skilled Full-stack Software Developer and Tech Lead focused on building efficient, user-centric applications. He combines strong technical expertise in modern web technologies with proven leadership abilities. Currently leading educational technology initiatives, he has successfully delivered projects that serve 200+ users, optimized systems for 40% better performance, and led teams to 80% improvement in productivity. His approach focuses on creating scalable, high-performance solutions that enhance both usability and business impact.`,
        confidence: 0.96
      };
    }

    // Leadership and team questions
    if (input.includes('lead') || input.includes('team') || input.includes('management') || input.includes('agile') || input.includes('scrum')) {
      return {
        response: `Aditya has proven leadership experience as a Tech Lead, successfully directing a 3-member Agile team. He implemented Scrum practices that improved sprint completion rates by 80% and accelerated feature releases by 25%. His leadership style focuses on collaborative development, continuous improvement, and delivering high-quality results on schedule.`,
        confidence: 0.93
      };
    }

    // Performance and optimization questions
    if (input.includes('performance') || input.includes('optimization') || input.includes('speed') || input.includes('fast')) {
      return {
        response: `Performance optimization is one of Aditya's key strengths. He has achieved: 40% faster page load times, 30% reduction in server response times, 40% decrease in production bugs, and systems that handle 100+ daily active users without downtime. His optimization work has directly contributed to 20% improvement in conversion rates and enhanced user experience.`,
        confidence: 0.94
      };
    }

    // Default enhanced response
    return {
      response: `I'd be happy to help you learn more about Aditya! I can provide detailed information about his technical skills (full-stack development, databases, tools), impressive projects (Smart Learning Platform, AI Portfolio, E-commerce, Employee Management), current Tech Lead experience, educational background, certifications, or contact information. I can also discuss his leadership experience, performance optimization achievements, or any specific aspect of his work. What would you like to explore?`,
      confidence: 0.75
    };
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Enhanced AI thinking time based on message complexity
    const wordCount = currentInput.split(' ').length;
    const baseDelay = 800;
    const complexityDelay = Math.min(wordCount * 100, 1500);
    const randomVariation = Math.random() * 500;
    const totalDelay = baseDelay + complexityDelay + randomVariation;

    setTimeout(() => {
      const aiResponse = generateResponse(currentInput);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.response,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, totalDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What are his core technical skills?",
    "Tell me about the Smart Learning Platform project",
    "What is his current role and experience?",
    "What certifications does he have?",
    "How can I contact him?"
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MessageCircle size={24} />
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflow: 'visible'
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{
                padding: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Bot size={20} color="white" />
                  </div>
                  <div>
                    <h3 style={{ color: '#f8f9fa', margin: 0, fontSize: '18px' }}>
                      AI Assistant
                    </h3>
                    <p style={{ color: '#ced4da', margin: 0, fontSize: '12px' }}>
                      Ask me about Aditya
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div style={{
                flex: 1,
                minHeight: 0,
                padding: '20px',
                overflowY: 'auto',
                overflowX: 'hidden',
                overscrollBehavior: 'contain',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: message.sender === 'ai' 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {message.sender === 'ai' ? (
                        <Bot size={16} color="white" />
                       ) : (
                        <User size={16} color="white" />
                      )}
                    </div>
                    <div style={{
                      background: message.sender === 'ai' 
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      padding: '12px 16px',
                      borderRadius: '16px',
                      maxWidth: '80%',
                      color: '#fff',
                      fontSize: '14px',
                      lineHeight: '1.4',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere'
                    }}>
                      {message.text}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Bot size={16} color="white" />
                    </div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '12px 16px',
                      borderRadius: '16px',
                      display: 'flex',
                      gap: '4px'
                    }}>
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#667eea'
                        }}
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#667eea'
                        }}
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#667eea'
                        }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Suggested Questions */}
                {messages.length === 1 && (
                  <div style={{ marginTop: '20px' }}>
                    <p style={{ 
                      color: '#ced4da', 
                      fontSize: '12px', 
                      marginBottom: '12px',
                      textAlign: 'center'
                    }}>
                      Try asking:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {suggestedQuestions.slice(0, 3).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => setInputText(question)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            padding: '8px 12px',
                            color: '#ced4da',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          }}
                        >
                          "{question}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div style={{
                padding: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '12px'
              }}>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aditya's skills, projects, or experience..."
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    color: '#fff',
                    fontSize: '14px'
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: inputText.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAIAssistant;
