import { motion } from "framer-motion";

// Glass floating card for Hero decorations
const FloatingCard = ({
  icon,
  label,
  sub,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute flex items-center gap-2.5 px-3 py-2.5 rounded-2xl backdrop-blur-xl border cursor-default select-none ${className}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span className="text-base leading-none">{icon}</span>
      <div>
        <p className="text-xs font-semibold text-white leading-none mb-0.5">{label}</p>
        {sub && <p className="text-[10px] text-slate-400 leading-none">{sub}</p>}
      </div>
    </motion.div>
  );
};

export default FloatingCard;