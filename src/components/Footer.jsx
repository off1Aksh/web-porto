"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const skillCategories = [
  "Web Development (Frontend & Backend)",
  "Mobile Development (React Native)",
  "Backend & API (Laravel, Flask, Node.js)",
  "Database & Data (MySQL, PostgreSQL)",
  "Machine Learning & AI",
  "Embedded Systems & IoT",
];

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Phone, href: "https://wa.me/6285956399344", label: "Phone" },
  { icon: Mail, href: "mailto:akashabnali@gmail.com", label: "Email" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/akashabnali", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/off1Aksh", label: "GitHub" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">

          {/* About Section */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="text-xl font-bold text-white tracking-tight font-mono">
                &lt;<span className="text-orange-500">Akasha</span> /&gt;
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Akasha Bin Ali</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Full-Stack Developer, AI Enthusiast & AIoT Engineer. Fresh graduate from Politeknik Negeri Semarang
              with a passion for building modern web applications, intelligent systems, and integrated IoT solutions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:akashabnali@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-colors text-sm group"
              >
                <Mail size={16} className="text-orange-400" />
                <span className="group-hover:translate-x-0.5 transition-transform">akashabnali@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin size={16} className="text-orange-400" />
                <span>Salatiga, Central Java, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">Skill Categories</h4>
            <ul className="space-y-3">
              {skillCategories.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-zinc-400 text-sm hover:text-zinc-300 transition-colors">
                  <span className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">Page Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            {/* Copyright & Tech Stack */}
            <div className="text-center">
              <p className="text-zinc-500 text-sm mb-1">
                © 2026 Akasha Bin Ali
              </p>
              <p className="text-zinc-600 text-xs">
                Dirancang dan dikembangkan dengan Next.js 16 & Tailwind CSS 4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
