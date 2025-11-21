import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => (
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
        Systematic and scientific martial arts training with Master G.R. Vijay Shanth Kumar. 
        Improve your overall body performance with specific sports training.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 group">
          Start Training <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
          <Play size={20} fill="currentColor" /> Watch Video
        </button>
      </div>
    </div>
  </section>
);

export default Hero;