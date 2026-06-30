import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const fadeUp  = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const viewport = { once: true, margin: "-80px" };

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 2–4 weeks depending on scope. A landing page can be done in 1 week, while a full SaaS product may take 4–6 weeks. We give you a precise timeline after our discovery call.",
  },
  {
    q: "What is the founding client rate?",
    a: "As a new agency, we're offering our first clients significantly reduced pricing in exchange for case study rights and testimonials once the project is complete. These rates are the lowest we'll ever charge and are locked in for our ongoing relationship.",
  },
  {
    q: "Do you work with early-stage startups or solo founders?",
    a: "Absolutely. Some of the best projects come from founders with big ideas and lean budgets. We're flexible on payment structures and can work with you on what makes sense.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Just a clear idea of what you want to build, your target audience, and any brand assets you already have (logo, colors, etc.). If you don't have those, we can build them from scratch.",
  },
  {
    q: "Do you build with templates or from scratch?",
    a: "Everything we ship is built from scratch to your specifications. No templates, no page builders, no shortcuts. Pure React + Tailwind + Framer Motion, written by hand.",
  },
  {
    q: "What happens after launch?",
    a: "We provide 30 days of free bug fixes after launch. After that, we offer monthly retainers for ongoing development, updates, and support. We're not the type to disappear after handoff.",
  },
  {
    q: "Can you work with our existing design or Figma file?",
    a: "Yes. If you have a Figma design, we'll build it pixel-perfect. We can also collaborate with your in-house designer or take the design entirely off your plate.",
  },
  {
    q: "How do payments work?",
    a: "We typically work on a 50% upfront / 50% on delivery structure. For larger projects we can split into milestones. We accept bank transfer, UPI, Razorpay, and PayPal.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    variants={fadeUp}
    className="border-b"
    style={{ borderColor: "rgba(255,255,255,0.06)" }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
    >
      <span className="text-base font-medium text-white group-hover:text-violet-300 transition-colors">
        {faq.q}
      </span>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all"
        style={{
          background: isOpen ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.04)",
          border: isOpen ? "1px solid rgba(124,58,237,0.3)" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {isOpen
          ? <Minus size={13} className="text-violet-400" />
          : <Plus size={13} className="text-slate-400" />
        }
      </div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="text-slate-400 leading-relaxed pb-5 text-sm">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#050508" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left: sticky title */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            <SectionTitle
              badge="FAQ"
              title={<>Questions we<br />get asked a lot.</>}
              subtitle="Can't find your answer? Just email us at lowrencedevu@gmail.com and we'll reply within 24 hours."
              align="left"
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white w-fit"
              style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
            >
              Ask us anything →
            </a>
          </div>

          {/* Right: accordion */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}