"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Innodots Innovations Pvt Ltd",
    location: "Trivandrum, KL",
    period: "July 2025 - Present",
    description: [
      "Developing cross-platform mobile apps with React Native for Android and iOS.",
      "Building scalable full-stack applications with Next.js.",
      "Implementing secure authentication, APIs, and optimized data handling.",
      "Delivering responsive and pixel-perfect UI/UX using Tailwind CSS and modern libraries.",
    ],
    tech: ["React Native", "Next.js", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "IEEE Computer Society, Kerala Section",
    location: "Kerala",
    period: "January 2024 - January 2025",
    description: [
      "Developed and optimized websites for major events, improving performance by 40%.",
      "Collaborated with cross-functional teams to deliver responsive, user-friendly platforms for statewide events.",
    ],
    tech: ["React", "Node.js", "Next.js"],
  },
  {
    role: "Frontend Developer",
    company: "Mulearn, GTech",
    location: "Kerala",
    period: "May 2023 - December 2023",
    description: [
      "Built responsive, scalable platforms (mulearn.org & app.mulearn.org) serving 49K+ members across Kerala.",
      "Led frontend with React, Vite, TypeScript, Chakra UI, and APIs to enhance performance and functionality.",
    ],
    tech: ["React", "Vite", "TypeScript", "Chakra UI"],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-100 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            My journey in building scalable systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent -translate-x-1/2 origin-top hidden md:block"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 relative items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-0 w-8 h-8 rounded-full bg-zinc-950 border-2 border-indigo-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "text-left" : "md:text-right"}`}
                >
                  <div className="glass-panel p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col gap-2 mb-6">
                      <div
                        className={`flex items-center gap-2 text-indigo-400 font-medium ${index % 2 === 0 ? "" : "md:justify-end"}`}
                      >
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                      <div
                        className={`flex flex-wrap gap-4 text-sm text-zinc-500 ${index % 2 === 0 ? "" : "md:justify-end"}`}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`space-y-3 mb-6 text-zinc-400 text-sm leading-relaxed ${index % 2 === 0 ? "pl-5 list-disc" : "md:pr-5 md:list-none md:text-right pl-5 list-disc"}`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}
                    >
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty Space for layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
