import React from 'react';
import { portfolioData } from '@data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-white/20 pb-8 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white glass shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="glass p-6 rounded-3xl">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-white/60 font-medium flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <span className="glass px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>
                <p className="text-white/80 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
