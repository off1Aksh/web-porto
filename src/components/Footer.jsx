import { Phone, Mail, MapPin } from "lucide-react";
import { footerStyles as styles } from "@/styles/themeStyles";

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

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/off1Aksh", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/akashabnali", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        {/* Top Contact Info */}
        <div className={styles.topSection}>
          <div>
            <p className={styles.sectionLabel}>Get In Touch</p>
            <h3 className={styles.contactTitle}>Let&apos;s Collaborate</h3>
            <p className={styles.contactText}>
              Open for full-time opportunities, freelance work, or collaboration on AI, Web Development, and IoT projects.
            </p>
          </div>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Mail size={16} className="text-orange-500 shrink-0" />
              <a href="mailto:akashabnali@gmail.com" className={styles.contactLink}>
                akashabnali@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className="text-orange-500 shrink-0" />
              <a href="tel:085956399344" className={styles.contactLink}>
                0859 5639 9344
              </a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} className="text-orange-500 shrink-0" />
              <span>Salatiga, Jawa Tengah, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.inner}>
          <p className={styles.copyright}>
            &copy; {currentYear} Akasha Bin Ali. All rights reserved.
          </p>

          <div className={styles.socialContainer}>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
