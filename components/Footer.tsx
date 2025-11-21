import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center transform -skew-x-12">
          <span className="text-white font-bold text-lg skew-x-12">T</span>
        </div>
        <span className="text-xl font-bold tracking-tighter italic">TKD <span className="text-red-600">CHAMPIONS</span></span>
      </div>
      <div className="text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Taekwondo Champions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;