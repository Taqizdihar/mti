import React from 'react';
import { portfolioData } from '@data';
import { GraduationCap, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Certifications</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="glass p-6 rounded-3xl flex items-start gap-5">
              <div className="p-4 bg-white/10 rounded-2xl shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 leading-tight">{cert.name}</h3>
                <p className="text-white/60 text-sm mb-2">{cert.issuer}</p>
                <span className="text-[10px] glass px-3 py-1 rounded-full uppercase tracking-tighter font-bold">
                  Issued: {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
