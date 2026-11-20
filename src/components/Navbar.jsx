"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "certifications", "education", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#home" className="group flex items-center">
            <span className="text-xl font-bold text-white tracking-tight font-mono transition-all duration-300 group-hover:scale-105">
              &lt;<span className="text-orange-500 group-hover:text-orange-400 transition-colors">Akasha</span> /&gt;
            </span>
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  activeSection === link.href ? "text-orange-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                    activeSection === link.href ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Download CV - Right */}
          <a
            href="/cv.pdf"
            download="CV_Akasha_Bin_Ali.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/50 rounded-lg transition-all duration-300 hover:bg-orange-500/5"
          >
            <Download size={16} />
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download="CV_Akasha_Bin_Ali.pdf"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-orange-400 hover:text-orange-300 hover:bg-orange-500/5 transition-all duration-300"
                onClick={handleLinkClick}
              >
                <Download size={18} />
                Download CV
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
