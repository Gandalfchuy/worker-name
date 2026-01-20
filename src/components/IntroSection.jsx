import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="py-16 bg-[#0d1a2a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A little time now saves weeks later
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          This questionnaire lets us align perfectly and avoid building the wrong thing. 
          We'll understand your vision, target audience, and specific requirements to deliver 
          exactly what your business needs.
        </motion.p>
        
        <motion.blockquote 
          className="text-2xl font-medium text-white italic border-l-4 border-[#e85d04] pl-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          "Let's spend a little time now to save us wasting time and money in the future building the wrong thing."
        </motion.blockquote>
      </div>
    </section>
  );
};

export default IntroSection;