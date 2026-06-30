import { motion } from "framer-motion";
import { Search, Code2, Rocket, PenTool } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import GlowBackground from "../ui/GlowBackground";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const viewport = { once: true, margin: "-80px" };

const STEPS = [
  { step: "01", title: "Discovery & Strategy", description: "We start by deeply understanding your goals, users, and competitive landscape to craft a clear roadmap.", icon: Search, duration: "Week 1" },
  { step: "02", title: "Design & Prototype", description: "High-fidelity Figma designs with interactive prototypes so you can feel the product before a single line of code.", icon: PenTool, duration: "Week 1–2" },
  { step: "03", title: "Build & Animate", description: "Production-grade code with smooth animations, optimized performance, and accessibility baked in.", icon: Code2, duration: "Week 2–4" },
  { step: "04", title: "Launch & Grow", description: "Deployment, SEO setup, analytics integration, and ongoing support to keep your product ahead of the curve.", icon: Rocket, duration: "Week 4+" },
];

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.div variants={fadeLeft} className="relative flex items-start gap-6 group">
      <div className="flex flex-col items-center shrink-0">
        <motion.div className="relative w-12 h-12 rounded-2xl flex items-center justify-center z-10" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }} whileHover={{ scale: 1.1 }}>
          <span className="font-mono text-xs text-slate-500 absolute -top-2 -right-1">{step.step}</span>
          <Icon size={18} className="text-violet-400" />
        </motion.div>
        {index < STEPS.length - 1 && (
          <div className="w-px flex-1 mt-2 min-h-[60px]" style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(124,58,237,0.05))" }} />
        )}
      </div>
      <div className="pb-10 flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}>{step.duration}</span>
        </div>
        <p className="text-slate-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#050508" }}>
      <GlowBackground variant="section" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionTitle badge="Our process" title={<>From idea to launch<br />in weeks, not months.</>} subtitle="We've refined a 4-step process that keeps projects on time, on budget, and always on brand. No surprises." align="left" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="mt-10 grid grid-cols-2 gap-4">
              {[{ v: "2–4 wks", l: "Average timeline" }, { v: "0", l: "Scope surprises" }, { v: "Weekly", l: "Progress updates" }, { v: "∞", l: "Revision rounds" }].map((stat) => (
                <motion.div key={stat.l} variants={fadeUp} className="p-4 rounded-xl border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <p className="text-2xl font-bold text-white mb-0.5">{stat.v}</p>
                  <p className="text-xs text-slate-500">{stat.l}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="pt-2">
            {STEPS.map((step, i) => <StepCard key={step.step} step={step} index={i} />)}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}