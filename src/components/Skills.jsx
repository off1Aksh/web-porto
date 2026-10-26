"use client";

import { motion } from "motion/react";
import { Code2, Server, Cpu } from "lucide-react";
import { skillsStyles as styles } from "@/styles/themeStyles";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend & Mobile",
    skills: [
      "React.js & Next.js",
      "Tailwind CSS",
      "JavaScript / TypeScript",
      "Responsive Web Design",
      "Figma UI/UX Prototyping",
    ],
  },
  {
    icon: Server,
    title: "Backend, AI & Database",
    skills: [
      "Laravel 12 / PHP",
      "Python / FastAPI / DeepSeek AI",
      "PostgreSQL, MySQL & Firebase",
      "RESTful API & JWT / OAuth",
      "n8n Workflow Automation",
    ],
  },
  {
    icon: Cpu,
    title: "IoT, Hardware & Tools",
    skills: [
      "ESP32-CAM & Arduino Nano",
      "OpenCV & PyTesseract OCR",
      "Ultrasonic & Load Cell Sensors",
      "MikroTik RouterOS",
      "Git, Docker & VPS Deployment",
    ],
  },
];

function SkillCard({ category, index }) {
  const IconComponent = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
      style={{ transform: "translateZ(0)" }}
      className={styles.card}
    >
      <div className={styles.iconWrapper}>
        <IconComponent size={20} className={styles.cardIcon} />
      </div>
      <h3 className={styles.cardTitle}>{category.title}</h3>
      <ul className={styles.skillList}>
        {category.skills.map((skill) => (
          <li key={skill} className={styles.skillItem}>
            <span className={styles.skillDot} />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.sectionLabel}>What I Work With</p>
          <h2 className={styles.heading}>Technical Skills</h2>
          <div className={styles.headingAccent} />
          <p className={styles.subtitle}>
            Mastery of integrated application development technology, AI integration, and IoT-based hardware automation.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
