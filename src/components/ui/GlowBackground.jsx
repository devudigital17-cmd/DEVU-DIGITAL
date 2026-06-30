// Ambient background — aurora gradients, blur orbs, subtle grid, noise
const GlowBackground = ({ variant = "hero", className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Aurora blobs */}
      {variant === "hero" && (
        <>
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse, #7c3aed 0%, #3b82f6 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
            style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
          />
        </>
      )}

      {variant === "section" && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }}
        />
      )}

      {variant === "dark" && (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />
    </div>
  );
};

export default GlowBackground;