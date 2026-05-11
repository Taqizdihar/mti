import React from 'react';
import { portfolioData } from '@data';
import { User, Calendar, MapPin, Briefcase, Heart, Info } from 'lucide-react';

const About = () => {
  const { profile } = portfolioData;

  const InfoCard = ({ icon: Icon, label, value }) => (
    <div className="glass p-4 rounded-2xl flex items-center gap-4">
      <div className="p-3 bg-white/10 rounded-xl">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />
        
        <div className="glass p-8 rounded-3xl mb-8">
          <p className="text-lg leading-relaxed text-white/90">
            {profile.motto}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard icon={User} label="Full Name" value={profile.name} />
          <InfoCard icon={Calendar} label="Birthday" value={profile.birthday} />
          <InfoCard icon={MapPin} label="Location" value={profile.location} />
          <InfoCard icon={Briefcase} label="Position" value={profile.position} />
          <InfoCard icon={Info} label="Age" value={profile.age} />
          <InfoCard icon={Heart} label="Marital Status" value={profile.maritalStatus} />
        </div>
      </section>
    </div>
  );
};

export default About;
