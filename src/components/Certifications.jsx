"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Maximize2, X, CheckCircle2 } from "lucide-react";
import { certStyles as styles } from "@/styles/themeStyles";

const certificationsData = [
  {
    id: "big-data",
    title: "Big Data Analyst Associate",
    issuer: "Big Data Analytics",
    badge: "Big Data",
    description:
      "Certification that validates competencies in big data analytics, covering fundamental concepts, processing, and analysis of large-scale datasets.",
    image: "/certificates/big-data.png",
  },
  {
    id: "database-design",
    title: "Database Design",
    issuer: "Oracle Academy / Database Systems",
    badge: "Database",
    description:
      "Certification that demonstrates expertise in database architecture design, relational data modeling, and efficient data storage structure design.",
    image: "/certificates/database-design.png",
  },
  {
    id: "database-programming",
    title: "Database Programming with SQL",
    issuer: "Oracle Academy / SQL Mastery",
    badge: "SQL Programming",
    description:
      "Certification showing mastery of SQL (Structured Query Language) for managing, manipulating, and extracting information from relational databases.",
    image: "/certificates/database-programming.png",
  },
  {
    id: "toeic",
    title: "TOEIC - Listening & Reading",
    issuer: "ETS Global (Score: 785)",
    badge: "Score: 785",
    description:
      "International English proficiency certificate with a total score of 785, confirming professional-level communication ability in listening and reading contexts.",
    image: "/certificates/toeic.png",
  },
  {
    id: "mtcna",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik RouterOS",
    badge: "Networking",
    description:
      "MikroTik Certified Network Associate (MTCNA) certification that demonstrates expertise in RouterOS configuration, management, and network troubleshooting.",
    image: "/certificates/mtcna.png",
  },
];

function CertCard({ cert, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
      style={{ transform: "translateZ(0)" }}
      className={styles.card}
    >
      {/* Certificate Image Preview */}
      <div
        className={styles.imageContainer}
        onClick={() => onOpen(cert)}
        title="Click to enlarge certificate"
      >
        <span className={styles.badge}>{cert.badge}</span>
        <div className={styles.imageWrapper}>
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        <div>
          <p className={styles.issuer}>{cert.issuer}</p>
          <h3 className={styles.title}>{cert.title}</h3>
          <p className={styles.description}>{cert.description}</p>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.verifiedBadge}>
            <CheckCircle2 size={13} />
            Verified
          </span>
          <button
            type="button"
            onClick={() => onOpen(cert)}
            className={styles.viewBtn}
          >
            <Maximize2 size={13} />
            View Certificate
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [modalCert, setModalCert] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpenCert = (cert) => {
    setIsClosing(false);
    setModalCert(cert);
  };

  const handleCloseCert = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setModalCert(null);
      setIsClosing(false);
    }, 200);
  };

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.sectionLabel}>Credentials</p>
          <h2 className={styles.heading}>Certifications &amp; Licenses</h2>
          <div className={styles.headingAccent} />
          <p className={styles.subtitle}>
            Official recognition of competencies in data architecture, SQL engineering, computer networking, big data analytics, and global language proficiency.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {certificationsData.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} onOpen={handleOpenCert} />
          ))}
        </div>
      </div>

      {/* Modal Full Image Preview */}
      {modalCert && (
        <div
          className={isClosing ? styles.modalOverlayExit : styles.modalOverlay}
          onClick={handleCloseCert}
        >
          <div
            className={isClosing ? styles.modalContentExit : styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={handleCloseCert}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={modalCert.image}
                alt={modalCert.title}
                width={1200}
                height={800}
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalCaption}>
              <h4 className={styles.modalCaptionTitle}>{modalCert.title}</h4>
              <p className={styles.modalCaptionIssuer}>{modalCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
