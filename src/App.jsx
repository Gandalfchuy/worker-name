import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import QuestionnaireForm from './components/QuestionnaireForm';
import Footer from './components/Footer';
import ThankYouModal from './components/ThankYouModal';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Header />
      <HeroSection onStartQuestionnaire={scrollToForm} />
      <IntroSection />
      <div ref={formRef}>
        <QuestionnaireForm onSubmit={handleFormSubmit} />
      </div>
      <Footer />
      <ThankYouModal 
        isOpen={showThankYou} 
        onClose={() => setShowThankYou(false)} 
      />
    </div>
  );
}

export default App;