"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarStyles as styles } from "@/styles/themeStyles";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            &lt;<span className={styles.logoAccent}>Akasha</span> /&gt;
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.ctaLink}>
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={styles.mobileButton}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.mobileLink} onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
