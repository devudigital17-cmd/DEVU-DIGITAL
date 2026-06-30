import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Zap, Heart, Target, Code2, Palette, Flame, Focus } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

const TECH = [
  { name: "React / Next.js", color: "#61dafb" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Framer Motion", color: "#ff0055" },
  { name: "Three.js", color: "#ffffff" },
  { name: "Figma", color: "#f24e1e" },
  { name: "Supabase", color: "#3ecf8e" },
  { name: "Node.js", color: "#417e38" },
  { name: "Stripe", color: "#635bff" },
  { name: "GSAP", color: "#88ce02" },
  { name: "TypeScript", color: "#3178c6" },
];

const VALUES = [
  { icon: Shield, title: "Quality over quantity", desc: "We'd rather do fewer projects exceptionally well than rush through many mediocrely.", accent: "#7c3aed" },
  { icon: Zap, title: "Speed without shortcuts", desc: "Weeks, not months — but never at the cost of quality or craft.", accent: "#f59e0b" },
  { icon: Heart, title: "We care deeply", desc: "Every pixel, every interaction, every line of code gets our full attention.", accent: "#ec4899" },
  { icon: Target, title: "Results first", desc: "Beautiful work that also converts, ranks, and actually grows your business.", accent: "#10b981" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#07070d" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }} />

      <Container>
        <div className="flex flex-col gap-20">

          {/* Main story */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left visual */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport} className="relative">
              <div className="relative rounded-3xl overflow-hidden p-8 aspect-[4/3] flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                {/* Animated shapes */}
                <motion.div className="absolute top-8 left-8 w-28 h-28 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(59,130,246,0.3))" }} animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} />
                <motion.div className="absolute bottom-8 right-8 w-20 h-20 rounded-full" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(124,58,237,0.3))" }} animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 5, repeat: Infinity }} />
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-3xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }} animate={{ rotate: [45, 52, 45, 38, 45] }} transition={{ duration: 10, repeat: Infinity }} />

                {/* Center message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-4xl font-bold text-white mb-2">Day 1</p>
                    <p className="text-sm text-slate-400">Every great agency started here.</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ delay: 0.4 }} className="absolute -right-4 top-8 p-4 rounded-2xl border" style={{ background: "rgba(5,5,8,0.9)", borderColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-violet-400" />
                  <p className="text-sm font-semibold text-white">Full-Stack</p>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">React · Node · DB</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ delay: 0.5 }} className="absolute -left-4 bottom-8 p-4 rounded-2xl border" style={{ background: "rgba(5,5,8,0.9)", borderColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-pink-400" />
                  <p className="text-sm font-semibold text-white">Design + Dev</p>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">One team, full stack</p>
              </motion.div>
            </motion.div>

            {/* Right: Story */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-col gap-6">
              <motion.div variants={fadeUp}><Badge variant="gradient" dot>Our story</Badge></motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                We're new.<br />
                <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  And that's our edge.
                </span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed text-lg">
                DEVU Digital was founded with one belief — that small businesses and startups deserve the same digital quality that big brands pay agencies millions for. We're just starting out, and that means every project we take on gets our complete, undivided obsession.
              </motion.p>

              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
                No juggling 30 clients. No junior designers handling your brand. No account managers in the middle. Just skilled people who care deeply about craft, working directly with you to build something worth talking about.
              </motion.p>

              <motion.div variants={fadeUp} className="p-4 rounded-xl border" style={{ background: "rgba(124,58,237,0.06)", borderColor: "rgba(124,58,237,0.15)" }}>
                <p className="text-sm text-violet-300 font-semibold mb-1">🎯 Our founding promise</p>
                <p className="text-sm text-slate-400">Your project will be treated like our portfolio piece — because right now, it is. We will not stop until you're proud to show it off.</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <a href="#contact" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold text-sm group">
                  Let's work together <ArrowUpRight size={15} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech stack */}
          <div>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="text-xl font-semibold text-white mb-2">Our tech stack</motion.h3>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="text-slate-400 text-sm mb-6">The same tools used by Vercel, Linear, and Stripe.</motion.p>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <motion.span key={t.name} variants={fadeUp}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border"
                  style={{ background: `${t.color}10`, borderColor: `${t.color}25`, color: t.color }}
                >
                  {t.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Values */}
          <div>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="text-xl font-semibold text-white mb-6">What we stand for</motion.h3>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VALUES.map(({ icon: Icon, title, desc, accent }) => (
                <motion.div key={title} variants={fadeUp} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}