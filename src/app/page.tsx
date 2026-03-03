"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  const handleSplashComplete = () => {
    setShowSplash(false);

    // Animate main content in after splash
    requestAnimationFrame(() => {
      const main = mainRef.current;
      if (!main) return;

      gsap.fromTo(
        main,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    });
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main
        ref={mainRef}
        className="min-h-screen selection:bg-indigo-500/30 px-[5vw]"
        style={{
          ...(showSplash
            ? { overflow: "hidden", height: "100vh", opacity: 0 }
            : {}),
        }}
      >
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-800/50 bg-zinc-950 text-center text-zinc-500 font-medium relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          <p className="hover:text-zinc-300 transition-colors">
            &copy; {new Date().getFullYear()} Abhishek Santhosh. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm text-zinc-600 flex items-center justify-center gap-2">
            Crafted with
            <span className="text-red-500 animate-pulse">&hearts;</span>
            using Next.js, Framer Motion & GSAP
          </p>
        </footer>
      </main>
    </>
  );
}
