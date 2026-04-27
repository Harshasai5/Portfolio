import { useState } from "react";
import { PORTFOLIO_DATA } from "../data/constants";
import { ProjectCard } from "./ProjectCard";
import { Modal } from "./ui/Modal";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/Button";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            Featured <span className="text-[var(--color-neon-pink)] text-glow">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-green)] rounded-full glow-green" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title}>
        {selectedProject && (
          <div className="text-gray-300">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 object-cover rounded-xl mb-6 border border-white/10" 
            />
            <p className="text-lg leading-relaxed mb-6 whitespace-pre-line">{selectedProject.longDescription}</p>
            
            <div className="mb-8">
              <h4 className="text-white font-bold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="primary" className="w-full">
                  <ExternalLink size={18} /> Live Demo
                </Button>
              </a>
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="secondary" className="w-full">
                  <FaGithub size={18} /> Source Code
                </Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
