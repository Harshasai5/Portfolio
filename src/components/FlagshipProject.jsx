import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_DATA } from "../data/constants";
import { Button } from "./ui/Button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Modal } from "./ui/Modal";

export const FlagshipProject = () => {
  const project = PORTFOLIO_DATA.flagshipProject;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="flagship" className="py-16 lg:py-32 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-pink)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-roboto mb-4"
          >
            Flagship <span className="text-[var(--color-neon-pink)] text-glow">Project</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            className="h-1 bg-[var(--color-neon-green)] rounded-full glow-green" 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-2 rounded-3xl border border-white/10 group relative"
        >
          <div className="flex flex-col lg:flex-row gap-0 bg-[#0a0a0a]/50 rounded-[1.25rem] overflow-hidden">
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 lg:hidden" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 border-[var(--color-neon-pink)]/20 border-r lg:border-r-0 lg:border-b z-20 pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-green)] rounded-full blur-[80px] opacity-10 pointer-events-none" />
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-lg md:text-xl text-[var(--color-neon-pink)] mb-8 font-mono">
                {project.description}
              </p>

              <div className="mb-10">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 shadow-[0_0_10px_rgba(255,255,255,0.02)] backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-auto">
                <Button 
                  variant="ghost" 
                  className="w-full sm:flex-1 py-4 text-lg border border-white/10 hover:border-[var(--color-neon-pink)]/50 bg-white/5" 
                  onClick={() => setIsModalOpen(true)}
                >
                  Know More
                </Button>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                  <Button variant="primary" className="w-full py-4 text-lg shadow-[0_0_20px_var(--color-neon-pink)]/30 hover:shadow-[0_0_30px_var(--color-neon-pink)]/50">
                    <ExternalLink size={20} className="mr-2 inline" /> Live Demo
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                  <Button variant="secondary" className="w-full py-4 text-lg">
                    <FaGithub size={20} className="mr-2 inline" /> Source Code
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={project.title}>
        <div className="text-gray-300">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-xl mb-6 border border-white/10" 
          />
          <p className="text-lg leading-relaxed mb-6 whitespace-pre-line">{project.longDescription}</p>
          
          <div className="mb-8">
            <h4 className="text-white font-bold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
