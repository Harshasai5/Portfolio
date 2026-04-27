import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass p-6 md:p-8 rounded-2xl w-full max-w-2xl border border-[var(--color-neon-pink)]/30 pointer-events-auto relative overflow-hidden shadow-[0_0_40px_rgba(255,46,159,0.15)] flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-6 shrink-0 relative z-20">
                {title && <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 pr-4">{title}</h3>}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white shrink-0 bg-black/20"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="relative z-10 overflow-y-auto pr-2 custom-scrollbar flex-1">{children}</div>
              
              {/* Decorative gradient blur */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-neon-pink)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-neon-green)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
