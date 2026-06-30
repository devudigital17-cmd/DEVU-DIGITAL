import { motion } from "framer-motion";

// Premium button component with multiple variants
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5",
    outline:
      "border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;