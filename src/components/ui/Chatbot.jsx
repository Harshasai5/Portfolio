import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the portfolio AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Thanks for your message! This is a dummy UI, but feel free to reach out via the contact section.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 glass rounded-2xl border border-[var(--color-neon-pink)]/30 overflow-hidden shadow-[0_0_30px_rgba(255,46,159,0.15)] flex flex-col"
          >
            <div className="bg-[var(--color-dark-card)] p-4 border-b border-white/10 flex justify-between items-center">
              <h4 className="font-bold text-white flex items-center gap-2">
                <MessageSquare size={18} className="text-[var(--color-neon-pink)]" />
                Aura AI
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-[var(--color-neon-pink)] text-white self-end rounded-tr-sm' 
                      : 'bg-white/10 text-gray-200 self-start rounded-tl-sm border border-white/5'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
            
            <div className="p-3 bg-[var(--color-dark-card)] border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-neon-pink)] transition-colors"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-[var(--color-neon-green)] text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send size={16} className="ml-[-2px] mt-[2px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--color-neon-pink)] to-[#d62083] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,46,159,0.4)]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
