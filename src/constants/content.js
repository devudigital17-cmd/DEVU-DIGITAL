// ─── Site Content — New Agency, Honest Positioning ───────────────────────────

export const SITE = {
  name: "Devu Digital",
  tagline: "We build digital products that convert.",
  email: "lowrencedevu@gmail.com",
  phone: "+1 (555) 000-0000",
  location: "Kakinada, Ap, INDIA",
  social: {
    twitter: "#",
    linkedin: "#",
    dribbble: "#",
    github: "#",
  },
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero stats — forward-looking, honest ────────────────────────────────────
export const STATS = [
  { value: "100%", label: "Client Focused" },
  { value: "2–4wk", label: "Sprint Delivery" },
  { value: "∞", label: "Revision Rounds" },
  { value: "24hr", label: "Response Time" },
];

export const FLOATING_CARDS = [
  { icon: "✦", label: "AI-Powered", sub: "Smart automation" },
  { icon: "⚡", label: "Fast Delivery", sub: "2–4 week sprints" },
  { icon: "🎨", label: "Premium UI", sub: "Award-worthy design" },
  { icon: "📱", label: "Responsive", sub: "Every device" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "web",
    icon: "Globe",
    title: "Web Design & Development",
    description:
      "Pixel-perfect, performant websites built with React, Next.js, and modern tooling that rank, convert, and impress.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    gradient: "from-violet-500/20 to-blue-500/20",
    accent: "#7c3aed",
  },
  {
    id: "brand",
    icon: "Sparkles",
    title: "Brand Identity & Design Systems",
    description:
      "From logo to component library — cohesive visual systems that scale across every touchpoint your brand lives in.",
    tags: ["Figma", "Design Tokens", "Style Guides", "Icons"],
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "#ec4899",
  },
  {
    id: "motion",
    icon: "Zap",
    title: "Motion & Interaction Design",
    description:
      "Purposeful animation that guides attention, communicates state, and makes your product feel alive and intelligent.",
    tags: ["Framer Motion", "GSAP", "Lottie", "Three.js"],
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "#f59e0b",
  },
  {
    id: "ecomm",
    icon: "ShoppingBag",
    title: "E-Commerce & Conversion",
    description:
      "Revenue-optimized storefronts that turn browsers into buyers. Built on Shopify, or custom-headless architecture.",
    tags: ["Shopify", "Headless", "A/B Testing", "Analytics"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10b981",
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO & Performance",
    description:
      "Core Web Vitals, structured data, and technical SEO baked in from day one so you rank before competitors notice.",
    tags: ["Core Web Vitals", "Schema", "Analytics", "Lighthouse"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "#3b82f6",
  },
  {
    id: "saas",
    icon: "Layers",
    title: "SaaS Product Development",
    description:
      "Full-stack product engineering from MVP to scale. Auth, billing, dashboards, and everything in between.",
    tags: ["Full-Stack", "Auth", "Stripe", "Supabase"],
    gradient: "from-purple-500/20 to-violet-500/20",
    accent: "#8b5cf6",
  },
];

// ─── Portfolio — empty for now, show "coming soon" state ─────────────────────
export const PORTFOLIO = [];

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your goals, users, and competitive landscape to craft a clear roadmap.",
    icon: "Search",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "High-fidelity Figma designs with interactive prototypes so you can feel the product before a single line of code.",
    icon: "PenTool",
    duration: "Week 1–2",
  },
  {
    step: "03",
    title: "Build & Animate",
    description:
      "Production-grade code with smooth animations, optimized performance, and accessibility baked in.",
    icon: "Code2",
    duration: "Week 2–4",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "Deployment, SEO setup, analytics integration, and ongoing support to keep your product ahead of the curve.",
    icon: "Rocket",
    duration: "Week 4+",
  },
];

// ─── Testimonials — empty until first clients ─────────────────────────────────
export const TESTIMONIALS = [];

// ─── Founder — real honest positioning ───────────────────────────────────────
export const FOUNDER = {
  name: "Lowrence Devu",
  role: "Founder & Creative Director",
  bio: "We started Devu Digital with one mission: to give every business — no matter the size — access to the same world-class digital quality that was once reserved for Fortune 500s. We're just getting started, and we're hungry to prove it.",
  skills: [
    "React & Next.js",
    "Figma & UI Design",
    "Framer Motion",
    "Node.js & Supabase",
    "SEO & Performance",
    "Brand Identity",
  ],
};

// ─── Why us — value props instead of fake social proof ───────────────────────
export const WHY_US = [
  {
    title: "Early adopter pricing",
    description:
      "We're offering our first clients significantly reduced rates in exchange for case study rights. Lock in the best price we'll ever charge.",
    icon: "Tag",
    accent: "#7c3aed",
  },
  {
    title: "Full attention, every project",
    description:
      "We're not juggling 30 clients. Your project gets our complete focus from day one to launch.",
    icon: "Focus",
    accent: "#3b82f6",
  },
  {
    title: "Skin in the game",
    description:
      "As a new agency, your success is our reputation. We're more motivated than anyone to make your project outstanding.",
    icon: "Flame",
    accent: "#f59e0b",
  },
  {
    title: "No bloated agency overhead",
    description:
      "No account managers, no layers. You work directly with the people building your product.",
    icon: "Zap",
    accent: "#10b981",
  },
];

export const TRUST_BADGES = [
  "React Certified",
  "Next.js Specialist",
  "Figma Expert",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
];