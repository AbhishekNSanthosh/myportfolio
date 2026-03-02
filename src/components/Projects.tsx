"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "TEDxCCET",
    description:
      "Built a full-stack web application with Next.js, managing both frontend and backend. Developed an admin dashboard with analytics, mailing, support tickets, and Razorpay integration. Achieved a 40% improvement in page load times and ensured full responsiveness.",
    link: "https://www.tedxccet.in",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Nginx"],
    gradient: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Mulearn",
    description:
      "Worked collaboratively to implement multiple API integrations including complex data connections with the Kerala Government platform. Refactored legacy code, boosting efficiency by 30%. Achieved 35% faster load times for an application serving 49,000+ active users.",
    link: "https://app.mulearn.org",
    tech: ["React", "TypeScript", "Formik", "Chakra UI"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "NSS HSS",
    description:
      "Built an SEO-optimized website using Next.js to enhance the school's online presence. Optimized responsiveness and load performance across devices. Deployed on Firebase, cutting server costs by 30% and boosting discoverability with structured metadata.",
    link: "https://www.nsshsskavalam.in",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-100 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Showcasing some of my best work in full-stack development, from
              high-performance landing pages to complex data-driven dashboards.
            </p>
          </div>
          <a
            href="https://github.com/AbhishekNSanthosh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 text-slate-200 transition-colors w-max glass-button"
          >
            <Github size={18} />
            View all on GitHub
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`glass-panel h-full rounded-3xl p-8 flex flex-col relative group transition-all duration-500 hover:-translate-y-2 border border-zinc-800 ${project.border} overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.gradient} rounded-bl-full opacity-50 transition-opacity duration-500 group-hover:opacity-100 blur-2xl`}
                ></div>

                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all duration-500">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-950/50 border border-zinc-800 rounded-full text-xs font-medium text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-800/50">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
