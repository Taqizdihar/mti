import React from 'react';
import { portfolioData } from '@data';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="glass rounded-3xl overflow-hidden group">
              <div className="h-48 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Code size={64} className="text-white/10" />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] glass px-2 py-1 rounded-md uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">{project.title}</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-2">{project.description}</p>
                <a 
                  href={project.link}
                  className="flex items-center justify-center gap-2 w-full glass py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
