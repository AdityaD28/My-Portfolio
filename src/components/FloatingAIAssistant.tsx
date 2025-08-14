import React, { useState } from 'react';
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
      text: "Hi! I'm Aditya's AI assistant. I can answer questions about his skills, projects, experience, and more. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Knowledge base about Aditya from his resume
  const knowledgeBase = {
    skills: {
      core: ['Python', 'JavaScript', 'React.js', 'Machine Learning', 'Deep Learning'],
      ai: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'Computer Vision'],
      frontend: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      backend: ['Node.js', 'API Integration'],
      tools: ['Git', 'Pandas', 'NumPy']
    },
    projects: {
      greenguardian: {
        name: 'GreenGuardian',
        description: 'AI-Powered Plant Disease Detection using React.js and TensorFlow.js',
        tech: ['React.js', 'TensorFlow.js', 'Python', 'Computer Vision'],
        purpose: 'Help farmers identify plant diseases early through image analysis'
      },
      aiportfolio: {
        name: 'AI-Powered Portfolio Website',
        description: 'Interactive portfolio with AI chatbot assistant',
        tech: ['React.js', 'TypeScript', 'AI/ML', 'Framer Motion'],
        purpose: 'Showcase skills through an intelligent, interactive website'
      },
      handgesture: {
        name: 'Real-time Hand Gesture Recognition',
        description: 'Computer vision system for gesture-based control',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
        purpose: 'Enable touchless human-computer interaction'
      }
    },
    experience: {
      skillcraft: {
        title: 'Machine Learning Intern',
        company: 'SKillCraft Technology',
        period: 'June 2024 - August 2024',
        achievements: [
          'Developed predictive models for house pricing and customer segmentation',
          'Engineered real-time hand gesture recognition system',
          'Collaborated on scalable ML solutions'
        ]
      }
    },
    education: {
      university: 'Presidency University',
      degree: 'B.E. Computer Science',
      period: '2022 - 2026',
      specialization: 'AI/ML & Full-Stack Development'
    },
    contact: {
      email: 'adityadasappanavar@gmail.com',
      linkedin: 'linkedin.com/in/adityadasappanavar',
      github: 'github.com/AdityaD28'
    },
    certifications: [
      'Generative AI',
      'TensorFlow Developer',
      'Web Development (Internshala)',
      'Python (GeeksforGeeks)',
      'CSS & JavaScript (HackerRank)'
    ]
  };

  const generateResponse = (userInput: string): ChatResponse => {
    const input = userInput.toLowerCase();

    // Skills-related questions
    if (input.includes('skill') || input.includes('technology') || input.includes('programming')) {
      if (input.includes('front') || input.includes('web')) {
        return {
          response: `Aditya's front-end skills include ${knowledgeBase.skills.frontend.join(', ')}. He specializes in React.js and modern web technologies, creating responsive and interactive user interfaces.`,
          confidence: 0.9
        };
      }
      if (input.includes('ai') || input.includes('ml') || input.includes('machine learning')) {
        return {
          response: `Aditya has strong AI/ML expertise including ${knowledgeBase.skills.ai.join(', ')}. He's experienced in deep learning, computer vision, and building intelligent applications.`,
          confidence: 0.95
        };
      }
      return {
        response: `Aditya's core technical skills include ${knowledgeBase.skills.core.join(', ')}. He combines AI/ML expertise with full-stack development to create intelligent web applications.`,
        confidence: 0.9
      };
    }

    // Project-related questions
    if (input.includes('project') || input.includes('work') || input.includes('built')) {
      if (input.includes('greenguardian') || input.includes('plant') || input.includes('disease')) {
        const project = knowledgeBase.projects.greenguardian;
        return {
          response: `${project.name} is ${project.description}. Built with ${project.tech.join(', ')}, it helps ${project.purpose}.`,
          confidence: 0.95
        };
      }
      if (input.includes('gesture') || input.includes('hand') || input.includes('recognition')) {
        const project = knowledgeBase.projects.handgesture;
        return {
          response: `The ${project.name} project is ${project.description}. Using ${project.tech.join(', ')}, it aims to ${project.purpose}.`,
          confidence: 0.95
        };
      }
      return {
        response: `Aditya has worked on several impressive projects including GreenGuardian (AI plant disease detection), this AI-powered portfolio website, and a real-time hand gesture recognition system. Each project showcases his expertise in combining AI/ML with practical applications.`,
        confidence: 0.9
      };
    }

    // Experience questions
    if (input.includes('experience') || input.includes('work') || input.includes('internship') || input.includes('job')) {
      const exp = knowledgeBase.experience.skillcraft;
      return {
        response: `Aditya worked as a ${exp.title} at ${exp.company} from ${exp.period}. His key achievements include: ${exp.achievements.join(', ')}.`,
        confidence: 0.9
      };
    }

    // Education questions
    if (input.includes('education') || input.includes('university') || input.includes('degree') || input.includes('study')) {
      const edu = knowledgeBase.education;
      return {
        response: `Aditya is pursuing ${edu.degree} at ${edu.university} (${edu.period}), specializing in ${edu.specialization}.`,
        confidence: 0.9
      };
    }

    // Contact questions
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('connect')) {
      const contact = knowledgeBase.contact;
      return {
        response: `You can reach Aditya at: Email: ${contact.email}, LinkedIn: ${contact.linkedin}, or GitHub: ${contact.github}`,
        confidence: 0.95
      };
    }

    // Certification questions
    if (input.includes('certification') || input.includes('certificate') || input.includes('qualified')) {
      return {
        response: `Aditya has earned certifications in: ${knowledgeBase.certifications.join(', ')}. These certifications demonstrate his commitment to continuous learning and expertise in his field.`,
        confidence: 0.9
      };
    }

    // Passion/interests
    if (input.includes('passion') || input.includes('interest') || input.includes('love') || input.includes('enjoy')) {
      return {
        response: `Aditya is passionate about the intersection of AI/ML and web development. He enjoys building intelligent, user-centric applications that solve real-world problems, particularly in areas like computer vision and predictive analytics.`,
        confidence: 0.8
      };
    }

    // Default responses for unclear questions
    return {
      response: `I'd be happy to help! I can tell you about Aditya's skills (AI/ML, full-stack development), projects (GreenGuardian, hand gesture recognition), experience at SKillCraft Technology, education, or how to contact him. What specific area interests you?`,
      confidence: 0.7
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
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateResponse(inputText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.response,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500); // Random delay between 1-2.5 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What are his key front-end skills?",
    "Tell me about the GreenGuardian project",
    "What was his role at SKillCraft Technology?",
    "What is he passionate about?",
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
                overflow: 'visible',
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
                padding: '20px',
                overflowY: 'auto',
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
                      lineHeight: '1.4'
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
