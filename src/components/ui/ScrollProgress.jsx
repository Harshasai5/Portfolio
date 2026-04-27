import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] origin-left z-[100] shadow-[0_0_10px_rgba(123,44,191,0.5)]"
      style={{ scaleX }}
    />
  );
};
