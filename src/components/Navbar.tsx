"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-[#050507]/70 border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold gradient-text tracking-tight">
          KS.
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted hover:text-foreground px-4 py-2 rounded-full hover:bg-white/[0.04] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/KeerthiShree_TS_Resume.pdf"
            download="KeerthiShree_TS_Resume.pdf"
            className="ml-2 text-[13px] px-4 py-1.5 rounded-full border border-white/[0.08] text-muted hover:text-foreground hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="https://github.com/keerthishree20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-4 py-1.5 rounded-full border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden nav-blur bg-[#050507]/90 border-b border-white/[0.04] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/KeerthiShree_TS_Resume.pdf"
            download="KeerthiShree_TS_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm text-muted hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
