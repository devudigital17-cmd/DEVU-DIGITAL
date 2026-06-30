import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Star } from "lucide-react";
import Container from "../ui/Container";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const blurReveal = { hidden: { opacity: 0, filter: "blur(12px)", y: 20 }, show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#07070d" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <Container size="sm">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-col items-center text-center gap-6">

          {/* Label */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <Star size={11} className="fill-amber-400 text-amber-400" />
            Founding client pricing — very limited
          </motion.div>

          <motion.h2
            variants={blurReveal}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Ready to be our<br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              first success story?
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-lg leading-relaxed">
            We're offering our first clients significantly reduced rates in exchange for the opportunity to build something we're all proud of. Once these spots are gone, they're gone.
          </motion.p>

          {/* 3 perks */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 w-full max-w-lg">
            {[
              { icon: Tag, label: "Founding price", sub: "Best rate ever" },
              { icon: Clock, label: "Fast turnaround", sub: "2–4 weeks" },
              { icon: Star, label: "Full attention", sub: "Your project first" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="p-3 rounded-xl border text-center" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}>
                <Icon size={16} className="text-violet-400 mx-auto mb-1.5" />
                <p className="text-xs font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)", boxShadow: "0 0 40px rgba(124,58,237,0.3)" }}
            >
              Claim your spot <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@Devu.digital"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-300 border hover:text-white hover:border-white/20 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              lowrencedevu@gmail.com
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-slate-600">
            Free strategy call · No commitment · Reply within 24 hours
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}