import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThankYouModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="bg-[#0d1a2a] border border-gray-800 rounded-2xl p-8 max-w-md w-full relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-[#e85d04] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Thank You!
            </h3>
            
            <p className="text-gray-300 mb-6">
              We'll review your questionnaire and get back to you within 48 hours with tailored next steps and a custom proposal.
            </p>
            
            <button
              onClick={onClose}
              className="bg-[#e85d04] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff6b1a] transition-colors duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;