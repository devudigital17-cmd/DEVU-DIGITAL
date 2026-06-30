import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

// What our work will look like — capability cards instead of fake portfolio
const CAPABILITIES = [
  {
    title: "SaaS Dashboards",
    description: "Complex data UIs made beautiful — charts, tables, real-time updates, and role-based access.",
    gradient: "from-violet-600 via-purple-700 to-indigo-900",
    accent: "#7c3aed",
    tags: ["React", "Supabase", "Recharts"],
  },
  {
    title: "Marketing Websites",
    description: "Conversion-optimized landing pages with premium animations that make visitors stop scrolling.",
    gradient: "from-blue-600 via-indigo-700 to-violet-900",
    accent: "#3b82f6",
    tags: ["Next.js", "Framer Motion", "SEO"],
  },
  {
    title: "E-Commerce Stores",
    description: "Headless storefronts that load fast, look stunning, and turn browsers into repeat buyers.",
    gradient: "from-emerald-600 via-teal-700 to-cyan-900",
    accent: "#10b981",
    tags: ["Shopify", "Headless", "Stripe"],
  },
  {
    title: "Brand Identities",
    description: "Logo, typography, color system, and component library — everything you need to look consistent everywhere.",
    gradient: "from-amber-600 via-orange-700 to-red-900",
    accent: "#f59e0b",
    tags: ["Figma", "Design System", "Guidelines"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#07070d" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }} />

      <Container>
        <div className="flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTitle
              badge="Our capabilities"
              title={<>What we build.</>}
              subtitle="We're just getting started — and we're looking for our first clients to build alongside. Here's the type of work we do."
            />
          </div>

          {/* Capability cards */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
            className="grid sm:grid-cols-2 gap-5"
          >
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                whileHover={{ y: -4 }}
              >
                {/* Visual top */}
                <div className="relative h-44 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-80`} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
                  {/* Abstract shape */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 rounded-2xl opacity-30 border border-white/20"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                    animate={{ rotate: [12, 18, 12] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-10 h-10 rounded-xl opacity-20 border border-white/20"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                    animate={{ rotate: [-8, -14, -8] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                      Coming soon
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none", borderRadius: "0 0 1rem 1rem" }}>
                  <h3 className="text-base font-semibold text-white mb-1.5">{cap.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{cap.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full text-slate-400 border" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Be our first client CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.3), transparent 70%)", filter: "blur(30px)" }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-4" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                <Star size={12} className="fill-amber-400 text-amber-400" />
                Founding client opportunity
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Be the project we're proud to show first.
              </h3>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto leading-relaxed">
                We're taking on our first clients at a significantly reduced rate. In return, we'll give your project everything we have — obsessive attention to detail, unlimited revisions, and a result we'll both be proud to show off.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                Claim founding pricing <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}