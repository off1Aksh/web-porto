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
      "Sertifikasi yang memvalidasi kompetensi dalam analitik big data, mencakup pemahaman konsep dasar, pengolahan, dan analisis kumpulan data berskala besar.",
    image: "/certificates/big-data.png",
  },
  {
    id: "database-design",
    title: "Database Design",
    issuer: "Oracle Academy / Database Systems",
    badge: "Database",
    description:
      "Sertifikasi yang membuktikan keahlian dalam merancang arsitektur basis data, pemodelan data relasional, dan penyusunan struktur penyimpanan data yang efisien.",
    image: "/certificates/database-design.png",
  },
  {
    id: "database-programming",
    title: "Database Programming with SQL",
    issuer: "Oracle Academy / SQL Mastery",
    badge: "SQL Programming",
    description:
      "Sertifikasi yang menunjukkan penguasaan bahasa SQL (Structured Query Language) untuk mengelola, memanipulasi, dan mengekstraksi informasi dari basis data relasional.",
    image: "/certificates/database-programming.png",
  },
  {
    id: "toeic",
    title: "TOEIC - Listening & Reading",
    issuer: "ETS Global (Skor: 785)",
    badge: "Score: 785",
    description:
      "Sertifikat kecakapan bahasa Inggris internasional dengan skor total 785, mengonfirmasi kemampuan komunikasi tingkat profesional dalam konteks listening dan reading.",
    image: "/certificates/toeic.png",
  },
  {
    id: "mtcna",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik RouterOS",
    badge: "Networking",
    description:
      "Sertifikasi MikroTik Certified Network Associate (MTCNA) yang membuktikan keahlian dalam konfigurasi, manajemen, dan pemecahan masalah jaringan menggunakan RouterOS.",
    image: "/certificates/mtcna.png",
  },
];

export default function Certifications() {
  const [modalCert, setModalCert] = useState(null);

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Sertifikasi & Lisensi</h2>
        <div className={styles.headingAccent} />
        <p className={styles.subtitle}>
          Pengakuan resmi atas kompetensi di bidang arsitektur data, rekayasa SQL, jaringan komputer, analitik big data, dan kecakapan bahasa global.
        </p>

        <div className={styles.grid}>
          {certificationsData.map((cert) => (
            <div key={cert.id} className={styles.card}>
              {/* Certificate Image Preview */}
              <div
                className={styles.imageContainer}
                onClick={() => setModalCert(cert)}
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
                    Terverifikasi
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalCert(cert)}
                    className={styles.viewBtn}
                  >
                    <Maximize2 size={13} />
                    Lihat Sertifikat
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
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-slate-700"
              onClick={() => setModalCert(null)}
              aria-label="Tutup preview"
            >
              <X size={20} />
            </button>
            <div className="relative w-full h-[65vh] max-h-[650px] bg-slate-950 flex items-center justify-center p-4">
              <Image
                src={modalCert.image}
                alt={modalCert.title}
                width={1200}
                height={800}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="p-4 bg-slate-900 text-center border-t border-slate-800">
              <h4 className="font-semibold text-white text-base">{modalCert.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{modalCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
