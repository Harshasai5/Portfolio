import { useState } from "react";
import { PORTFOLIO_DATA } from "../data/constants";
import { ExperienceCard } from "./ExperienceCard";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { ExternalLink } from "lucide-react";

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-16 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            <span className="text-[var(--color-neon-blue)] text-glow mr-4">Professional</span> Experience
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-purple)] rounded-full glow-purple" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} onClick={setSelectedExp} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedExp} onClose={() => setSelectedExp(null)} title={`${selectedExp?.role} @ ${selectedExp?.company}`}>
        {selectedExp && (
          <div className="text-gray-300">
            <div className="mb-6 flex items-center gap-4 flex-wrap">
              <span className="px-3 py-1 bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)]/50 rounded-full text-sm font-mono">
                {selectedExp.duration}
              </span>
              {selectedExp.certificateLink && (
                <a href={selectedExp.certificateLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="px-3 py-1.5 text-sm border border-[var(--color-neon-purple)]/50 text-[var(--color-neon-purple)] hover:bg-[var(--color-neon-purple)]/10 h-auto">
                    <ExternalLink size={14} className="mr-2 inline" /> Verify Certificate
                  </Button>
                </a>
              )}
            </div>
            <p className="text-lg leading-relaxed mb-8">{selectedExp.description}</p>
            
            <div>
              <h4 className="text-white font-bold mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {selectedExp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--color-neon-purple)] mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
