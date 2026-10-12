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
          Lulusan Sarjana Terapan Teknologi Rekayasa Komputer dari Politeknik Negeri Semarang dengan IPK 3.63.
          Memiliki keahlian dalam pengembangan perangkat lunak (Full-Stack Web & Mobile Development),
          kecerdasan buatan (Machine Learning / Deep Learning), IoT, serta arsitektur sistem.
          Berpengalaman merancang dan mengimplementasikan aplikasi skala penuh menggunakan React.js, React Native,
          Laravel, Flask, dan Python, serta integrasi model AI (LSTM & MobileNetV2). Memiliki pengalaman magang profesional
          di bidang IT Support & Software Development. Siap berkontribusi secara profesional di industri teknologi.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>
            <ArrowDown size={18} />
            Lihat Portofolio Proyek
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            <Mail size={18} />
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
