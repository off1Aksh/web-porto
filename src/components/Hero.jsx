"use client";

import { ArrowDown, Mail, Download } from "lucide-react";
import { heroStyles as styles } from "@/styles/themeStyles";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      {/* Background Effects */}
      <div className={styles.bgGradient} />
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.greeting}>• My Portfolio •</p>

        <h1 className={styles.name}>
          Akasha <span className={styles.nameHighlight}>Bin Ali</span>
        </h1>

        <p className={styles.role}>
          Web Full-Stack Developer • IoT • AI Enthusiast
        </p>

        <p className={styles.bio}>
          Bachelor's Graduate in Applied Computer Engineering Technology from Politeknik Negeri Semarang with GPA 3.63.
          Proficient in software development (Full-Stack Web & Mobile Development),
          artificial intelligence (Machine Learning / Deep Learning), IoT, and system architecture.
          Experienced in designing and implementing full-scale applications using React.js, React Native,
          Laravel, Flask, and Python, as well as AI model integration (LSTM & MobileNetV2). Professional internship experience
          in IT Support & Software Development. Ready to contribute professionally in the technology industry.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>
            <ArrowDown size={18} />
            View Project Portfolio
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
