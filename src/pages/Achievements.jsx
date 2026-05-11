import React from 'react';
import { achievements } from '@data/achievementsData';
import { Award, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Achievements</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute right-[-20px] top-[-20px] text-white/5 rotate-12 group-hover:scale-110 transition-transform">
                <Award size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                </div>
                <p className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">{achievement.organization}</p>
                <p className="text-white/80 leading-relaxed max-w-2xl">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
