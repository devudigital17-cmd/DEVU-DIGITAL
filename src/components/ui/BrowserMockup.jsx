import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import WebsitePreview from "./WebsitePreview";

// 3D tilting browser mockup with embedded WebsitePreview
const BrowserMockup = ({ className = "" }) => {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow under browser */}
        <div
          className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(59,130,246,0.4))",
          }}
        />

        {/* Browser chrome */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 50px 100px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
            background: "#0d0d14",
          }}
        >
          {/* Browser toolbar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL bar */}
            <div
              className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] text-slate-400 font-mono">DEVU.digital</span>
            </div>

            {/* Controls */}
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-md"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                />
              ))}
            </div>
          </div>

          {/* Website content */}
          <div className="h-[380px] md:h-[440px] overflow-hidden">
            <WebsitePreview />
          </div>
        </div>

        {/* Reflection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(124,58,237,0.06))",
            transform: "scaleY(-1) translateY(100%)",
            opacity: 0.3,
            filter: "blur(4px)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default BrowserMockup;