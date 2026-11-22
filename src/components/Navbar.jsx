"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";
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
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const cvDropdownRef = useRef(null);

  // Reset scroll position on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
        setCvDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    // Small delay untuk mobile menu close animation
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        // Use Lenis smooth scroll if available
        if (window.lenis) {
          window.lenis.scrollTo(offsetPosition);
        } else {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  return (
    <nav
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
                onClick={(e) => handleLinkClick(e, link.href)}
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

          {/* Download CV - Right with Dropdown */}
          <div className="hidden md:block relative" ref={cvDropdownRef}>
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/50 rounded-lg transition-all duration-300 hover:bg-orange-500/5"
            >
              <Download size={16} />
              Download CV
              <ChevronDown size={16} className={`transition-transform duration-300 ${cvDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {cvDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl shadow-black/20 overflow-hidden z-50"
                >
                  <a
                    href="/cv.pdf"
                    download="CV_Akasha_Bin_Ali_ID.pdf"
                    onClick={() => setCvDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-orange-500/10 transition-colors"
                  >
                    <Download size={16} className="text-orange-400" />
                    CV Indonesia
                  </a>
                  <a
                    href="/cv_eng.pdf"
                    download="CV_Akasha_Bin_Ali_EN.pdf"
                    onClick={() => setCvDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-orange-500/10 transition-colors border-t border-white/5"
                  >
                    <Download size={16} className="text-orange-400" />
                    CV English
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl overflow-hidden pointer-events-auto"
          >
            <div className="px-4 py-4 space-y-1 relative z-50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === link.href
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CV Dropdown */}
              <div className="pt-2 border-t border-white/5">
                <div className="text-xs font-medium text-zinc-500 px-4 py-2">DOWNLOAD CV</div>
                <a
                  href="/cv.pdf"
                  download="CV_Akasha_Bin_Ali_ID.pdf"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-orange-500/5 transition-all duration-300"
                >
                  <Download size={18} className="text-orange-400" />
                  CV Indonesia
                </a>
                <a
                  href="/cv_eng.pdf"
                  download="CV_Akasha_Bin_Ali_EN.pdf"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-orange-500/5 transition-all duration-300"
                >
                  <Download size={18} className="text-orange-400" />
                  CV English
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
