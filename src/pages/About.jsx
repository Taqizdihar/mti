import React from 'react';
import { profile, aboutMe } from '@data/aboutMeData';
import { User, Calendar, MapPin, Briefcase, Heart, Info, Download, GraduationCap, Brain, Globe } from 'lucide-react';

const About = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = React.useState(0);
  const [isLogoFading, setIsLogoFading] = React.useState(false);

  React.useEffect(() => {
    if (!aboutMe.personalLogos || aboutMe.personalLogos.length <= 1) return;
    const timer = setInterval(() => {
      handleNextLogo();
    }, 5000);
    return () => clearInterval(timer);
  }, [aboutMe.personalLogos, currentLogoIndex]);

  const handleNextLogo = () => {
    setIsLogoFading(true);
    setTimeout(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % (aboutMe.personalLogos?.length || 1));
      setIsLogoFading(false);
    }, 300);
  };

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
          <div className="lg:col-span-2 glass p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-48 md:w-56 flex flex-col gap-4">
              {aboutMe.bioPhoto && (
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden glass p-2 mx-auto md:mx-0">
                  <img src={aboutMe.bioPhoto} alt="Hero" className="w-full h-full object-cover rounded-xl" />
                </div>
              )}
              {/* Dynamic Logo Section */}
              {aboutMe.personalLogos && aboutMe.personalLogos.length > 0 && (
                <div 
                  className="w-full aspect-[1600/1004] glass rounded-2xl p-4 flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02] duration-300" 
                  onClick={handleNextLogo}
                >
                  <img 
                    src={aboutMe.personalLogos[currentLogoIndex]} 
                    alt="Brand logo" 
                    className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLogoFading ? 'opacity-0' : 'opacity-100'}`} 
                  />
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
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
              { icon: Briefcase, label: "Position", value: profile.position },
              { icon: MapPin, label: "Location", value: profile.location }
            ].filter(item => item.value).map((item, index) => (
              <InfoCard key={index} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
        </div>



        {/* Extended Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Calendar, label: "Birthday", value: profile.details?.birth },
            { icon: Info, label: "Age", value: profile.details?.age },
            { icon: Heart, label: "Marital Status", value: profile.details?.maritalStatus },
            { icon: Brain, label: "MBTI Type", value: profile.details?.mbtiType },
            { icon: Globe, label: "Languages", value: profile.details?.languages }
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
