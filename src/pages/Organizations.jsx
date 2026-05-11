import React from 'react';
import { organizations } from '@data/organizationsData';
import { Users, ShieldCheck } from 'lucide-react';

const Organizations = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Organizations</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <div key={index} className="glass p-8 rounded-3xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{org.name}</h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm mt-1">
                    <ShieldCheck size={14} /> {org.period}
                  </div>
                </div>
              </div>
              <div className="glass bg-white/5 px-6 py-3 rounded-2xl inline-block">
                <span className="text-sm font-bold text-white/90 uppercase tracking-widest">{org.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organizations;
