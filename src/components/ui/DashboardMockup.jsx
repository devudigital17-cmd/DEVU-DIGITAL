import { motion } from "framer-motion";

// Mini dashboard mockup used as a visual decoration in sections
const DashboardMockup = ({ className = "" }) => {
  const barData = [65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 88];
  const linePoints = [40, 55, 45, 70, 60, 80, 65, 85, 72, 90, 78, 95];

  const maxBar = Math.max(...barData);

  return (
    <div
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "#0a0a12",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-[10px] font-semibold text-white">Analytics</span>
        </div>
        <div className="flex gap-1">
          {["7D", "1M", "1Y"].map((t, i) => (
            <span
              key={t}
              className="text-[8px] px-2 py-0.5 rounded-full"
              style={{
                background: i === 1 ? "rgba(124,58,237,0.3)" : "transparent",
                color: i === 1 ? "#a78bfa" : "#475569",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "$124K", delta: "+18%", color: "#10b981" },
            { label: "Users", value: "48.2K", delta: "+12%", color: "#3b82f6" },
            { label: "Conv.", value: "4.7%", delta: "+0.8%", color: "#7c3aed" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="p-2 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p className="text-[7px] text-slate-500 mb-0.5">{kpi.label}</p>
              <p className="text-[11px] font-bold text-white">{kpi.value}</p>
              <p className="text-[7px] font-medium" style={{ color: kpi.color }}>
                {kpi.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div>
          <p className="text-[7px] text-slate-500 uppercase tracking-widest mb-2">
            Monthly Revenue
          </p>
          <div className="flex items-end gap-1 h-16">
            {barData.map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ height: 0 }}
                animate={{ height: `${(val / maxBar) * 100}%` }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background:
                    i === barData.length - 1
                      ? "linear-gradient(to top, #7c3aed, #a78bfa)"
                      : "rgba(124,58,237,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Line chart (SVG sparkline) */}
        <div>
          <p className="text-[7px] text-slate-500 uppercase tracking-widest mb-2">
            User Growth
          </p>
          <svg viewBox="0 0 120 40" className="w-full" style={{ height: "40px" }}>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d={`M ${linePoints.map((v, i) => `${(i / (linePoints.length - 1)) * 120},${40 - (v / 100) * 38}`).join(" L ")} L 120,40 L 0,40 Z`}
              fill="url(#lineGrad)"
            />
            {/* Line */}
            <polyline
              points={linePoints
                .map((v, i) => `${(i / (linePoints.length - 1)) * 120},${40 - (v / 100) * 38}`)
                .join(" ")}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* End dot */}
            <circle
              cx="120"
              cy={40 - (linePoints[linePoints.length - 1] / 100) * 38}
              r="2.5"
              fill="#3b82f6"
            />
          </svg>
        </div>

        {/* Recent activity list */}
        <div className="flex flex-col gap-1">
          {[
            { name: "New project", time: "2m ago", dot: "#10b981" },
            { name: "Client signed", time: "1h ago", dot: "#7c3aed" },
            { name: "Invoice sent", time: "3h ago", dot: "#3b82f6" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-1"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.dot }}
                />
                <span className="text-[8px] text-slate-300">{item.name}</span>
              </div>
              <span className="text-[7px] text-slate-600">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;