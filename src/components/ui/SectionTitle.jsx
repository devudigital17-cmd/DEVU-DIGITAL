import { motion } from "framer-motion";
import Badge from "./Badge";
import { fadeUp, blurReveal, viewport } from "../../hooks/animations";

// Reusable section header with badge + title + subtitle
const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
}) => {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col gap-4 ${alignClass[align]} ${className}`}>
      {badge && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Badge variant="gradient" dot>
            {badge}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        variants={blurReveal}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          style={{ transitionDelay: "0.1s" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;