"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-heading font-bold text-slate-100 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-sm group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
            A
          </span>
          <span>Abhishek.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-4 w-px bg-zinc-700"></div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AbhishekNSanthosh"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/abhishek-santhosh"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:reach.abhisheksanthosh@gmail.com"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-zinc-800 mt-2">
                <a
                  href="https://github.com/AbhishekNSanthosh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abhishek-santhosh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:reach.abhisheksanthosh@gmail.com"
                  className="text-zinc-400"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
