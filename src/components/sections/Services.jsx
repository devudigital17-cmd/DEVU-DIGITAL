import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Globe, Sparkles, Zap, ShoppingBag, TrendingUp, Layers, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import GlowBackground from "../ui/GlowBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

const SERVICES = [
  { id: "web", icon: Globe, title: "Web Design & Development", description: "Pixel-perfect, performant websites built with React, Next.js, and modern tooling that rank, convert, and impress.", tags: ["React", "Next.js", "Tailwind", "Framer"], gradient: "from-violet-500/20 to-blue-500/20", accent: "#7c3aed" },
  { id: "brand", icon: Sparkles, title: "Brand Identity & Design Systems", description: "From logo to component library — cohesive visual systems that scale across every touchpoint your brand lives in.", tags: ["Figma", "Design Tokens", "Style Guides", "Icons"], gradient: "from-pink-500/20 to-rose-500/20", accent: "#ec4899" },
  { id: "motion", icon: Zap, title: "Motion & Interaction Design", description: "Purposeful animation that guides attention, communicates state, and makes your product feel alive and intelligent.", tags: ["Framer Motion", "GSAP", "Lottie", "Three.js"], gradient: "from-amber-500/20 to-orange-500/20", accent: "#f59e0b" },
  { id: "ecomm", icon: ShoppingBag, title: "E-Commerce & Conversion", description: "Revenue-optimized storefronts that turn browsers into buyers. Built on Shopify, or custom-headless architecture.", tags: ["Shopify", "Headless", "A/B Testing", "Analytics"], gradient: "from-emerald-500/20 to-teal-500/20", accent: "#10b981" },
  { id: "seo", icon: TrendingUp, title: "SEO & Performance", description: "Core Web Vitals, structured data, and technical SEO baked in from day one so you rank before competitors notice.", tags: ["Core Web Vitals", "Schema", "Analytics", "Lighthouse"], gradient: "from-blue-500/20 to-cyan-500/20", accent: "#3b82f6" },
  { id: "saas", icon: Layers, title: "SaaS Product Development", description: "Full-stack product engineering from MVP to scale. Auth, billing, dashboards, and everything in between.", tags: ["Full-Stack", "Auth", "Stripe", "Supabase"], gradient: "from-purple-500/20 to-violet-500/20", accent: "#8b5cf6" },
];

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const Icon = service.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouse = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div ref={cardRef} variants={fadeUp} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ perspective: "800px" }} className="group">
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative rounded-2xl p-6 h-full flex flex-col gap-4 cursor-default" whileHover={{ scale: 1.01 }}>
        <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }} />
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}>
            <Icon size={20} style={{ color: service.accent }} />
          </div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-white leading-snug">{service.title}</h3>
            <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-all shrink-0 mt-0.5" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {service.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium text-slate-400 border" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#050508" }}>
      <GlowBackground variant="section" />
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionTitle badge="What we do" title={<>Everything you need<br />to ship a great product.</>} align="left" />
            <p className="text-slate-400 text-sm max-w-xs md:text-right leading-relaxed">End-to-end digital capabilities, handled by one expert team.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border"
            style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.15)" }}
          >
            <div>
              <p className="font-semibold text-white mb-1">Not sure what you need?</p>
              <p className="text-sm text-slate-400">Book a free 30-minute strategy call — we'll map out exactly what to build.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shrink-0" style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}>
              Book a free call <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}