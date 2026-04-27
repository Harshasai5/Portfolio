import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/Button";

export const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-[var(--color-neon-pink)]/50 transition-colors duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-[var(--color-neon-pink)] hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-[var(--color-neon-green)] hover:text-black transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 relative z-20 bg-gradient-to-t from-[var(--color-dark-card)] to-transparent -mt-20 pt-24">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--color-neon-pink)] transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <Button variant="ghost" className="w-full justify-between px-0 border-t border-white/10 pt-4 rounded-none" onClick={() => onClick(project)}>
          <span>Know More</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};
