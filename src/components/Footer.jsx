import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#e85d04] rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0a0f1a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93v2.02c5.06-.5 9-4.76 9-9.95s-3.94-9.45-9-9.95zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Short Sprints</h3>
            </div>
            <p className="text-gray-400">Marketing That Moves as Fast as You Do</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: hello@shortsprints.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Web: www.shortsprints.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Privacy & Security</h4>
            <p className="text-gray-400 text-sm">
              Your information is kept strictly confidential and will only be used 
              to create your custom web design proposal.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Short Sprints. All rights reserved. | Powered by Short Sprints</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;