"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Mail, Briefcase, CheckCircle, Users } from "lucide-react";
import { heroStyles as styles } from "@/styles/themeStyles";

const stats = [
  { value: "3+", label: "Years Experience", accent: false },
  { value: "10+", label: "Projects Built", accent: true },
  { value: "100%", label: "Client Satisfaction", accent: false },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left Column ── */}
          <div className={styles.leftCol}>
            {/* Badge Pill */}
            <motion.div {...fadeUp(0)} className={styles.badge}>
              <span className={styles.badgeDot} />
              Web, AI &amp; IoT Engineer
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.1)} className={styles.headline}>
              Building scalable{" "}
              <span className={styles.headlineAccent}>web applications</span>{" "}
              and intelligent systems
            </motion.h1>

            {/* Bio */}
            <motion.p {...fadeUp(0.2)} className={styles.bio}>
              Full-Stack Developer, AI Anthusiast &amp; AIoT Engineer. Freshgraduate of Politeknik Negeri Semarang
              with GPA 3.63. Proficient in React, Laravel, Python, Machine Learning, and embedded systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.3)} className={styles.buttonGroup}>
              <a href="#contact" className={styles.primaryButton}>
                <Briefcase size={17} />
                Start a Project
              </a>
              <a href="#projects" className={styles.secondaryButton}>
                See My Work
                <ArrowRight size={17} />
              </a>
            </motion.div>

            {/* Stats Row */}
            {/* <motion.div {...fadeUp(0.4)} className={styles.statsRow}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statNumber}>
                    {stat.accent
                      ? <span className={styles.statNumberAccent}>{stat.value}</span>
                      : stat.value
                    }
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={styles.rightCol}
          >
            <div className={styles.photoWrapper}>
              {/* Profile Photo Frame */}
              <div className={styles.photoFrame}>
                <Image
                  src="/profile.jpg"
                  alt="Profile Photo"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                />
                <div className={styles.photoGlow} />
              </div>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={styles.floatingBadge}
              >
                <div className={styles.floatingBadgeIcon}>
                  <CheckCircle size={16} />
                </div>
                <div className={styles.floatingBadgeText}>
                  <span className={styles.floatingBadgeValue}>GPA 3.63</span>
                  <span className={styles.floatingBadgeLabel}>Politeknik Negeri Semarang</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
