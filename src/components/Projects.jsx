"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink } from "lucide-react";
import { projectsStyles as styles } from "@/styles/themeStyles";

const projectsData = [
  {
    id: "intern-ticketing",
    title: "IT Support Ticketing & Inventory System",
    category: "Full-Stack & AI Automation",
    description:
      "Sistem Ticketing & Manajemen Inventaris IT Support berskala enterprise di PT Dtech Inovasi Indonesia untuk memecahkan masalah pelaporan kendala teknis yang sebelumnya tidak terstruktur karena hanya mengandalkan pesan manual WhatsApp.\n\nSebagai solusi, kami membangun aplikasi full-stack menggunakan antarmuka responsif berbasis React.js dan backend Laravel 12, lengkap dengan restrukturisasi keamanan memakai JWT dan Google OAuth untuk mengatasi kendala integrasi API antar layanan.\n\nUntuk memastikan adaptasi pengguna yang mulus tanpa mengubah kebiasaan lama, sistem ini diintegrasikan dengan workflow automation N8N dan chatbot agen AI DeepSeek, sehingga karyawan dapat membuat tiket pelaporan secara otomatis hanya dengan mengirim pesan WhatsApp.\n\nSelain itu, sistem ini berhasil mendigitalisasi manajemen aset perusahaan melalui pelacakan inventaris berbasis pemindaian QR Code yang terhubung langsung dengan dashboard analitik komprehensif untuk memantau performa teknisi dan riwayat aset secara real-time.",
    tags: ["React.js", "Laravel 12", "JWT / OAuth", "N8N Automation", "DeepSeek AI", "QR Code", "PostgreSQL"],
    images: [
      { src: "/projects/INTERN 1.png", alt: "Admin Dashboard IT Support Ticket & Inventory" },
      { src: "/projects/INTERN 2.png", alt: "Portal Submit Ticket Request Pengguna" },
    ],
  },
  {
    id: "pangan-predict",
    title: "PanganPredict: Deteksi & Prediksi Harga Komoditas",
    category: "AI Computer Vision & Time-Series",
    description:
      "Untuk mengatasi masalah fluktuasi harga bahan pokok di Jawa Tengah yang sering naik-turun dan sulit ditebak, saya menciptakan PanganPredict, sebuah ekosistem aplikasi pintar berbasis Kecerdasan Buatan (AI) yang tersedia untuk website dan mobile.\n\nAplikasi ini sangat mudah digunakan, pengguna cukup memfoto sembako menggunakan kamera ponsel, lalu sistem akan otomatis mengenali jenis barang tersebut dengan akurasi pengenalan gambar di atas 95%, menampilkan harga saat ini, serta meramalkan pergerakan harganya untuk 7 hari ke depan.\n\nDi balik kemudahan tersebut, PanganPredict ditenagai oleh teknologi AI tangguh yang telah saya latih secara khusus menggunakan data historis pergerakan harga selama 9 tahun terakhir, sehingga mampu membaca pola ekonomi dan menghasilkan prediksi harian yang sangat akurat.\n\nSeluruh hasil prediksi rumit ini kemudian disajikan melalui antarmuka yang modern dan grafik visual yang interaktif, menjadikannya alat bantu yang mudah dipahami oleh masyarakat awam maupun analis ekonomi.",
    tags: ["Computer Vision (AI)", "Time-Series Forecasting", "React Native / Web", "Python / FastAPI", "Machine Learning"],
    images: [
      { src: "/projects/PANGANPREDICT 1.png", alt: "Aplikasi PanganPredict Deteksi Bawang Putih & Prediksi Harga" },
      { src: "/projects/PANGANPREDICT 2.png", alt: "Dashboard Analisis & Tren Prediksi Harga Pangan" },
    ],
  },
  {
    id: "pbl-mmpi",
    title: "Platform Tes Psikologi MMPI-2 Online",
    category: "Web Application & Healthcare",
    description:
      "Untuk memfasilitasi pelaksanaan tes psikologi MMPI-2 yang dikenal sangat panjang karena berisi 567 pertanyaan, saya dan tim dalam Project Based Learning (PBL) mengembangkan sebuah platform tes psikologi berbasis website yang praktis dan mudah diakses.\n\nSebagai pengembang antarmuka (Frontend Developer) dalam proyek kolaboratif ini, fokus utama saya adalah memastikan peserta tes tidak merasa stres atau terbebani saat harus menjawab ratusan pertanyaan tersebut secara bertahap.\n\nSebagai solusinya, saya merancang dan membangun tampilan visual aplikasi yang sangat responsif, rapi, dan nyaman dioperasikan dari berbagai perangkat. Melalui desain yang modern dan ramah pengguna, platform ini tidak hanya membuat proses pengisian tes yang masif menjadi jauh lebih lancar dan ringan, tetapi juga mampu menyajikan hasil akhir berupa analisis profil kepribadian pengguna dengan tampilan yang jelas dan informatif.",
    tags: ["Laravel", "PHP", "Responsive UI", "Tailwind / Bootstrap", "Assessment System"],
    images: [
      { src: "/projects/PBL 1.png", alt: "Halaman Utama Portal Tes Psikologi MMPI-2 Online" },
      { src: "/projects/PBL 2.png", alt: "Antarmuka Lembar Pertanyaan Ujian Psikotes Online" },
    ],
  },
  {
    id: "odoo-erp",
    title: "Sistem Enterprise Odoo ERP: Homework Screen Printing",
    category: "Enterprise System & CRM",
    description:
      "Untuk mendigitalisasi operasional bisnis perusahaan, saya berkontribusi dalam merancang dan mengembangkan sistem enterprise terintegrasi untuk Homework Screen Printing menggunakan platform Odoo.\n\nDalam proyek ini, saya berfokus penuh pada perancangan sistem dan pengembangan modul CRM (Customer Relationship Management).\n\nModul yang saya bangun berfungsi untuk mempermudah perusahaan dalam mengelola data pelanggan, melacak riwayat interaksi klien, dan menjaga hubungan komunikasi bisnis secara terpusat agar jauh lebih efektif dan terorganisir.",
    tags: ["Odoo ERP", "Python", "CRM Module", "Database PostgreSQL", "Business Process Optimization"],
    images: [
      { src: "/projects/ODOO 1.png", alt: "Landing Page & Web Portal Homework Screen Printing" },
      { src: "/projects/ODOO 2.png", alt: "Katalog Produk & Konfigurasi Pesanan Sablon Odoo" },
    ],
  },
  {
    id: "smart-parking",
    title: "Sistem Parkir Cerdas AIoT (Automatic License Plate Recognition)",
    category: "Artificial Intelligence of Things (AIoT)",
    description:
      "Untuk mengatasi masalah efisiensi, antrean, dan kebutuhan tenaga kerja manual pada sistem parkir tradisional, saya berpartisipasi dalam pengembangan Sistem Parkir Cerdas berbasis Artificial Intelligence of Things (AIoT).\n\nSistem ini bekerja secara otomatis tanpa campur tangan manusia. Ketika kendaraan mendekat, sensor ultrasonik akan mendeteksinya dan memicu kamera ESP32-CAM untuk mengambil gambar plat nomor kendaraan.\n\nGambar tersebut kemudian dikirim ke Virtual Private Server (VPS) dan diproses menggunakan teknologi PyTesseract dan OpenCV (Optical Character Recognition) untuk mengenali teks pada plat nomor secara presisi (dengan tingkat akurasi pengenalan mencapai 100% pada kondisi optimal).\n\nData plat yang terbaca lalu divalidasi ke database cloud Firebase secara real-time. Jika data valid, sistem akan langsung memerintahkan motor servo untuk membuka palang pintu gerbang dalam hitungan detik. Sistem terintegrasi ini terbukti mampu mempercepat alur parkir sekaligus memangkas biaya operasional.",
    tags: ["ESP32-CAM", "PyTesseract OCR", "OpenCV", "Firebase Cloud DB", "Servo Motor", "Ultrasonic Sensor"],
    images: [
      { src: "/projects/IOT PARKING 1.png", alt: "Skematik Rangkaian Hardware IoT Parkir Cerdas ESP32 & Display" },
      { src: "/projects/IOT PARKING 2.png", alt: "Pengujian OCR Pengenalan Plat Nomor Kendaraan Otomatis" },
    ],
  },
  {
    id: "smart-garbage",
    title: "Gerobak Sampah Pintar Berbasis IoT & Load Cell",
    category: "Embedded System & Hardware",
    description:
      "Untuk mencegah kelebihan muatan yang sering membuat gerobak konvensional cepat rusak, saya dan rekan saya merakit prototipe Gerobak Sampah Pintar berbasis perangkat keras dan IoT.\n\nSistem ini ditenagai oleh Arduino Nano dan empat sensor berat (load cell) untuk memantau kapasitas muatan secara real-time.\n\nJika berat sampah mencapai batas maksimal, panel kontrol yang kami rancang akan secara otomatis menyalakan lampu peringatan dan membunyikan alarm buzzer. Inovasi praktis ini memastikan gerobak lebih awet sekaligus membuat pekerjaan petugas pengumpul sampah menjadi jauh lebih aman, terukur, dan efisien.",
    tags: ["Arduino Nano", "Load Cell Sensors", "Buzzer Alarm", "Indicator Lights", "Hardware Prototyping"],
    images: [
      { src: "/projects/SMART GARBAGE 1.png", alt: "Prototipe Fisik Gerobak Sampah Pintar dengan Panel Kontrol" },
      { src: "/projects/SMART GARBAGE 2.png", alt: "Instalasi Sensor Berat Load Cell & Pengujian Beban" },
    ],
  },
];

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  const handlePrev = (projectId, totalImages, e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: (current - 1 + totalImages) % totalImages };
    });
  };

  const handleNext = (projectId, totalImages, e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: (current + 1) % totalImages };
    });
  };

  const openProjectModal = (project, imgIndex = 0) => {
    setSelectedProject(project);
    setModalImgIdx(imgIndex);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Portofolio Proyek Unggulan</h2>
        <div className={styles.headingAccent} />
        <p className={styles.subtitle}>
          Koleksi proyek nyata yang mencakup pengembangan sistem web enterprise, kecerdasan buatan (AI), hingga prototipe hardware IoT terpadu.
        </p>

        <div className={styles.grid}>
          {projectsData.map((project) => {
            const currentImgIdx = activeImageIndex[project.id] || 0;
            const currentImg = project.images[currentImgIdx];

            return (
              <div
                key={project.id}
                className={styles.card}
                onClick={() => openProjectModal(project, currentImgIdx)}
                title="Klik untuk melihat detail & foto proyek"
              >
                {/* Image Section with Carousel & Zoom */}
                <div className={styles.imageContainer}>
                  <span className={styles.categoryBadge}>{project.category}</span>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={currentImg.src}
                      alt={currentImg.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                      priority={project.id === "intern-ticketing"}
                    />
                  </div>

                  {/* Carousel Controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => handlePrev(project.id, project.images.length, e)}
                        className={styles.carouselBtnPrev}
                        aria-label="Gambar sebelumnya"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleNext(project.id, project.images.length, e)}
                        className={styles.carouselBtnNext}
                        aria-label="Gambar berikutnya"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Dots Indicator */}
                      <div className={styles.dotsContainer}>
                        {project.images.map((_, idx) => (
                          <span
                            key={idx}
                            className={idx === currentImgIdx ? styles.dotActive : styles.dotInactive}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>

                    {/* Fixed 3-line clamp description - Card will never stretch */}
                    <p className={styles.cardDescription}>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className={styles.tagContainer}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className={styles.cardFooter}>
                    <span>Slide {currentImgIdx + 1} dari {project.images.length}</span>
                    <span className={styles.linkButton}>
                      <Maximize2 size={13} />
                      Lihat Detail Proyek
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Project Detail & Image Preview Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeProjectModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeProjectModal}
              aria-label="Tutup detail proyek"
            >
              <X size={20} />
            </button>

            <div className={styles.modalScrollArea}>
              {/* Image Preview Container with Switcher */}
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedProject.images[modalImgIdx]?.src || selectedProject.images[0].src}
                  alt={selectedProject.images[modalImgIdx]?.alt || selectedProject.title}
                  width={1200}
                  height={800}
                  className={styles.modalImage}
                />
              </div>

              {/* Modal Content Details */}
              <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                </div>

                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>

                {/* Thumbnails to Switch Image */}
                {selectedProject.images.length > 1 && (
                  <div>
                    <p className="text-xs text-slate-400 mb-2 font-mono">Pilih Tangkapan Layar:</p>
                    <div className={styles.modalThumbnails}>
                      {selectedProject.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setModalImgIdx(idx)}
                          className={`${styles.modalThumbItem} ${idx === modalImgIdx ? styles.modalThumbActive : styles.modalThumbInactive
                            }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full Unclipped Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider text-purple-400">
                    Tentang Proyek:
                  </h4>
                  <p className={styles.modalDescription}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider text-emerald-400">
                    Teknologi & Alat:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
