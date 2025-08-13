import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TimelineNew from './components/TimelineNew';
import SkillConstellation from './components/SkillConstellation';
import ProjectsNew from './components/ProjectsNew';
import CertificationsNew from './components/CertificationsNew';
import ContactNew from './components/ContactNew';
import Footer from './components/FooterFixed';
import FloatingAIAssistant from './components/FloatingAIAssistant';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <FloatingAIAssistant />
      <Hero />
      <About />
      <TimelineNew />
      <SkillConstellation />
      <ProjectsNew />        <CertificationsNew />
        <ContactNew />
        <Footer />
      </div>
  );
}

export default App;
