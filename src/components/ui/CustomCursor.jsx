import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Premium custom cursor with glow trail
// Add <CustomCursor /> once inside App.jsx
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [clicked, setClicked]   = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [hidden, setHidden]     = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Main dot — snappy
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Glow ring — laggy trail
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHidden(false);
    };

    const down  = () => setClicked(true);
    const up    = () => setClicked(false);
    const enter = () => setHidden(false);
    const leave = () => setHidden(true);

    // Detect hoverable elements
    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor='pointer']").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    // Run after DOM settles
    setTimeout(addHover, 1000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  // Hide on mobile/tablet
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Glow ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:   hovered ? 50 : clicked ? 20 : 36,
          height:  hovered ? 50 : clicked ? 20 : 36,
          opacity: hidden  ? 0  : hovered ? 0.6 : 0.35,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          background: "transparent",
          border: "1.5px solid rgba(167,139,250,0.6)",
          boxShadow: hovered
            ? "0 0 20px rgba(124,58,237,0.5), 0 0 40px rgba(124,58,237,0.2)"
            : "0 0 10px rgba(124,58,237,0.3)",
        }}
      />

      {/* Main dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:   hovered ? 6 : clicked ? 12 : 8,
          height:  hovered ? 6 : clicked ? 12 : 8,
          opacity: hidden  ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
          boxShadow: "0 0 8px rgba(124,58,237,0.8)",
        }}
      />
    </>
  );
};

export default CustomCursor;