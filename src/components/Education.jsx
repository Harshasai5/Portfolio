import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/constants";

export const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4 flex items-center gap-4">
            <GraduationCap size={40} className="text-[var(--color-neon-blue)]" />
            <span>Academic <span className="text-[var(--color-neon-blue)] text-glow">Background</span></span>
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-purple)] rounded-full glow-purple" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(58,134,255,0.1)] group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-neon-blue)]/10 rounded-full blur-[40px] group-hover:bg-[var(--color-neon-blue)]/20 transition-colors" />
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{edu.degree}</h3>
              <p className="text-[var(--color-neon-purple)] mb-4 relative z-10">{edu.institution}</p>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-gray-400 border border-white/10">
                  {edu.year}
                </div>
                {edu.cgpa && (
                  <div className="inline-block px-3 py-1 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] rounded-full text-sm font-mono border border-[var(--color-neon-blue)]/30">
                    CGPA: {edu.cgpa}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
