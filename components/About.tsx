import React from 'react';
import { Award, Trophy, Scale, Medal } from 'lucide-react';

const About: React.FC = () => (
  <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Column */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-sm overflow-hidden border-2 border-slate-800 shadow-2xl shadow-red-900/20 group">
            <img 
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80" 
              alt="Master Vijay Kumar" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 border-l-4 border-red-600 pl-4">
               <div className="text-white font-bold text-xl tracking-wide">Master Vijay Kumar</div>
               <div className="text-red-500 text-sm font-bold uppercase tracking-widest">Head Coach & Founder</div>
            </div>
          </div>
          {/* Decorative box behind image */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-red-600/30 rounded-sm -z-10"></div>
        </div>

        {/* Content Column */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1.5 h-16 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              MEET THE <br/><span className="text-red-600">MASTER</span>
            </h2>
          </div>

          <h3 className="text-2xl font-black text-yellow-400 mb-6 tracking-tight uppercase">
            Master Vijay Kumar
          </h3>
          
          <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light border-l-2 border-slate-800 pl-6">
            With a legacy of discipline and excellence, Master Vijay Kumar 
            brings world-class expertise to every training session. His dedication to 
            the art of Taekwondo has forged champions and transformed lives.
          </p>
          
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-4 bg-slate-900/40 rounded-lg border border-slate-800/50 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all group">
              <Award className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform drop-shadow-md" size={32} />
              <div>
                <span className="font-bold text-white text-lg block tracking-tight">5th Dan Black Belt</span>
                <span className="text-gray-400 text-sm font-medium">International Certification</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 bg-slate-900/40 rounded-lg border border-slate-800/50 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all group">
              <Trophy className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform drop-shadow-md" size={32} />
              <div>
                <span className="font-bold text-white text-lg block tracking-tight uppercase">Two Times WORLD CHAMPIONSHIP (Athlete)</span>
                <span className="text-gray-400 text-sm font-medium">2018 & 2022</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 bg-slate-900/40 rounded-lg border border-slate-800/50 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all group">
              <Scale className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform drop-shadow-md" size={32} />
              <div>
                <span className="font-bold text-white text-lg block tracking-tight">NATIONAL CHAMPION</span>
                <span className="text-gray-400 text-sm font-medium">Poomsae</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 bg-slate-900/40 rounded-lg border border-slate-800/50 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all group">
              <Medal className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform drop-shadow-md" size={32} />
              <div>
                <span className="font-bold text-white text-lg block tracking-tight">National Medalist</span>
                <span className="text-gray-400 text-sm font-medium">& Certified Coach</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-colors rounded-sm font-bold uppercase tracking-wider text-sm">
              Book a Session with Master
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
