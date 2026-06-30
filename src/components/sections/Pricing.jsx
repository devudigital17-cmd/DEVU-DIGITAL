import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const fadeUp  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: { inr: "₹5K", usd: "$60" },
    period: "one-time",
    description: "Perfect for landing pages and simple marketing sites.",
    accent: "#3b82f6",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "rgba(59,130,246,0.2)",
    popular: false,
    features: [
      "Custom design (up to 5 pages)",
      "React / Next.js development",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "2 weeks delivery",
      "2 revision rounds",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: { inr: "₹12K", usd: "$150" },
    period: "one-time",
    description: "For startups launching a product or rebranding.",
    accent: "#7c3aed",
    gradient: "from-violet-500/15 to-blue-500/10",
    border: "rgba(124,58,237,0.35)",
    popular: true,
    features: [
      "Everything in Starter",
      "Full brand identity",
      "Up to 12 pages / views",
      "Framer Motion animations",
      "CMS integration",
      "Advanced SEO",
      "Email marketing setup",
      "3 weeks delivery",
      "Unlimited revisions",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: { inr: "₹25K+", usd: "$300+" },
    period: "project",
    description: "Full-stack SaaS, e-commerce, or custom platforms.",
    accent: "#10b981",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "rgba(16,185,129,0.2)",
    popular: false,
    features: [
      "Everything in Growth",
      "Full-stack development",
      "Auth & user management",
      "Payment integration (Stripe/Razorpay)",
      "Custom dashboard & analytics",
      "API development",
      "Performance optimization",
      "30 days post-launch support",
      "Dedicated project manager",
    ],
  },
];

const PricingCard = ({ plan, currency }) => (
  <motion.div
    variants={fadeUp}
    className="relative flex flex-col rounded-2xl overflow-hidden"
    style={{
      background: plan.popular
        ? "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))"
        : "rgba(255,255,255,0.02)",
      border: `1px solid ${plan.border}`,
    }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    {/* Popular badge */}
    {plan.popular && (
      <div
        className="absolute top-0 left-0 right-0 flex justify-center py-1.5"
        style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
      >
        <span className="text-xs font-semibold text-white flex items-center gap-1">
          <Zap size={11} className="fill-white" /> Most Popular · Founding Rate
        </span>
      </div>
    )}

    <div className={`flex flex-col flex-1 p-6 ${plan.popular ? "pt-10" : ""}`}>
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-sm text-slate-400">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-2">
          <span
            className="text-4xl font-bold text-white"
            style={{ background: `linear-gradient(135deg, #fff, ${plan.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            {currency === "inr" ? plan.price.inr : plan.price.usd}
          </span>
          <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
        </div>
        <p className="text-xs text-emerald-400 mt-1 font-medium">✦ Founding client rate — price increases after first 5 clients</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check size={14} className="mt-0.5 shrink-0" style={{ color: plan.accent }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
        style={
          plan.popular
            ? { background: "linear-gradient(135deg, #7c3aed, #3b82f6)", color: "white" }
            : { background: "rgba(255,255,255,0.05)", color: "white", border: `1px solid ${plan.border}` }
        }
      >
        Get started <ArrowRight size={14} />
      </a>
    </div>
  </motion.div>
);

export default function Pricing() {
  const [currency, setCurrency] = useState("inr");

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#07070d" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 text-center">
            <SectionTitle
              badge="Pricing"
              title={<>Simple, honest pricing.</>}
              subtitle="Founding client rates — significantly reduced in exchange for the opportunity to build something we're both proud of."
            />

            {/* Currency toggle */}
            <div className="flex items-center gap-1 p-1 rounded-full border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
              {["inr", "usd"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                  style={
                    currency === c
                      ? { background: "linear-gradient(135deg, #7c3aed, #3b82f6)", color: "white" }
                      : { color: "#94a3b8" }
                  }
                >
                  {c === "inr" ? "₹ INR" : "$ USD"}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
            className="grid md:grid-cols-3 gap-5"
          >
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} currency={currency} />
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="text-center text-sm text-slate-500"
          >
            All prices are negotiable based on scope. Not sure which plan fits?{" "}
            <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              Let's talk →
            </a>
          </motion.p>
        </div>
      </Container>
    </section>
  );
}