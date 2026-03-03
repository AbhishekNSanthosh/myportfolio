"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const codeLines = [
  { indent: 0, text: "const dev = {", color: "text-indigo-400" },
  { indent: 1, text: 'name: "Abhishek S",', color: "text-emerald-400" },
  { indent: 1, text: 'role: "Full Stack Dev",', color: "text-cyan-400" },
  { indent: 1, text: 'stack: ["Next", "React"],', color: "text-amber-400" },
  { indent: 1, text: "available: true,", color: "text-emerald-300" },
  { indent: 0, text: "};", color: "text-indigo-400" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          "#hero-badge",
          ".hero-title-line",
          "#hero-desc",
          ".hero-cta",
          ".hero-stat-item",
          ".hero-terminal",
          ".hero-float-el",
          ".hero-code-line",
          ".hero-terminal-bar",
        ],
        { opacity: 0 }
      );

      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: "power3.out" },
      });

      // Background orbs
      tl.fromTo(
        ".hero-bg-orb",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          stagger: 0.15,
          ease: "power2.out",
        }
      );

      // Badge
      tl.fromTo(
        "#hero-badge",
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
        0.3
      );

      // Title lines — clip-path reveal
      tl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 45, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
        },
        0.5
      );

      // Description
      tl.fromTo(
        "#hero-desc",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65 },
        1.0
      );

      // CTA buttons
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 18, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "back.out(1.4)",
        },
        1.15
      );

      // Stats
      tl.fromTo(
        ".hero-stat-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        1.3
      );

      // Terminal
      tl.fromTo(
        ".hero-terminal",
        { opacity: 0, scale: 0.88, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power3.out" },
        0.6
      );

      // Terminal bar
      tl.fromTo(
        ".hero-terminal-bar",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0.9
      );

      // Code lines
      tl.fromTo(
        ".hero-code-line",
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.08,
          ease: "power2.out",
        },
        1.05
      );

      // Floating elements
      tl.fromTo(
        ".hero-float-el",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.1,
          ease: "back.out(2)",
        },
        1.5
      );

      // --- Ambient loops ---
      gsap.to(".hero-bg-orb-1", {
        x: 35,
        y: -25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-bg-orb-2", {
        x: -30,
        y: 20,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-float-1", {
        y: -10,
        rotation: 3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-float-2", {
        y: 8,
        rotation: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
      gsap.to(".hero-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Background — overflow hidden only on this layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-bg-orb hero-bg-orb-1 absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[130px] -translate-x-1/2" />
        <div className="hero-bg-orb hero-bg-orb-2 absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[130px] translate-x-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="w-full grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center z-10">
        {/* Left — Text */}
        <div className="flex flex-col items-start">
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-medium text-emerald-400 mb-7 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="font-heading font-extrabold tracking-tight leading-[1.08] mb-7">
            <div className="hero-title-line text-slate-100 text-5xl lg:text-7xl">
              Hi, I&apos;m
            </div>
            <div className="hero-title-line text-gradient text-5xl lg:text-7xl pb-1">
              Abhishek S.
            </div>
            <div className="hero-title-line text-2xl lg:text-4xl text-zinc-400 mt-2 font-bold">
              Full Stack Developer
            </div>
          </h1>

          <p
            id="hero-desc"
            className="text-base lg:text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed"
          >
            Passionate full-stack developer with a backend focus, strong UI/UX
            sense, and cybersecurity experience. I build secure APIs, scalable
            systems, and pixel-perfect interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="hero-cta inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 transition-all duration-300 group"
            >
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:reach.abhisheksanthosh@gmail.com"
              className="hero-cta inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 text-slate-200 font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/60"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 pt-6 border-t border-zinc-800/50 w-full">
            <div className="hero-stat-item flex flex-col">
              <span className="text-xl font-bold text-slate-100">1.5+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">
                Years Exp.
              </span>
            </div>
            <div className="hero-stat-item w-px h-8 bg-zinc-800" />
            <div className="hero-stat-item flex flex-col">
              <span className="text-xl font-bold text-slate-100">
                Next.js & React
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">
                Core Stack
              </span>
            </div>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="relative justify-self-center lg:justify-self-end">
          <div className="hero-terminal relative w-full max-w-[360px] lg:w-[380px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-black/50 backdrop-blur-sm">
            {/* Terminal bar */}
            <div className="hero-terminal-bar flex items-center gap-2 px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/70">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-2 text-[11px] text-zinc-500 font-mono">
                portfolio.ts
              </span>
            </div>

            {/* Code */}
            <div className="p-4 lg:p-5 font-mono text-[13px] leading-7 whitespace-nowrap">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="hero-code-line flex"
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <span className="text-zinc-700 select-none w-5 text-right mr-3 text-[11px] leading-7">
                    {i + 1}
                  </span>
                  <span className={line.color}>{line.text}</span>
                </div>
              ))}
              <div className="flex items-center mt-1">
                <span className="text-zinc-700 select-none w-5 text-right mr-3 text-[11px] leading-7">
                  7
                </span>
                <span className="hero-cursor w-2 h-4 bg-indigo-400/80 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Floating badges — positioned inside the safe area */}
          <div className="hero-float-el hero-float-1 absolute -top-3 right-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-zinc-300">
              deployed
            </span>
          </div>
          <div className="hero-float-el hero-float-2 absolute -bottom-3 left-4 glass-panel px-3 py-2 rounded-xl z-10">
            <span className="text-[11px] font-mono text-cyan-400">
              $ npm run dev
            </span>
          </div>

          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/8 to-cyan-500/8 rounded-3xl blur-2xl -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
