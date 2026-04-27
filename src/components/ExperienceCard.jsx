import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "./ui/Button";

export const ExperienceCard = ({ exp, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="glass p-8 rounded-3xl border border-white/5 hover:border-[var(--color-neon-pink)]/30 transition-colors relative overflow-hidden group h-full flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-pink)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
          <p className="text-[var(--color-neon-pink)] font-mono text-sm">{exp.company}</p>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 w-fit">
            {exp.duration}
          </span>
        </div>
        
        <p className="text-gray-400 mb-6 flex-1">{exp.description}</p>
        
        <div className="mt-auto">
          <Button variant="ghost" className="px-0 hover:text-[var(--color-neon-pink)]" onClick={() => onClick(exp)}>
            <span>View Details</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
