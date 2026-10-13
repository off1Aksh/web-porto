"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Maximize2, X, CheckCircle2 } from "lucide-react";
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
        <h2 className={styles.heading}>Certifications & Licenses</h2>
        <div className={styles.headingAccent} />
        <p className={styles.subtitle}>
          Official recognition of competencies in data architecture, SQL engineering, computer networking, big data analytics, and global language proficiency.
        </p>

        <div className={styles.grid}>
          {certificationsData.map((cert) => (
            <div key={cert.id} className={styles.card}>
              {/* Certificate Image Preview */}
              <div
                className={styles.imageContainer}
                onClick={() => handleOpenCert(cert)}
                title="Klik untuk memperbesar sertifikat"
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
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 size={13} />
                    Verified
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenCert(cert)}
                    className={styles.viewBtn}
                  >
                    <Maximize2 size={13} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
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
              aria-label="Tutup preview"
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
              <h4 className="font-semibold text-white text-base">{modalCert.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{modalCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
