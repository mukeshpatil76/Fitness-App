import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled, toggleMenu, isMenuOpen }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
        <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center transform -skew-x-12 shadow-lg shadow-red-600/20">
          <span className="text-white font-bold text-xl skew-x-12">T</span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-white italic">TKD <span className="text-red-600">CHAMPIONS</span></span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Programs', 'About', 'Gallery', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-bold text-gray-300 hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-red-600/30">
          Free Trial
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white hover:text-red-500 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 py-4 px-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5 duration-200">
        {['Home', 'Programs', 'About', 'Gallery', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={toggleMenu}
            className="text-base font-semibold text-gray-300 hover:text-red-500 py-3 border-b border-slate-800 uppercase tracking-wider"
          >
            {item}
          </a>
        ))}
        <button className="w-full bg-red-600 text-white py-4 rounded font-bold uppercase mt-2 shadow-lg shadow-red-600/20">
          Book Free Trial
        </button>
      </div>
    )}
  </nav>
);

export default Navigation;