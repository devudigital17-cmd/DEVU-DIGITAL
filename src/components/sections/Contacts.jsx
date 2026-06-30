import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// Keys loaded from .env — safe for GitHub
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fadeUp    = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger   = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport  = { once: true, margin: "-80px" };

const inputBase  = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" };
const inputFocus = { borderColor: "rgba(124,58,237,0.5)", boxShadow: "0 0 0 3px rgba(124,58,237,0.1)" };

export default function Contacts() {
  const formRef = useRef(null);
  const [form, setForm]       = useState({ name: "", email: "", budget: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle");
  const [focused, setFocused] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Tell us about your project";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    setErrors({});
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        budget:     form.budget || "Not specified",
        message:    form.message,
        reply_to:   form.email,
        to_name:    "Nexora Digital",
      }, PUBLIC_KEY);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const fieldStyle = (name) => ({ ...inputBase, ...(focused === name ? inputFocus : {}) });
  const baseInput  = "w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#050508" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-80 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-col gap-8">
            <SectionTitle badge="Get in touch" title={<>Let's build<br />something great.</>} subtitle="Fill out the form and we'll get back to you within 24 hours with a clear plan forward." align="left" />
            <motion.div variants={stagger} className="flex flex-col gap-3">
              {[
                { icon: Mail,   label: "Email us",      value: "lowrencedevu@gmail.com" },
                { icon: MapPin, label: "Location",      value: "Kakinada, AP, India"    },
                { icon: Clock,  label: "Response time", value: "Within 24 hours"        },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center gap-4 p-4 rounded-xl border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <Icon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-slate-200">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="p-5 rounded-2xl border" style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.12)" }}>
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">Founding client pricing</p>
              {[
                { range: "₹5K – ₹8K",  type: "Landing pages, brand identities" },
                { range: "₹8K – ₹20K", type: "Web apps, SaaS MVPs, e-commerce" },
                { range: "₹20K+",       type: "Full-scale platforms, custom systems" },
              ].map((b) => (
                <div key={b.range} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  <span className="text-sm font-semibold text-white">{b.range}</span>
                  <span className="text-xs text-slate-500">{b.type}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-2xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.25)" }}>
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">We received your message and will reply to <span className="text-white font-medium">{form.email}</span> within 24 hours.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", budget: "", message: "" }); }} className="mt-2 text-xs text-violet-400 hover:text-violet-300 transition-colors">Send another message</button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-lg font-semibold text-white mb-1">Start your project</h3>
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 p-3 rounded-xl border" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)" }}>
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-400 leading-relaxed">Something went wrong. Please email us at <a href="mailto:lowrencedevu@gmail.com" className="underline">lowrencedevu@gmail.com</a></p>
                    </motion.div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Your name</label>
                      <input className={baseInput} style={fieldStyle("name")} placeholder="Alex Johnson" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
                      {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
                      <input type="email" className={baseInput} style={fieldStyle("email")} placeholder="alex@company.com" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Budget range</label>
                    <select className={baseInput} style={fieldStyle("budget")} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} onFocus={() => setFocused("budget")} onBlur={() => setFocused("")}>
                      <option value=""          style={{ background: "#0d0d14" }}>Select a range</option>
                      <option value="₹5K–₹8K"  style={{ background: "#0d0d14" }}>₹5K – ₹8K (founding rate)</option>
                      <option value="₹8K–₹20K" style={{ background: "#0d0d14" }}>₹8K – ₹20K</option>
                      <option value="₹20K+"     style={{ background: "#0d0d14" }}>₹20K+</option>
                      <option value="Not sure"  style={{ background: "#0d0d14" }}>Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Project details</label>
                    <textarea className={baseInput} style={{ ...fieldStyle("message"), resize: "none" }} rows={4} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
                    {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60" style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}>
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }} />
                        Sending...
                      </span>
                    ) : <><Send size={14} /> Send message</>}
                  </button>
                  <p className="text-xs text-center text-slate-600">We reply within 24 hours · Your data is never shared</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}