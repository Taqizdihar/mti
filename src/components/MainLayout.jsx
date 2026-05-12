import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  User, Briefcase, Code, Award, Target, Users, Heart, GraduationCap,
  Globe, Github, Linkedin, Twitter, Instagram, Youtube, Music2, Facebook, Menu, X, Sun, Moon
} from 'lucide-react';
import { profile, socials } from '@data/aboutMeData';

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 text-sm
      ${isActive ? 'glass bg-white/20 text-white shadow-lg' : 'text-white/70 hover:bg-white/10 hover:text-white'}
    `}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('EN');
  const [theme, setTheme] = React.useState('dark');
  const [rotation, setRotation] = React.useState(0);
  const [frontIndex, setFrontIndex] = React.useState(0);
  const [backIndex, setBackIndex] = React.useState(1);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const location = useLocation();

  const navLinks = React.useMemo(() => [
    { to: "/", icon: User, label: "About Me" },
    { to: "/products", icon: Target, label: "Products" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/projects", icon: Code, label: "Projects" },
    { to: "/certifications", icon: GraduationCap, label: "Certifications" },
    { to: "/achievements", icon: Award, label: "Achievements" },
    { to: "/organizations", icon: Users, label: "Organizations" },
    { to: "/hobbies", icon: Heart, label: "Hobbies" },
  ], []);

  React.useEffect(() => {
    const currentNav = navLinks.find(link => link.to === location.pathname);
    if (currentNav) {
      document.title = `MTI - ${currentNav.label}`;
    } else {
      document.title = 'MTI - Muhammad Taqi Izdihar';
    }
  }, [location.pathname, navLinks]);


  const SocialIcon = ({ name }) => {
    const icons = {
      Github,
      Linkedin,
      Twitter,
      Instagram,
      Youtube,
      Music2,
      Facebook,
      Globe
    };
    const Icon = icons[name] || Globe;
    return <Icon size={18} />;
  };

  const handleProfileClick = () => {
    const imagesCount = profile.profileImages?.length || 1;
    setRotation(prev => prev + 180);
    setIsFlipped(!isFlipped);
    
    setTimeout(() => {
      if (!isFlipped) {
        setFrontIndex((backIndex + 1) % imagesCount);
      } else {
        setBackIndex((frontIndex + 1) % imagesCount);
      }
    }, 500); // Wait for transition to complete
  };

  return (
    <div className="flex h-screen overflow-hidden text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 glass m-4 rounded-3xl overflow-hidden shrink-0">
        <div className="p-6 text-center border-b border-white/10">
          <div 
            className="w-28 h-28 mx-auto cursor-pointer animate-pulse-idle mb-4 rounded-full"
            onClick={handleProfileClick}
            style={{ perspective: '1000px' }}
          >
            <div 
              className="w-full h-full relative transition-transform duration-500 ease-in-out"
              style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)` }}
            >
              {/* Front Face */}
              <div className="absolute inset-0 w-full h-full rounded-full glass p-1 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <img 
                  src={profile.profileImages ? profile.profileImages[frontIndex] : profile.profileImage} 
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Back Face */}
              <div className="absolute inset-0 w-full h-full rounded-full glass p-1 overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <img 
                  src={profile.profileImages ? profile.profileImages[backIndex] : profile.profileImage} 
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <h1 className="text-lg font-bold leading-tight">{profile.name}</h1>
          <p className="text-xs text-white/60 mt-1">{profile.tagline}</p>
        </div>

        <nav className="flex-1 p-3 flex flex-col justify-start pb-8 gap-1 overflow-y-auto scrollbar-hide">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <header className="h-16 glass m-4 mb-0 rounded-2xl flex items-center justify-between px-6 shrink-0">
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {socials.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <SocialIcon name={social.icon} />
                <span>{social.platform}</span>
              </a>
            ))}
          </div>

          <div className="flex lg:hidden font-bold">
            {profile.name}
          </div>

          <div className="flex items-center gap-4">
            <NavLink 
              to="/media-kit"
              className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-xl gradient-border-anim transition-transform hover:scale-105 shadow-lg"
            >
              Media Kit
            </NavLink>
            <div className="flex items-center gap-2 glass px-2 py-1 rounded-xl">
              <button 
                onClick={() => setLanguage(prev => prev === 'EN' ? 'IN' : 'EN')}
                className="w-8 h-8 flex items-center justify-center text-xs font-bold hover:bg-white/10 rounded-lg transition-colors"
              >
                {language}
              </button>
              <div className="w-px h-4 bg-white/20" />
              <button 
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
              >
                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto px-4 pt-12 pb-8 scrollbar-hide">
          <div className="pb-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="relative w-72 bg-[#BB0000] h-full flex flex-col">
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <span className="font-bold">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                  <NavItem {...link} />
                </div>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
