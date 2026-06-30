import { motion } from "framer-motion";

// Premium badge / pill label component
const Badge = ({ children, variant = "default", dot = false, className = "" }) => {
  const variants = {
    default:
      "bg-white/5 border border-white/10 text-slate-300",
    accent:
      "bg-violet-500/10 border border-violet-500/25 text-violet-300",
    blue:
      "bg-blue-500/10 border border-blue-500/25 text-blue-300",
    green:
      "bg-emerald-500/10 border border-emerald-500/25 text-emerald-300",
    amber:
      "bg-amber-500/10 border border-amber-500/25 text-amber-300",
    pink:
      "bg-pink-500/10 border border-pink-500/25 text-pink-300",
    gradient:
      "bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/25 text-violet-200",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm ${variants[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </motion.span>
  );
};

export default Badge;