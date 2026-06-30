import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const viewport = { once: true, margin: "-80px" };

const SOCIALS = [
  { label: "Twitter / X", href: "#", letter: "𝕏" },
  { label: "LinkedIn", href: "#", letter: "in" },
  { label: "GitHub", href: "#", letter: "gh" },
  { label: "Dribbble", href: "#", letter: "dr" },
];

const FOOTER_LINKS = {
  Services: ["Web Development", "UI/UX Design", "Motion Design", "Brand Identity", "E-Commerce", "SaaS Development"],
  Company: ["About", "Process", "Portfolio", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ background: "#050508", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <Container>
        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="col-span-2 lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 w-fit group">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-white/90" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Devu<span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              A premium digital agency building world-class web products for startups and scale-ups.
            </p>

            {/* Social icons using text letters — no icon library dependency */}
            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, letter }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border hover:border-white/20 hover:bg-white/5 transition-all text-xs font-bold text-slate-500 hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  {letter}
                </a>
              ))}
            </div>

            <a
              href="mailto:lowrencedevu@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors group w-fit"
            >
              lowrencedevu@gmail.com
              <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <motion.div key={category} variants={fadeUp} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Devu Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs text-slate-600">
              Accepting new clients ·{" "}
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                Get in touch
              </a>
            </p>
          </div>
          <p className="text-xs text-slate-600">Crafted with care</p>
        </div>
      </Container>
    </footer>
  );
}