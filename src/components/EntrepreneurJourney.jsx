import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/constants";

export const EntrepreneurJourney = () => {
  return (
    <section id="journey" className="py-16 lg:py-32 relative bg-[var(--color-dark-card)]/30">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            Entrepreneur <span className="text-[var(--color-neon-blue)] text-glow">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-purple)] rounded-full glow-purple mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-neon-blue)] via-[var(--color-neon-purple)] to-[var(--color-neon-blue)] md:-translate-x-1/2 rounded-full opacity-30" />

          <div className="flex flex-col gap-12">
            {PORTFOLIO_DATA.journey.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: idx * 0.2 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-purple)] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(123,44,191,0.8)]"
                  />

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pl-8' : 'md:pr-8 text-left md:text-right'}`}
                  >
                    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-[var(--color-neon-purple)]/30 transition-colors">
                      <div className={`flex items-center gap-3 mb-2 ${!isEven ? 'md:justify-end' : ''}`}>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)]">
                          {step.stage}
                        </span>
                        <span className="text-gray-500 font-mono text-sm">{step.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
