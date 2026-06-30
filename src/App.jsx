import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import Founder from "./components/sections/Founder";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Blog from "./components/sections/Blog";
import ContactCTA from "./components/sections/ContactCTA";
import Contacts from "./components/sections/Contacts";

// New feature components
import PageLoader from "./components/ui/PageLoader";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import useLenis from "./hooks/useLenis";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Smooth scroll
  useLenis();

  return (
    <>
      {/* Page loader — shows on first visit */}
      <PageLoader onComplete={() => setLoaded(true)} />

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Main site — revealed after loader */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          background: "#050508",
          cursor: "none", // hide default cursor on desktop
        }}
        className="min-h-screen"
      >
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Process />
          <About />
          <Founder />
          <Pricing />
          <FAQ />
          <Blog />
          <ContactCTA />
          <Contacts />
        </main>
        <Footer />
      </div>

      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  );
}
