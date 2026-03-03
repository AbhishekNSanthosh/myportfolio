"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { Code2, Database, Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    skills: ["JavaScript", "TypeScript", "Java", "C"],
  },
  {
    title: "Frontend Stack",
    icon: <Layout size={24} />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    title: "Backend Core",
    icon: <Server size={24} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
  },
  {
    title: "Databases & Tools",
    icon: <Database size={24} />,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    skills: ["MongoDB", "Firebase", "Git", "Postman", "Nginx", "DevOps basics"],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // GSAP floating animation for skill items
      const items = gsap.utils.toArray(".skill-item");
      items.forEach((item: any, i) => {
        gsap.to(item, {
          y: "random(-10, 10)",
          x: "random(-5, 5)",
          rotation: "random(-2, 2)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });
    }
  }, [isInView, controls]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="skills"
      className="py-32 relative bg-zinc-950/50"
      ref={containerRef}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <Wrench size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-100 mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My technology stack for building high-performance, scalable
            full-stack applications with beautiful user interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-panel p-8 rounded-3xl border ${category.bg} relative overflow-hidden group hover:bg-zinc-900/80 transition-colors`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl scale-150 group-hover:opacity-20 transition-opacity">
                {category.icon}
              </div>

              <div
                className={`w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center ${category.color} mb-6 shadow-sm border border-zinc-800`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-item px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-medium text-zinc-300 shadow-sm hover:border-zinc-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
