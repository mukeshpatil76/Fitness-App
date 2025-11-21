import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-white text-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Get Started</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">JOIN THE CHAMPIONS</h3>
        <p className="text-gray-600 mb-12 text-lg">
          Ready to transform your life? Visit us for a free trial class. We welcome all ages above 4 years.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="bg-red-100 p-4 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
              <MapPin className="text-red-600 group-hover:text-white transition-colors" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Our Locations</h4>
              <p className="text-gray-600 leading-relaxed">Across Bangalore and Mysore</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="bg-red-100 p-4 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
              <Phone className="text-red-600 group-hover:text-white transition-colors" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Call Us</h4>
              <p className="text-gray-600 leading-relaxed">+91 98444 83104</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="bg-red-100 p-4 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
              <Mail className="text-red-600 group-hover:text-white transition-colors" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Email</h4>
              <p className="text-gray-600 leading-relaxed">cchitti97@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;