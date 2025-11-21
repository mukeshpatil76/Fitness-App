import React from 'react';
import { Youtube, ArrowRight, Instagram } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Kids Taekwondo",
    category: "Discipline & Focus"
  },
  {
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Strength Training",
    category: "Men's Fitness"
  },
  {
    url: "https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Expert Techniques",
    category: "Martial Arts"
  },
  {
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cardio & Conditioning",
    category: "Women's Fitness"
  }
];

const VideoGallery: React.FC = () => (
  <section id="gallery" className="py-24 bg-slate-950 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm">Training Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">TRAINING IN ACTION</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
          From young champions mastering their kicks to adults achieving their peak fitness.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-black/50">
            <img 
              src={image.url} 
              alt={image.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1 block">{image.category}</span>
              <h4 className="text-white font-bold text-xl">{image.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube CTA */}
      <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">WATCH US ON YOUTUBE</h3>
            <p className="text-gray-400 max-w-xl">
              Catch all our latest training sessions, demonstrations, and fitness tips on our official channel.
            </p>
          </div>
          
          <a 
            href="https://www.youtube.com/@fitindiavijay2180" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/20"
          >
            <Youtube size={24} />
            <span>Visit Channel</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default VideoGallery;