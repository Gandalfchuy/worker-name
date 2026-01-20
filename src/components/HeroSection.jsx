import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ onStartQuestionnaire }) => {
  return (
    <section className="bg-gradient-to-b from-[#0a0f1a] to-[#0d1a2a] text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Start Your Web Project Right —{' '}
          <span className="text-[#e85d04]">Fill Out Our Quick Questionnaire</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Help us understand your goals, audience, and vision in 5–10 minutes. 
          This ensures we build exactly what you need — with a precise plan and quote.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#e85d04] rounded-full"></div>
            <span className="text-gray-300">Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#e85d04] rounded-full"></div>
            <span className="text-gray-300">No obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#e85d04] rounded-full"></div>
            <span className="text-gray-300">Takes ~10 minutes</span>
          </div>
        </motion.div>
        
        <motion.button
          onClick={onStartQuestionnaire}
          className="bg-[#e85d04] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ff6b1a] transform hover:scale-105 transition-all duration-200 shadow-lg shadow-[#e85d04]/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Questionnaire
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;