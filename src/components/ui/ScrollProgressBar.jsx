import { useScroll, motion, useSpring } from "framer-motion";

// Thin gradient progress bar fixed at very top of viewport
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9998,
        background: "linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4)",
        boxShadow: "0 0 10px rgba(124,58,237,0.6)",
      }}
    />
  );
};

export default ScrollProgressBar;