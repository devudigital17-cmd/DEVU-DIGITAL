// ─── Extended data arrays ─────────────────────────────────────────────────────
// Used for additional filtering, sorting, or data-driven components
// Primary data lives in content.js — this file extends it

export const TECH_STACK = [
  { name: "React", category: "Frontend", level: 98, color: "#61dafb" },
  { name: "Next.js", category: "Frontend", level: 95, color: "#ffffff" },
  { name: "TypeScript", category: "Language", level: 92, color: "#3178c6" },
  { name: "Tailwind CSS", category: "Styling", level: 97, color: "#06b6d4" },
  { name: "Framer Motion", category: "Animation", level: 93, color: "#ff0055" },
  { name: "Three.js", category: "3D/WebGL", level: 78, color: "#ffffff" },
  { name: "GSAP", category: "Animation", level: 85, color: "#88ce02" },
  { name: "Node.js", category: "Backend", level: 88, color: "#417e38" },
  { name: "Supabase", category: "Database", level: 90, color: "#3ecf8e" },
  { name: "Figma", category: "Design", level: 96, color: "#f24e1e" },
];

export const CASE_STUDY_TAGS = [
  "All",
  "SaaS",
  "E-Commerce",
  "Healthcare",
  "Agency",
  "Mobile",
  "Brand",
];

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "5,000",
    period: "one-time",
    description: "Perfect for landing pages and marketing sites.",
    features: [
      "Custom design (up to 5 pages)",
      "React / Next.js development",
      "Mobile responsive",
      "Basic SEO setup",
      "2 revision rounds",
      "14-day delivery",
    ],
    cta: "Get started",
    accent: "#3b82f6",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$15,000",
    period: "one-time",
    description: "For startups launching a product or rebranding.",
    features: [
      "Everything in Starter",
      "Full brand identity",
      "Up to 15 pages / views",
      "Framer Motion animations",
      "CMS integration",
      "Advanced SEO",
      "Unlimited revisions",
      "28-day delivery",
    ],
    cta: "Most popular",
    accent: "#7c3aed",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "Custom",
    period: "project",
    description: "Full-stack SaaS, e-commerce, or platform builds.",
    features: [
      "Everything in Growth",
      "Full-stack development",
      "Auth & billing integration",
      "Custom dashboard & analytics",
      "Performance optimization",
      "3 months post-launch support",
      "Dedicated project lead",
    ],
    cta: "Book a call",
    accent: "#10b981",
    popular: false,
  },
];

export const FAQ_ITEMS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 2–4 weeks depending on scope. We give you a precise timeline after our discovery call.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Absolutely. Some of our best work has been with pre-seed and seed-stage companies who needed to move fast.",
  },
  {
    q: "What's included in post-launch support?",
    a: "We provide 30 days of bug fixes and minor adjustments after launch, and offer ongoing retainers for continuous development.",
  },
  {
    q: "Can you work with our existing design?",
    a: "Yes — if you have a Figma file or style guide, we can build from it. We can also collaborate with your in-house designer.",
  },
  {
    q: "Do you use templates or build from scratch?",
    a: "Everything we ship is built from scratch to your specifications. No templates, no shortcuts.",
  },
];

export const BLOG_POSTS = [
  {
    href="https://devu17.blogspot.com/2026/06/why-your-startups-website-is-costing.html",
    target="_blank:,
    rel="noopener noreferrer",
    id: "1",
    title: "Why your startup's website is costing you customers",
    excerpt: "Most startup websites are built to ship fast, not to convert. Here's how to fix that.",
    date: "Jun 12, 2025",
    readTime: "5 min",
    tag: "Strategy",
    accent: "#7c3aed",
  },
  {
    id: "2",
    title: "The motion design principles we use on every project",
    excerpt: "Animation isn't decoration — it's information. A breakdown of how we use motion.",
    date: "May 28, 2025",
    readTime: "7 min",
    tag: "Design",
    accent: "#3b82f6",
  },
  {
    id: "3",
    title: "React Server Components: what agencies need to know in 2025",
    excerpt: "A practical guide to RSC patterns that matter for client-facing applications.",
    date: "May 14, 2025",
    readTime: "9 min",
    tag: "Engineering",
    accent: "#10b981",
  },
];
