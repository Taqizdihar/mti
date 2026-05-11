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
          <div className="lg:col-span-2 glass p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            {aboutMe.bioPhoto && (
              <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden glass p-2">
                <img src={aboutMe.bioPhoto} alt="Hero" className="w-full h-full object-cover rounded-xl" />
              </div>
            )}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Professional Bio
              </h3>
              <p className="text-lg leading-relaxed text-white/80 mb-8">
                {aboutMe.bio}
              </p>
              {aboutMe.cvLink && (
                <a 
                  href={aboutMe.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 rounded-xl hover:bg-white hover:text-[#BB0000] hover:border-white transition-all duration-300 font-bold group"
                >
                  <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="space-y-4">
            {[
              { icon: User, label: "Full Name", value: profile.name },
              { icon: Calendar, label: "Birthday", value: profile.details?.birth },
              { icon: MapPin, label: "Location", value: profile.location }
            ].filter(item => item.value).map((item, index) => (
              <InfoCard key={index} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
        </div>

        {/* Brand Identity / Logo Slider */}
        {aboutMe.logos && aboutMe.logos.length > 0 && (
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
        )}

        {/* Extended Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Briefcase, label: "Position", value: profile.position },
            { icon: Info, label: "Age", value: profile.details?.age },
            { icon: Heart, label: "Marital Status", value: profile.details?.maritalStatus }
          ].filter(item => item.value).map((item, index) => (
            <InfoCard key={index} icon={item.icon} label={item.label} value={item.value} />
          ))}
        </div>

        {profile.details?.motto && (
          <div className="glass p-6 rounded-3xl mb-8">
            <p className="text-center italic text-white/70">"{profile.details.motto}"</p>
          </div>
        )}

        {/* Education Section */}
        {aboutMe.education && aboutMe.education.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-white/70" />
              Education History
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutMe.education.map((edu, index) => (
                <div key={index} className="glass p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex gap-5">
                  {edu.institutionLogo && (
                    <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden glass p-1">
                      <img src={edu.institutionLogo} alt={edu.institution} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-white leading-tight">{edu.degree}</h4>
                        <p className="text-[#FF4D4D] font-medium text-sm mt-1">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] uppercase font-bold glass px-3 py-1 rounded-full text-white/80 whitespace-nowrap ml-3">
                        {edu.years}
                      </span>
                    </div>
                    {edu.grade && (
                      <div className="mb-3">
                        <span className="text-xs font-bold glass px-2 py-1 rounded-md text-white/90">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-sm text-white/70 leading-relaxed mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
