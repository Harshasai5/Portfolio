import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/constants";

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16 lg:py-32 relative bg-[var(--color-dark-card)]/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            Technical <span className="text-[var(--color-neon-purple)] text-glow">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-blue)] rounded-full glow-blue mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_DATA.skills.categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-[var(--color-neon-purple)]/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-purple)] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl text-[var(--color-neon-purple)]">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => {
                  let levelColor = "text-gray-400";
                  let dotColor = "bg-gray-400";
                  let borderColor = "hover:border-gray-400/50";
                  
                  if (skill.level === "Expert") {
                    levelColor = "text-[var(--color-neon-purple)]";
                    dotColor = "bg-[var(--color-neon-purple)] glow-purple";
                    borderColor = "hover:border-[var(--color-neon-purple)]/50";
                  } else if (skill.level === "Intermediate") {
                    levelColor = "text-[var(--color-neon-blue)]";
                    dotColor = "bg-[var(--color-neon-blue)] glow-blue";
                    borderColor = "hover:border-[var(--color-neon-blue)]/50";
                  }

                  return (
                    <motion.div 
                      key={i} 
                      variants={itemVariants} 
                      className={`relative group px-4 py-2 rounded-xl bg-white/5 border border-white/10 ${borderColor} transition-colors flex flex-col`}
                    >
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                      {skill.level && (
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                          <span className={`text-[10px] uppercase tracking-wider font-mono ${levelColor} opacity-90`}>
                            {skill.level}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
