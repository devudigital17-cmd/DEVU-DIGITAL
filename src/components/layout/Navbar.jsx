import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Services",  href: "#services"  },
  { label: "Work",      href: "#portfolio" },
  { label: "Process",   href: "#process"   },
  { label: "About",     href: "#about"     },
  { label: "Pricing",   href: "#pricing"   },
  { label: "Contact",   href: "#contact"   },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -80, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 1000,
          background: scrolled ? "var(--bg-primary)" : "transparent",
          opacity: 1,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Container>
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick(e, "body")} className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-white/90" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                DEVU<span className="text-violet-400">.</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm rounded-full hover:bg-white/5 transition-all duration-150"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA + theme toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-4 py-2 text-sm font-medium rounded-full border hover:opacity-80 transition-all"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
              >
                Get in touch
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-full"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                Start a project <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile: toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -8  }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex flex-col pt-20 pb-8 px-6"
            style={{ background: "var(--bg-primary)", backdropFilter: "blur(24px)", zIndex: 999 }}
          >
            <div className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold py-3 border-b hover:pl-2 transition-all"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                Start a project <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;