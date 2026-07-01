import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import blog1 from "../../assets/blog/blog1.png";
import blog2 from "../../assets/blog/blog2.png";

const fadeUp  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, margin: "-80px" };

const POSTS = [
  {
    id: 1,
    title: "Why Your Startup's Website Is Costing You Customers",
    excerpt:
      "Most startup websites are built to ship fast, not to convert. The difference in outcome is massive—here's how to fix it.",
    date: "Jul 1, 2026",
    readTime: "6 min read",
    tag: "Strategy",
    tagColor: "#7c3aed",
    image: blog1,
    url: "https://devu17.blogspot.com/2026/06/why-your-startups-website-is-costing.html",
  },

  {
    id: 2,
    title: "The Motion Design Principles We Use on Every Project",
    excerpt:
      "Animation isn't decoration—it's communication. Learn how we use motion to make digital experiences feel alive.",
    date: "Jul 2, 2026",
    readTime: "7 min read",
    tag: "Design",
    tagColor: "#ec4899",
    image: blog2,
    url: "https://devu17.blogspot.com/",
  },

  {
    id: 3,
    title: "React + Tailwind CSS v4: What's Actually Different?",
    excerpt:
      "Tailwind CSS v4 introduces a completely new CSS-first workflow. Here's what changed and why it matters.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Engineering",
    tagColor: "#10b981",
   
    url: "https://devu17.blogspot.com/",
  },
];
const BlogCard = ({ post, featured = false }) => (
  <motion.a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeUp}
    className={`group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col ${featured ? "md:flex-row" : ""}`}
    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    {/* Visual top */}
    <div className={`relative ${featured ? "md:w-2/5 h-56 md:h-auto" : "h-56"} flex-shrink-0 overflow-hidden`}
      >
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="absolute top-4 left-4">
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
      style={{
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,.15)",
      }}
      >
      <Tag size={10} />
      {post.tag}
    </span>
  </div>
</div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 gap-3" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span>{post.date}</span>
        <span>·</span>
        <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
      </div>
      <h3 className="text-base font-semibold text-white leading-snug group-hover:text-violet-300 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-1">{post.excerpt}</p>
      <div className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 group-hover:gap-2 transition-all">
  Read Full article <ArrowUpRight size={12} />
      </div>
    </div>
  </motion.a>
);

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#07070d" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionTitle
              badge="Blog"
              title={<>Insights from<br />the build.</>}
              subtitle="Thoughts on design, engineering, and building digital products that actually work."
              align="left"
            />
            <a
  href="https://devu17.blogspot.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group shrink-0"
>
  View all posts
  <ArrowUpRight
    size={14}
    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
  />
</a>
          </div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
            className="grid md:grid-cols-3 gap-5"
          >
            {POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border"
            style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.15)" }}
          >
            <div>
              <p className="font-semibold text-white mb-1">Get articles in your inbox</p>
              <p className="text-sm text-slate-400">No spam. One email per week, max. Unsubscribe anytime.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-52 px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <button
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
