import React, { useState } from 'react';
import { Play, ChevronRight, X, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center bg-no-repeat opacity-40 scale-105 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1 bg-red-600/20 border border-red-500/50 rounded-full backdrop-blur-sm">
          <span className="text-red-400 font-bold tracking-[0.2em] text-xs uppercase">Sweat Now, Shine Later</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[0.9] uppercase">
          Taekwondo & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Adult Fitness Coaching</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Systematic and scientific martial arts training with Master Vijay Kumar. 
          Improve your overall body performance with specific sports training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 group">
            Start Training <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            <Play size={20} fill="currentColor" /> Watch Video
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsVideoOpen(false)} 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white hover:bg-red-600 rounded-full p-2 transition-all z-50"
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl shadow-red-900/20 ring-1 ring-white/10 group"
            onClick={(e) => e.stopPropagation()}
          >
            <a 
              href="https://www.youtube.com/watch?v=P1SX7W-VUpI&t=111s"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <img 
                src="https://img.youtube.com/vi/P1SX7W-VUpI/maxresdefault.jpg" 
                alt="Master Vijay Kumar Training" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-xl shadow-black/50 transform group-hover:scale-110 transition-transform duration-300">
                  <Play size={40} fill="currentColor" className="text-white ml-2" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-xl flex items-center justify-center gap-2">
                  Watch on YouTube <ExternalLink size={18} />
                </p>
              </div>
            </a>
          </div>
          
          {/* Click backdrop to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsVideoOpen(false)}></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
