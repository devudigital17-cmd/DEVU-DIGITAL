// Mini website preview rendered inside the BrowserMockup
// This is a fully designed mini-site, not a dashboard
const WebsitePreview = () => {
  return (
    <div
      className="w-full h-full overflow-hidden text-white"
      style={{ background: "#07070d", fontFamily: "Inter, sans-serif" }}
    >
      {/* Mini Navbar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-[8px] font-bold text-white tracking-wide">DEVU</span>
        </div>
        <div className="hidden sm:flex gap-3">
          {["Services", "Work", "Contact"].map((l) => (
            <span key={l} className="text-[7px] text-slate-400">{l}</span>
          ))}
        </div>
        <div
          className="px-2 py-0.5 rounded-full text-[7px] font-semibold text-white"
          style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
        >
          Hire Us
        </div>
      </div>

      {/* Mini Hero */}
      <div
        className="relative px-4 py-5 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(124,58,237,0.3) 0%, transparent 70%)",
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full mb-2 text-[6px] font-medium text-violet-300"
          style={{
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse" />
          Award-Winning Agency
        </div>
        <h1 className="text-[13px] font-bold text-white leading-tight mb-1.5">
          We build digital<br />
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            products that convert.
          </span>
        </h1>
        <p className="text-[6.5px] text-slate-400 mb-3 max-w-[160px] mx-auto leading-relaxed">
          Premium React development & design for startups ready to scale.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div
            className="px-3 py-1 rounded-full text-[6.5px] font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
          >
            Start a Project
          </div>
          <div
            className="px-3 py-1 rounded-full text-[6.5px] text-slate-300"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            View Work →
          </div>
        </div>
      </div>

      {/* Services Row */}
      <div
        className="px-3 py-3 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p className="text-[6px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
          Services
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Web Dev", color: "#7c3aed", icon: "⬡" },
            { label: "UI/UX", color: "#ec4899", icon: "◈" },
            { label: "Motion", color: "#f59e0b", icon: "◎" },
            { label: "Branding", color: "#10b981", icon: "◆" },
            { label: "SEO", color: "#3b82f6", icon: "◉" },
            { label: "SaaS", color: "#8b5cf6", icon: "⬟" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-1.5 flex flex-col gap-0.5"
              style={{
                background: `${s.color}12`,
                border: `1px solid ${s.color}25`,
              }}
            >
              <span className="text-[8px]" style={{ color: s.color }}>
                {s.icon}
              </span>
              <span className="text-[6px] font-medium text-slate-300">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Cards */}
      <div
        className="px-3 py-3 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p className="text-[6px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
          Selected Work
        </p>
        <div className="flex gap-2 overflow-hidden">
          {[
            { name: "Luminary", cat: "SaaS", from: "#7c3aed", to: "#3b82f6" },
            { name: "Terra", cat: "E-Comm", from: "#10b981", to: "#06b6d4" },
            { name: "Volt", cat: "Agency", from: "#f59e0b", to: "#ef4444" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex-1 rounded-lg overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${p.from}55, ${p.to}33)`,
                border: "1px solid rgba(255,255,255,0.07)",
                minHeight: "42px",
              }}
            >
              <div className="p-1.5">
                <div
                  className="w-5 h-5 rounded mb-1"
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                />
                <p className="text-[6.5px] font-semibold text-white">{p.name}</p>
                <p className="text-[5.5px] text-slate-400">{p.cat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="flex items-center justify-around px-3 py-2 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(124,58,237,0.05)" }}
      >
        {[
          { v: "150+", l: "Projects" },
          { v: "98%", l: "Satisfaction" },
          { v: "4.9★", l: "Rating" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[8px] font-bold text-violet-300">{s.v}</p>
            <p className="text-[5.5px] text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitePreview;