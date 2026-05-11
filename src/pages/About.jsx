import React from 'react';
import { profile, aboutMe } from '@data/aboutMeData';
import { User, Calendar, MapPin, Briefcase, Heart, Info, Download, GraduationCap } from 'lucide-react';

const About = () => {

  const InfoCard = ({ icon: Icon, label, value }) => (
    <div className="glass p-4 rounded-2xl flex items-center gap-4 transition-transform hover:scale-[1.02] duration-300">
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
      {/* Header Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Bio Card */}
          <div className="lg:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Info size={120} />
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              Professional Bio
            </h3>
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              {aboutMe.bio}
            </p>
            <a 
              href={aboutMe.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 rounded-xl hover:bg-white hover:text-[#BB0000] hover:border-white transition-all duration-300 font-bold group"
            >
              <Download size={20} className="group-hover:bounce" />
              Download CV
            </a>
          </div>

          {/* Details Column */}
          <div className="space-y-4">
            <InfoCard icon={User} label="Full Name" value={profile.name} />
            <InfoCard icon={Calendar} label="Birthday" value={profile.details.birth} />
            <InfoCard icon={MapPin} label="Location" value={profile.location} />
          </div>
        </div>

        {/* Brand Identity / Logo Slider */}
        <div className="glass p-6 rounded-3xl mb-8">
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-6">Brand Identity</h3>
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {aboutMe.logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 glass rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={logo} alt={`Brand logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Extended Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <InfoCard icon={Briefcase} label="Position" value={profile.position} />
          <InfoCard icon={Info} label="Age" value={profile.details.age} />
          <InfoCard icon={Heart} label="Marital Status" value={profile.details.maritalStatus} />
        </div>

        <div className="glass p-6 rounded-3xl mb-8">
          <p className="text-center italic text-white/70">"{profile.details.motto}"</p>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <GraduationCap className="text-white/70" />
            Education History
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutMe.education.map((edu, index) => (
              <div key={index} className="glass p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <p className="text-[#FF4D4D] font-medium">{edu.degree}</p>
                  </div>
                  <span className="text-xs glass px-3 py-1 rounded-full text-white/60">
                    {edu.years}
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
