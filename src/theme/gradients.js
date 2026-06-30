// Gradient definitions — use as inline styles or CSS variables
export const gradients = {
  // Brand
  brand: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
  brandReverse: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #7c3aed 100%)",
  brandRadial: "radial-gradient(circle, #7c3aed 0%, #3b82f6 60%, transparent 100%)",

  // Backgrounds
  heroBg: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)",
  sectionBg: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,58,237,0.10) 0%, transparent 70%)",
  darkOverlay: "linear-gradient(to bottom, transparent, rgba(5,5,8,0.95))",

  // Cards
  cardDefault: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
  cardViolet: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(59,130,246,0.08) 100%)",
  cardBlue: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.08) 100%)",
  cardEmerald: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.08) 100%)",
  cardAmber: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(239,68,68,0.08) 100%)",

  // Text gradients (apply via bg-clip-text)
  textBrand: "linear-gradient(135deg, #a78bfa, #60a5fa)",
  textWhite: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.7))",
  textGold: "linear-gradient(135deg, #fbbf24, #f59e0b)",

  // Button
  buttonPrimary: "linear-gradient(135deg, #7c3aed, #3b82f6)",
  buttonHover: "linear-gradient(135deg, #6d28d9, #2563eb)",

  // Aurora blobs
  auroraViolet: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
  auroraCyan: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
  auroraPink: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
};

export default gradients;