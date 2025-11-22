import React from 'react';

const Stats: React.FC = () => (
  <div className="relative">
    <div className="absolute top-0 left-0 right-0 h-1/2 bg-slate-900 z-0"></div>
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-slate-900 z-0 md:bg-slate-900"></div>
    <div className="relative z-20 mx-4 md:mx-8 lg:mx-20 -mt-20">
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-10 md:py-12 rounded-lg shadow-2xl shadow-red-900/50 flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-300">
        <h2 className="text-white text-3xl md:text-4xl font-black italic tracking-tighter mb-8 uppercase text-center px-4 border-b-4 border-white/20 pb-2">
          Master Vijay Kumar
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {[
            { number: "4th", label: "Dan Black Belt" },
            { number: "2x", label: "World Athlete" },
            { number: "NS NIS", label: "Coach" },
            { number: "NATIONAL", label: "Champion" }
          ].map((stat, index) => (
            <div key={index} className="text-white flex flex-col items-center justify-center p-2 group">
              <div className="text-3xl md:text-5xl font-black mb-2 drop-shadow-md group-hover:scale-110 transition-transform">{stat.number}</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
