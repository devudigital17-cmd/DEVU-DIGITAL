import { motion } from "framer-motion";
import { fadeUp, viewport } from "../../hooks/animations";

const StatCard = ({ value, label, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={`text-center ${className}`}
    >
      <p className="text-3xl md:text-4xl font-bold text-white mb-1 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-slate-500">{label}</p>
    </motion.div>
  );
};

export default StatCard;