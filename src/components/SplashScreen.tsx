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
      // Counter animation
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 100,
        duration: 3.0,
        ease: "power1.inOut",
        onUpdate: () => setCount(Math.floor(counterObj.val)),
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // === EXIT SEQUENCE ===
          const exit = gsap.timeline({ onComplete });

          // Flash white
          exit.to(".splash-flash", {
            opacity: 1,
            duration: 0.15,
            ease: "power4.in",
          });

          // Bars slide away (cinematic wipe)
          exit
            .to(
              ".splash-bar-top",
              {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut",
              },
              0.1
            )
            .to(
              ".splash-bar-bottom",
              {
                yPercent: 100,
                duration: 0.8,
                ease: "power4.inOut",
              },
              0.1
            );

          // Flash fades
          exit.to(
            ".splash-flash",
            {
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            0.2
          );
        },
      });

      // === ENTRANCE SEQUENCE ===

      // Phase 1: Lens flare / anamorphic streak
      tl.fromTo(
        ".splash-streak",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        }
      );

      // Phase 2: Central glow blooms
      tl.fromTo(
        ".splash-glow",
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Phase 3: Name reveal with mask wipe
      tl.fromTo(
        ".splash-name-mask",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.0,
          ease: "power3.inOut",
        },
        "-=0.6"
      );

      // Phase 4: Underline draws across
      tl.fromTo(
        ".splash-underline",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Phase 5: Tagline fades in with blur
      tl.fromTo(
        ".splash-tagline",
        { opacity: 0, y: 15, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Phase 6: Progress bar fills
      tl.fromTo(
        ".splash-progress-track",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        "-=0.6"
      );

      tl.fromTo(
        ".splash-progress-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=0.4"
      );

      // Phase 7: Corner brackets appear
      tl.fromTo(
        ".splash-bracket",
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=1.0"
      );

      // Hold briefly
      tl.to({}, { duration: 0.4 });

      // Ambient glow pulse
      gsap.to(".splash-glow", {
        scale: 1.1,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Streak shimmer
      gsap.to(".splash-streak-shimmer", {
        xPercent: 200,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Split background bars for cinematic wipe exit */}
      <div className="splash-bar-top absolute top-0 left-0 right-0 h-1/2 bg-zinc-950 z-[1]" />
      <div className="splash-bar-bottom absolute bottom-0 left-0 right-0 h-1/2 bg-zinc-950 z-[1]" />

      {/* White flash overlay */}
      <div className="splash-flash absolute inset-0 bg-white z-[3] opacity-0 pointer-events-none" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content layer */}
      <div className="relative z-[2] flex flex-col items-center gap-6">
        {/* Anamorphic lens streak */}
        <div className="splash-streak absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[2px] origin-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
          <div className="splash-streak-shimmer absolute -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Central glow */}
        <div className="splash-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/8 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Name with mask reveal */}
        <div className="splash-name-mask">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
              ABHISHEK
            </span>
          </h1>
        </div>

        {/* Underline accent */}
        <div className="splash-underline w-24 md:w-32 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left" />

        {/* Tagline */}
        <p className="splash-tagline text-zinc-500 text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
          Full Stack Developer
        </p>

        {/* Progress bar */}
        <div className="splash-progress-track mt-6 w-48 md:w-56 flex flex-col items-center gap-3">
          <div className="w-full h-[1px] bg-zinc-800/60 rounded-full overflow-hidden">
            <div className="splash-progress-fill h-full bg-gradient-to-r from-indigo-500/80 to-cyan-500/80 origin-left rounded-full" />
          </div>
          <span className="text-zinc-600 text-[10px] font-mono tabular-nums tracking-widest">
            {String(count).padStart(3, "0")}
          </span>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="splash-bracket absolute top-6 left-6 w-8 h-8 border-l border-t border-zinc-700/50 z-[2]" />
      <div className="splash-bracket absolute top-6 right-6 w-8 h-8 border-r border-t border-zinc-700/50 z-[2]" />
      <div className="splash-bracket absolute bottom-6 left-6 w-8 h-8 border-l border-b border-zinc-700/50 z-[2]" />
      <div className="splash-bracket absolute bottom-6 right-6 w-8 h-8 border-r border-b border-zinc-700/50 z-[2]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
