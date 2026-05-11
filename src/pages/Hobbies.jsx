import React from 'react';
import { portfolioData } from '@data';
import { Heart, Camera, Coffee, Music, Mountain, Book } from 'lucide-react';

const Hobbies = () => {
  const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('photo')) return <Camera size={24} />;
    if (n.includes('coffee')) return <Coffee size={24} />;
    if (n.includes('music')) return <Music size={24} />;
    if (n.includes('travel') || n.includes('mountain')) return <Mountain size={24} />;
    if (n.includes('read')) return <Book size={24} />;
    return <Heart size={24} />;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Interests & Hobbies</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.hobbies.map((hobby, index) => (
            <div key={index} className="glass p-8 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                {getIcon(hobby.name)}
              </div>
              <h3 className="text-xl font-bold mb-3">{hobby.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
