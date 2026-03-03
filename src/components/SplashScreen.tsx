"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          const exitTl = gsap.timeline({ onComplete });

          exitTl
            .to(".splash-content", {
              scale: 0.8,
              opacity: 0,
              duration: 0.5,
              ease: "power3.in",
            })
            .to(
              ".splash-line-h",
              {
                scaleX: 3,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
              },
              "-=0.3"
            )
            .to(
              ".splash-line-v",
              {
                scaleY: 3,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
              },
              "-=0.6"
            )
            .to(
              ".splash-orb",
              {
                scale: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in",
              },
              "-=0.5"
            )
            .to(
              container,
              {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut",
              },
              "-=0.3"
            );
        },
      });

      // Counter animation
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 100,
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.floor(counterObj.val)),
      });

      // Phase 1: Lines shoot in
      tl.fromTo(
        ".splash-line-h",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power4.out",
        }
      )
        .fromTo(
          ".splash-line-v",
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.4"
        )

        // Phase 2: Central orb pulses in
        .fromTo(
          ".splash-orb",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.2"
        )

        // Phase 3: Logo letter reveal
        .fromTo(
          ".splash-letter",
          { y: 80, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.05,
            ease: "back.out(2)",
          },
          "-=0.4"
        )

        // Phase 4: Tagline slides in
        .fromTo(
          ".splash-tagline",
          { y: 30, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )

        // Phase 5: Particles burst
        .fromTo(
          ".splash-particle",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.6,
            duration: 0.5,
            stagger: { each: 0.03, from: "random" },
            ease: "power2.out",
          },
          "-=0.3"
        )

        // Phase 6: Counter bar fills
        .fromTo(
          ".splash-progress-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=1.2"
        )

        // Hold
        .to({}, { duration: 0.3 });
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  // Generate particle positions
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 0.5,
  }));

  const name = "ABHISHEK S.";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid lines */}
      {[20, 40, 60, 80].map((pos) => (
        <div
          key={`h-${pos}`}
          className="splash-line-h absolute h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent origin-center"
          style={{ top: `${pos}%`, left: 0, right: 0 }}
        />
      ))}
      {[20, 40, 60, 80].map((pos) => (
        <div
          key={`v-${pos}`}
          className="splash-line-v absolute w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent origin-center"
          style={{ left: `${pos}%`, top: 0, bottom: 0 }}
        />
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="splash-particle absolute rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}

      {/* Central glow orb */}
      <div className="splash-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="splash-content relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Name */}
        <div className="flex items-center gap-1 perspective-[1000px]">
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="splash-letter inline-block text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold"
              style={{
                color: char === " " ? "transparent" : undefined,
                width: char === " " ? "0.3em" : undefined,
              }}
            >
              {char !== " " && (
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400">
                  {char}
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div className="splash-tagline text-zinc-500 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
          Full Stack Developer
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-48 md:w-64 flex flex-col items-center gap-3">
          <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
            <div className="splash-progress-fill h-full bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left rounded-full" />
          </div>
          <span className="text-zinc-600 text-xs font-mono tabular-nums">
            {count}%
          </span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-zinc-800 splash-line-h" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-zinc-800 splash-line-v" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-zinc-800 splash-line-h" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-zinc-800 splash-line-v" />
    </div>
  );
}
