import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Button = ({ children, className, variant = "primary", ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-[var(--color-neon-pink)] text-white hover:bg-[#d62083] glow-pink",
    secondary: "bg-transparent text-white border border-[var(--color-neon-green)] hover:bg-[rgba(0,255,159,0.1)] glow-green",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant !== 'ghost' && (
        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0 rounded-full" />
      )}
    </motion.button>
  );
};
