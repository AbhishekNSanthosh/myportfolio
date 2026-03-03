"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Loader2 } from "lucide-react";

const projects = [
  {
    title: "GrabUrPass",
    description:
      "Event ticketing and management platform with public events listing, search, and infinite scrolling.",
    link: "https://www.graburpass.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "TEDxCCET",
    description:
      "Built a full-stack web application with Next.js, managing both frontend and backend. Developed an admin dashboard with analytics, mailing, support tickets, and Razorpay integration.",
    link: "https://www.tedxccet.in",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Mulearn",
    description:
      "Worked collaboratively to implement multiple API integrations including complex data connections with the Kerala Government platform.",
    link: "https://app.mulearn.org",
    tech: ["React", "TypeScript", "Formik", "Chakra UI"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Jhalak Aroha",
    description:
      "Event platform for Carmel CET, handling group events and individual scores.",
    link: "https://jhalak.carmelcet.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "ICIPETC & NCIPETC",
    description:
      "International and National Conference websites with details on dates, guidelines, and technical programs.",
    link: "https://icipetc.carmelcet.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-sky-500/20 to-cyan-500/20",
    border: "group-hover:border-sky-500/50",
  },
  {
    title: "Carmel Polytechnic",
    description:
      "Official college website and admissions portal for Carmel Polytechnic.",
    link: "https://www.carmelpoly.in",
    tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Sparkz",
    description:
      "Tech Fest website with robust event registrations and validation logic.",
    link: "https://sparkz.carmelcet.in",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "Edumate",
    description:
      "Admin management pages for departments, faculty, and educational resources.",
    link: "https://edumate-one.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-teal-500/20 to-emerald-500/20",
    border: "group-hover:border-teal-500/50",
  },
  {
    title: "NSS HSS Kavalam",
    description:
      "Built an SEO-optimized website using Next.js to enhance the school's online presence, along with an attendance portal.",
    link: "https://www.nsshsskavalam.in",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    gradient: "from-green-500/20 to-teal-500/20",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "OBCYFEST",
    description:
      "Fest management application for Carmel CET with dynamic event sections.",
    link: "https://obcyfest.carmelcet.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-lime-500/20 to-green-500/20",
    border: "group-hover:border-lime-500/50",
  },
  {
    title: "Easystore",
    description:
      "E-commerce store frontend prototype with responsive design features.",
    link: "https://easy-store-demo.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "group-hover:border-yellow-500/50",
  },
  {
    title: "KEAM Mock & Glimpse",
    description:
      "Mock test platform and admin dashboards for KEAM engineering aspirants.",
    link: "https://glimpsetokeam.carmelcet.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
  },
  {
    title: "IEEE SB CCET",
    description:
      "Dynamic website and internal tools for IEEE Student Branch at Carmel CET.",
    link: "https://dev-ieee-sb-ccet.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-sky-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Mindmate",
    description:
      "Mental health tracking application providing insights and features for user well-being.",
    link: "https://mindmate-delta.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "Scalex",
    description: "Department association or technical platform for Carmel CET.",
    link: "https://scalex.carmelcet.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Educcet Web",
    description: "Educational platform specifically built for CCET.",
    link: "https://educcet-web.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "group-hover:border-teal-500/50",
  },
  {
    title: "Note Nest",
    description:
      "Productive note-taking application designed for college students.",
    link: "https://note-nest-two.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "group-hover:border-yellow-500/50",
  },
  {
    title: "Imagin AI",
    description:
      "AI-based application interface allowing interaction with intelligent models.",
    link: "https://imagin-ai-dev.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Oronium",
    description:
      "Responsive web application designed for a sleek user experience.",
    link: "https://oronium-six.vercel.app",
    tech: ["Next.js", "React"],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Course Tube",
    description:
      "Educational course platform mimicking popular video streaming services.",
    link: "https://course-tube.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-red-500/20 to-rose-500/20",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Halospect",
    description:
      "Web platform featuring interactive contact pages and user profiles.",
    link: "https://halospect.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "Days To Us",
    description: "A countdown and milestone tracking web application.",
    link: "https://days-to-us.vercel.app",
    tech: ["Next.js", "React", "Framer Motion"],
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
  },
  {
    title: "React To-Do App",
    description:
      "A robust task management app integrating local storage and smooth animations.",
    link: "https://luv-todoapp.vercel.app",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    gradient: "from-indigo-500/20 to-violet-500/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "SNDP 1898",
    description:
      "Organizational website offering member management and events listing.",
    link: "https://sndp1898.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
  },
  {
    title: "Midnitcode",
    description:
      "SEO optimized coding platform and tutorial website with responsive UI.",
    link: "https://www.midnitcode.in",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "Rocknroll",
    description:
      "Entertainment and event management platform deployed for scale.",
    link: "https://rocknroll-ten.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-rose-500/20 to-red-500/20",
    border: "group-hover:border-rose-500/50",
  },
  {
    title: "Informatyka",
    description:
      "SEO optimized event website with modern typography and fast execution.",
    link: "https://informatyka4-0.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-purple-500/20 to-fuchsia-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "FlamesApp",
    description:
      "Fun and responsive entertainment app built for quick user interactions.",
    link: "https://flamesapp.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
  },
  {
    title: "AKCSSC",
    description: "Event ticketing and ticket sold out management platform.",
    link: "https://akcssc24.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "AboutThat",
    description:
      "Web application featuring comprehensive error handling modals and admin insights.",
    link: "https://aboutthat.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-teal-500/20",
    border: "group-hover:border-blue-500/50",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div
      className={`glass-panel h-full rounded-3xl flex flex-col relative group transition-all duration-500 hover:-translate-y-2 border border-zinc-800 ${project.border} overflow-hidden`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.gradient} rounded-bl-full opacity-50 transition-opacity duration-500 group-hover:opacity-100 blur-2xl z-0`}
      ></div>

      {/* Iframe Preview */}
      <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden border-b border-zinc-800/50">
        {/* Browser-style top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
          </div>
          <div className="flex-1 mx-2 px-3 py-1 bg-zinc-800/50 rounded-md text-[10px] text-zinc-500 truncate font-mono">
            {project.link}
          </div>
        </div>

        {/* Loading spinner */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-zinc-900">
            <Loader2 size={24} className="text-zinc-600 animate-spin" />
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={project.link}
          title={project.title}
          className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none mt-[30px]"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setIframeLoaded(true)}
        />

        {/* Hover overlay to visit site */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-30 flex items-center justify-center bg-zinc-950/0 hover:bg-zinc-950/60 transition-colors duration-300 group/link"
        >
          <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <ExternalLink size={14} />
            Visit Site
          </span>
        </a>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3
          className="text-xl font-bold text-slate-100 mb-2 block truncate w-full"
          title={project.title}
        >
          {project.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm mb-4">
          {project.description}
        </p>

        <div className="mt-auto flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="w-full mx-auto z-10 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
