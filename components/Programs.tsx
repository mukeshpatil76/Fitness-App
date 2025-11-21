import React from 'react';
import { Trophy, Dumbbell, CheckCircle, ChevronRight } from 'lucide-react';

const Programs: React.FC = () => (
  <section id="programs" className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm">Our Programs</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">Systematic & Scientific</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Taekwondo Card */}
        <div className="group relative h-auto min-h-[650px] rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-red-500/50 transition-colors">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596866561685-75b2d15e3911?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent opacity-95 group-hover:opacity-90 transition-opacity"></div>
          
          <div className="absolute inset-0 p-8 flex flex-col">
            <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-lg mb-6 shadow-lg shadow-red-600/20 shrink-0">
              <Trophy className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Taekwondo and Fitness Training</h3>
            <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
            
            {/* Class Details */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
              <div className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                <span className="font-bold text-red-500 mr-1">AGE:</span> Above 4 Years
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              An official Olympic sport that teaches more than fighting skills. 
            </p>
            
            <div className="grid grid-cols-1 gap-y-2 mb-8 grow">
              <div>
                <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-2">Physical Fitness</h4>
                <ul className="space-y-1">
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Strength & Endurance</li>
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Flexibility & Balance</li>
                </ul>
              </div>
              <div className="mt-2">
                <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-2">Mental Well-Being</h4>
                <ul className="space-y-1">
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Focus & Concentration</li>
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Self-Discipline & Confidence</li>
                </ul>
              </div>
               <div className="mt-2">
                <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-2">Development</h4>
                <ul className="space-y-1">
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Self-Defense Skills</li>
                   <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={14} className="text-red-600 mr-2" /> Respect & Courtesy</li>
                </ul>
              </div>
            </div>

            <button className="text-white font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all hover:text-red-500 mt-auto">
              Enroll Now <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Fitness Card */}
        <div className="group relative h-auto min-h-[650px] rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-orange-500/50 transition-colors">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517963879466-e925c58cd561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent opacity-95 group-hover:opacity-90 transition-opacity"></div>
          
          <div className="absolute inset-0 p-8 flex flex-col">
             <div className="bg-orange-500 w-14 h-14 flex items-center justify-center rounded-lg mb-6 shadow-lg shadow-orange-500/20 shrink-0">
                <Dumbbell className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Specific Sports Training</h3>
              <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full"></div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "Be Strong, Train Hard." Improve your overall body performance with specific sports training designed for results.
              </p>
              
              <div className="grid grid-cols-1 gap-y-2 mb-8 grow">
                <div>
                  <h4 className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">Key Benefits</h4>
                  <ul className="space-y-3">
                    {['Fat Loss & Toning', 'High Intensity Conditioning', 'Stress Relief', 'Cardiovascular Health'].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300 font-medium">
                        <CheckCircle size={18} className="text-orange-500 mr-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            <button className="text-white font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all hover:text-orange-500 mt-auto">
              Start Fitness Journey <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;