import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="bg-[#0a0f1a] border-b border-gray-800 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e85d04] rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0a0f1a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93v2.02c5.06-.5 9-4.76 9-9.95s-3.94-9.45-9-9.95zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Short Sprints</h1>
                  <p className="text-xs text-gray-400 font-medium">Marketing That Moves as Fast as You Do</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex items-center">
            <a
              href="https://www.shortsprints.com"
              className="text-gray-300 hover:text-[#e85d04] font-medium transition-colors duration-200"
            >
              Back to shortsprints.com
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;