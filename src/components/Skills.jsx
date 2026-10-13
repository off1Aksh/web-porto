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

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Technical Skills</h2>
        <div className={styles.headingAccent} />
        <p className={styles.subtitle}>
          Mastery of integrated application development technology, AI integration, and IoT-based hardware automation.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className={styles.card}>
                <div>
                  <IconComponent size={32} className={styles.cardIcon} />
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <ul className={styles.skillList}>
                    {category.skills.map((skill) => (
                      <li key={skill} className={styles.skillItem}>
                        <span className={styles.skillDot} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
