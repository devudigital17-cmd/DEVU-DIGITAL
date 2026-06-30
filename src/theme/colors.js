// Design token system — single source of truth for all colors
export const colors = {
  // Base
  bg: {
    primary: "#050508",
    secondary: "#0a0a0f",
    elevated: "#0f0f1a",
    card: "rgba(255,255,255,0.03)",
    cardHover: "rgba(255,255,255,0.06)",
  },

  // Brand accent
  accent: {
    purple: "#7c3aed",
    purpleLight: "#a78bfa",
    blue: "#3b82f6",
    blueLight: "#93c5fd",
    cyan: "#06b6d4",
    pink: "#ec4899",
  },

  // Text
  text: {
    primary: "#f8fafc",
    secondary: "#94a3b8",
    muted: "#475569",
    accent: "#a78bfa",
  },

  // Border
  border: {
    subtle: "rgba(255,255,255,0.06)",
    default: "rgba(255,255,255,0.10)",
    accent: "rgba(124,58,237,0.4)",
  },

  // Gradients (as CSS strings)
  gradient: {
    brand: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
    hero: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)",
    card: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(59,130,246,0.08) 100%)",
    glow: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)",
  },
};

export default colors;