import { motion } from "framer-motion";
import { fadeUp, viewport } from "../../hooks/animations";

// Reusable glass card — wraps content in a consistent bordered container
const Card = ({
  children,
  className = "",
  animate = false,
  hover = false,
  padding = "default",
  variant = "default",
  delay = 0,
  onClick,
}) => {
  const paddings = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  };

  const variants = {
    default: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.07)",
    },
    accent: {
      background: "rgba(124,58,237,0.06)",
      border: "1px solid rgba(124,58,237,0.15)",
    },
    elevated: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    },
  };

  const base = (
    <div
      className={`rounded-2xl ${paddings[padding]} ${hover ? "hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200 cursor-pointer" : ""} ${className}`}
      style={variants[variant]}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ delay }}
        className={`rounded-2xl ${paddings[padding]} ${hover ? "hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200 cursor-pointer" : ""} ${className}`}
        style={variants[variant]}
        onClick={onClick}
        whileHover={hover ? { y: -2 } : {}}
      >
        {children}
      </motion.div>
    );
  }

  return base;
};

export default Card;