// Decorative blur circle used as ambient background accent
const BlurCircle = ({
  size = 400,
  color = "rgba(124,58,237,0.15)",
  top,
  left,
  right,
  bottom,
  className = "",
  blur = 80,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        top,
        left,
        right,
        bottom,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default BlurCircle;