import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  User, Briefcase, Code, Award, Target, Users, Heart, GraduationCap,
  Globe, Github, Linkedin, Twitter, Instagram, Menu, X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
      ${isActive ? 'glass bg-white/20 text-white shadow-lg' : 'text-white/70 hover:bg-white/10 hover:text-white'}
    `}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { to: "/", icon: User, label: "About Me" },
    { to: "/products", icon: Target, label: "Products" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/projects", icon: Code, label: "Projects" },
    { to: "/certifications", icon: GraduationCap, label: "Certifications" },
    { to: "/achievements", icon: Award, label: "Achievements" },
    { to: "/organizations", icon: Users, label: "Organizations" },
    { to: "/hobbies", icon: Heart, label: "Hobbies" },
  ];

  const SocialIcon = ({ name }) => {
    switch(name) {
      case 'Github': return <Github size={18} />;
      case 'Linkedin': return <Linkedin size={18} />;
      case 'Twitter': return <Twitter size={18} />;
      case 'Instagram': return <Instagram size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 glass m-4 rounded-3xl overflow-hidden">
        <div className="p-8 text-center border-b border-white/10">
          <div className="w-32 h-32 mx-auto rounded-full glass p-1 mb-4 overflow-hidden">
            <img 
              src="https://via.placeholder.com/150" 
              alt={portfolioData.profile.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-xl font-bold">{portfolioData.profile.name}</h1>
          <p className="text-sm text-white/60 mt-1">{portfolioData.profile.tagline}</p>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto scrollbar-hide">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full glass py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
            🌐 English (Placeholder)
          </button>
        </div>
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
            {portfolioData.socials.map((social) => (
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
            {portfolioData.profile.name}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs glass px-3 py-1 rounded-full border-white/10">
              {portfolioData.profile.location}
            </span>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          <div className="max-w-5xl mx-auto pb-8">
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
