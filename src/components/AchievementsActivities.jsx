import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Calendar, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/constants';
import { Modal } from './ui/Modal';

export const AchievementsActivities = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Flatten items and extract necessary details
  const items = PORTFOLIO_DATA.activities.flatMap((category) =>
    category.items.map((item) => {
      const eventParts = item.eventDetails.split('|').map(s => s.trim());
      const location = eventParts.length > 1 ? eventParts[0] : null;
      const date = eventParts.length > 1 ? eventParts[1] : eventParts[0];
      
      let type = category.title;
      if (type === "Achievements") type = "Achievement";
      if (type === "Hackathons & Techfests") type = item.title.toLowerCase().includes("hackathon") ? "Hackathon" : "Techfest";
      if (type === "Workshops & Programs") type = "Program";
      if (type === "Course Certifications") type = "Course";
      
      return {
        ...item,
        type: type,
        location: location,
        date: date
      };
    })
  );

  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-neon-blue)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Achievements & Activities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] mx-auto rounded-full" />
        </motion.div>

        {/* 3x3 Grid Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="glass p-6 rounded-xl border border-white/5 hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-pointer h-full min-h-[140px]"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] tracking-wider uppercase border border-[var(--color-neon-blue)]/20 shadow-[0_0_10px_rgba(58,134,255,0.1)]">
                  {item.type}
                </span>
                
                <div 
                  className="text-gray-400 group-hover:text-[var(--color-neon-blue)] transition-colors p-1.5 bg-white/5 rounded-full group-hover:bg-[var(--color-neon-blue)]/20"
                  title="Know More"
                >
                  <Info size={16} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[var(--color-neon-blue)] transition-colors relative z-10 line-clamp-3">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.type}
      >
        {selectedItem && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white pr-8">
              {selectedItem.title}
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <Calendar className="w-5 h-5 text-[var(--color-neon-purple)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-neon-purple)] uppercase tracking-wider mb-2">Event Details</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedItem.location && <span className="block mb-1"><strong>Location:</strong> {selectedItem.location}</span>}
                    <span className="block"><strong>Date:</strong> {selectedItem.date}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <Award className="w-5 h-5 text-[var(--color-neon-blue)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-neon-blue)] uppercase tracking-wider mb-2">Description & Impact</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{selectedItem.projectDetail}</p>
                </div>
              </div>
            </div>

            {selectedItem.proofLink && (
              <div className="pt-6 flex justify-center">
                <a 
                  href={selectedItem.proofLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-[var(--color-neon-blue)] text-white font-semibold hover:bg-[var(--color-neon-blue)]/80 transition-all duration-300 shadow-[0_0_15px_rgba(58,134,255,0.3)]"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Proof / Certificate
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
