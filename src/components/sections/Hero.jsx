import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import BrowserMockup from "../ui/BrowserMockup";
import FloatingCard from "../ui/FloatingCard";
import GlowBackground from "../ui/GlowBackground";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const blurReveal = { hidden: { opacity: 0, filter: "blur(12px)", y: 20 }, show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

const words = ["convert.", "impress.", "scale.", "perform.", "stand out."];

const WordCycle = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block" style={{ minWidth: "6ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0 pointer-events-none">{words[index]}</span>
    </span>
  );
};

// Early adopter offer banner
const EarlyAdopterBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
    style={{
      background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.1))",
      border: "1px solid rgba(124,58,237,0.3)",
    }}
  >
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    <span className="text-slate-300">Now open for business</span>
    <span className="text-violet-400 font-semibold">· Founding client rates available</span>
  </motion.div>
);

export default function Hero() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 60, damping: 25 });
  const blobY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 60, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ background: "#050508" }}
    >
      <GlowBackground variant="hero" />

      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          x: blobX, y: blobY,
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16 lg:py-24">

          {/* ── Left: Copy ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6 lg:gap-8 max-w-xl">

            <motion.div variants={fadeUp}>
              <EarlyAdopterBadge />
            </motion.div>

            <motion.h1
              variants={blurReveal}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Digital products<br />that <WordCycle />
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 leading-relaxed">
              We're a new agency with a simple promise — bring enterprise-level design and engineering to businesses that deserve it. No fluff. Just beautiful, fast, conversion-focused products.
            </motion.p>

            {/* Value props */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
              {[
                "Built with React, Next.js & Framer Motion",
                "Delivered in 2–4 week focused sprints",
                "Founding client pricing — limited spots",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Button variant="primary" size="lg" icon={ArrowRight} href="#contact">
                Get founding pricing
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                See what we build
              </Button>
            </motion.div>

            {/* Honest trust signal */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 p-3 rounded-xl border"
              style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.15)" }}
            >
              <Sparkles size={16} className="text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-emerald-400 font-semibold">New agency advantage:</span>{" "}
                You get our complete focus, founding rates, and a team that's hungry to make your project our best work yet.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Browser Mockup ── */}
          <div className="relative hidden lg:block">
            <FloatingCard icon="✦" label="React & Next.js" sub="Modern stack" delay={0.8} className="absolute -top-6 -left-8 z-20" />
            <FloatingCard icon="⚡" label="Fast Delivery" sub="2–4 week sprints" delay={0.95} className="absolute top-1/3 -left-10 z-20" />
            <FloatingCard icon="🎨" label="Premium UI" sub="Award-level design" delay={1.05} className="absolute -bottom-4 left-4 z-20" />
            <FloatingCard icon="📱" label="Responsive" sub="Every device" delay={1.15} className="absolute top-8 -right-6 z-20" />
            <FloatingCard icon="💰" label="Founding Rate" sub="Limited spots" delay={1.25} className="absolute bottom-10 -right-8 z-20" />
            <BrowserMockup className="w-full" />
          </div>
        </div>

        {/* ── Commitment strip instead of fake stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 pt-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "100%", label: "Client focused" },
            { value: "2–4wk", label: "Sprint delivery" },
            { value: "∞", label: "Revision rounds" },
            { value: "24hr", label: "Response time" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}