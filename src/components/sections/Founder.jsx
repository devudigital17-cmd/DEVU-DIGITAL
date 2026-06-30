import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Globe, Mail } from "lucide-react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

const SKILLS = [
  { icon: Code2, label: "React & Next.js", color: "#61dafb" },
  { icon: Palette, label: "UI/UX Design", color: "#f24e1e" },
  { icon: Zap, label: "Framer Motion", color: "#ff0055" },
  { icon: Globe, label: "SEO & Performance", color: "#10b981" },
];

const WHY_CARDS = [
  { title: "Founding rates", desc: "First clients get our best-ever pricing — locked in for the lifetime of our relationship.", icon: "$", accent: "#7c3aed" },
  { title: "Direct access", desc: "No middlemen. You talk to the people building your product, every day.", icon: "👥", accent: "#3b82f6" },
  { title: "Full obsession", desc: "Your project is our most important work right now. We treat it that way.", icon: "💻", accent: "#f59e0b" },
  { title: "Skin in the game", desc: "Your success is our portfolio. We're more invested in your outcome than any established agency.", icon: "🏁", accent: "#10b981" },
];

export default function Founder() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#050508" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

      <Container>
        <div className="flex flex-col gap-16">

          {/* Founder intro */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left: Founder card */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-col gap-6">
              <Badge variant="gradient" dot>The team</Badge>

              <div className="relative rounded-3xl overflow-hidden p-8" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.10), rgba(59,130,246,0.06))", border: "1px solid rgba(124,58,237,0.15)" }}>
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}>
                    D
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Devu Digital</h3>
                    <p className="text-sm text-violet-400">Founded 2026 · Open for business</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  We're a small, focused team of designers and developers who believe the web deserves better than cookie-cutter templates and mediocre execution. We started Nexora to change that — one project at a time.
                </p>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {SKILLS.map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <Icon size={15} style={{ color }} />
                      <span className="text-xs font-medium text-slate-300">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-slate-400">Available for new projects</span>
                  </div>
                  <a href="mailto:hello@devu.digital" className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                    <Mail size={12} />
                    Say hello
                  </a>
                </div>

                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(30px)" }} />
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                Start a conversation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right: Why work with us */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-col gap-6">
              <div>
                <Badge variant="gradient" dot>Why choose us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 tracking-tight leading-tight">
                  The honest case for<br />hiring a new agency.
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We don't have a trophy wall yet. What we do have is hunger, skill, and a founding promise that every project is treated like our most important one — because it is.
                </p>
              </div>

              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid grid-cols-1 gap-3">
                {WHY_CARDS.map((card) => (
                  <motion.div key={card.title} variants={fadeUp}
                    className="flex gap-4 p-5 rounded-2xl border group hover:border-white/10 transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: `${card.accent}12`, border: `1px solid ${card.accent}20` }}>
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm">{card.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}