import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Premium page loading animation shown on first visit
// Disappears after ~2.2s revealing the site with a smooth exit
const PageLoader = ({ onComplete }) => {
  const [count, setCount]     = useState(0);
  const [visible, setVisible] = useState(true);

  // Count up 0 → 100
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        // Slight pause at 100 before exit
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => onComplete?.(), 700);
        }, 300);
      } else {
        setCount(current);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#050508" }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
                >
                  <div className="w-4 h-4 rounded-sm bg-white/90" />
                </div>
                <div
                  className="absolute inset-0 rounded-2xl blur-lg opacity-60"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Devu<span className="text-violet-400">.</span>
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px relative overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${count}%`,
                  background: "linear-gradient(90deg, #7c3aed, #3b82f6)",
                  boxShadow: "0 0 8px rgba(124,58,237,0.8)",
                  transition: "width 0.1s ease",
                }}
              />
            </div>

            {/* Counter */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-mono text-slate-500 tabular-nums"
            >
              {String(count).padStart(3, "0")}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;