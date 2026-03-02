"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const comp = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.fromTo(
        "#hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ["#title-1", "#title-2", "#title-3"],
          { opacity: 0, y: 40, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          "#hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-button",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-emerald-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-6 perspective-[1000px]">
            <div id="title-1" className="text-slate-100">
              Hi, I'm
            </div>
            <div id="title-2" className="text-gradient pb-2">
              Abhishek S.
            </div>
            <div
              id="title-3"
              className="text-3xl lg:text-5xl text-slate-400 mt-2"
            >
              Full Stack Developer
            </div>
          </h1>

          <p
            id="hero-desc"
            className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed"
          >
            Passionate full-stack developer with a backend focus, strong UI/UX
            sense, and cybersecurity experience. I build secure APIs, scalable
            systems, and pixel-perfect interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="hero-button glass-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all group"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="mailto:reach.abhisheksanthosh@gmail.com"
              className="hero-button glass-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-600 bg-zinc-900/50 text-slate-200 font-medium transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-button flex items-center gap-6 mt-12 pt-8 border-t border-zinc-800/50 w-full">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-100">1.5+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                Years Exp.
              </span>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-100">
                Next.js & React
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                Core Stack
              </span>
            </div>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end mt-12 lg:mt-0 hero-button">
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden glass-panel group p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
            <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center relative shadow-inner overflow-hidden">
              {/* Abstract visualization instead of an empty image since we might not have a photo */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-4 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg"
                  ></div>
                ))}
              </div>
              <Terminal
                size={120}
                className="text-zinc-700/50 relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-6 w-full px-6 flex justify-between items-center z-20">
                <div className="h-2 w-24 bg-indigo-500/50 rounded-full"></div>
                <div className="h-2 w-12 bg-cyan-500/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div
            className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <span className="text-3xl">🚀</span>
          </div>
          <div
            className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          >
            <span className="text-3xl">💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
