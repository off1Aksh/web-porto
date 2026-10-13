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
      "Enterprise-scale IT Support Ticketing & Inventory Management System at PT Dtech Inovasi Indonesia to solve the problem of unstructured technical issue reporting that previously relied solely on manual WhatsApp messages.\n\nAs a solution, we built a full-stack application using a responsive React.js-based interface and Laravel 12 backend, complete with JWT-based security restructuring and Google OAuth to address API integration challenges across services.\n\nTo ensure smooth user adoption without changing old habits, this system integrates with N8N workflow automation and DeepSeek AI agent chatbot, allowing employees to create reports automatically by simply sending a WhatsApp message.\n\nAdditionally, the system successfully digitalizes company asset management through QR code-based inventory tracking that connects directly to a comprehensive analytics dashboard for real-time monitoring of technician performance and asset history.",
    tags: ["React.js", "Laravel 12", "JWT / OAuth", "N8N Automation", "DeepSeek AI", "QR Code", "PostgreSQL"],
    images: [
      { src: "/projects/INTERN 1.png", alt: "IT Support Ticket & Inventory Admin Dashboard" },
      { src: "/projects/INTERN 2.png", alt: "User Ticket Request Portal" },
    ],
  },
  {
    id: "pangan-predict",
    title: "PanganPredict: Commodity Price Detection & Forecasting",
    category: "AI Computer Vision & Time-Series",
    description:
      "To address frequent price fluctuations of staple foods in Central Java that are difficult to predict, I created PanganPredict, an intelligent AI-powered application available on web and mobile platforms.\n\nThe application is easy to use—users simply take a photo of staple goods with their mobile camera, and the system automatically recognizes the item type with image recognition accuracy above 95%, displays current prices, and forecasts price movements for the next 7 days.\n\nBehind this ease of use, PanganPredict is powered by robust AI that I trained specifically using 9 years of historical price movement data, enabling it to read economic patterns and produce highly accurate daily forecasts.\n\nAll this complex forecasting is presented through a modern interface and interactive visual graphics, making it an easy-to-understand tool for both laypeople and economic analysts.",
    tags: ["Computer Vision (AI)", "Time-Series Forecasting", "React Native / Web", "Python / FastAPI", "Machine Learning"],
    images: [
      { src: "/projects/PANGANPREDICT 2.png", alt: "PanganPredict Garlic Detection & Price Forecast App" },
      { src: "/projects/PANGANPREDICT 1.png", alt: "Price Analysis & Forecast Trend Dashboard" },
    ],
  },
  {
    id: "pbl-mmpi",
    title: "Online MMPI-2 Psychology Test Platform",
    category: "Web Application & Healthcare",
    description:
      "To facilitate the administration of the lengthy MMPI-2 psychology test containing 567 questions, my team and I developed a practical and easily accessible web-based psychology testing platform for our Project Based Learning (PBL).\n\nAs the Frontend Developer in this collaborative project, my main focus was to ensure test-takers do not feel stressed or burdened when answering hundreds of questions gradually.\n\nAs a solution, I designed and built a highly responsive, clean, and comfortable visual interface operable from various devices. Through a modern and user-friendly design, this platform not only makes the massive test-filling process much smoother and lighter, but also presents final personality profile analysis results in a clear and informative manner.",
    tags: ["Laravel", "PHP", "Responsive UI", "Tailwind / Bootstrap", "Assessment System"],
    images: [
      { src: "/projects/PBL 1.png", alt: "Online MMPI-2 Psychology Test Portal Homepage" },
      { src: "/projects/PBL 2.png", alt: "Online Psychology Test Question Interface" },
    ],
  },
  {
    id: "odoo-erp",
    title: "Enterprise Odoo ERP System: Homework Screen Printing",
    category: "Enterprise System & CRM",
    description:
      "To digitize business operations, I contributed to designing and developing an integrated enterprise system for Homework Screen Printing using the Odoo platform.\n\nIn this project, I focused entirely on system design and CRM (Customer Relationship Management) module development.\n\nThe module I built helps the company manage customer data, track client interaction history, and maintain centralized business communication for far more effective and organized relationship management.",
    tags: ["Odoo ERP", "Python", "CRM Module", "PostgreSQL Database", "Business Process Optimization"],
    images: [
      { src: "/projects/ODOO 1.png", alt: "Landing Page & Web Portal for Homework Screen Printing" },
      { src: "/projects/ODOO 2.png", alt: "Odoo Product Catalog & Order Configuration" },
    ],
  },
  {
    id: "smart-parking",
    title: "AIoT Smart Parking System (Automatic License Plate Recognition)",
    category: "Artificial Intelligence of Things (AIoT)",
    description:
      "To address efficiency, queueing, and manual labor requirements in traditional parking systems, I participated in developing an AIoT-based Smart Parking System.\n\nThis system operates automatically without human intervention. When a vehicle approaches, ultrasonic sensors detect it and trigger the ESP32-CAM camera to capture the vehicle's license plate image.\n\nThe image is then sent to a Virtual Private Server (VPS) and processed using PyTesseract and OpenCV (Optical Character Recognition) technology to recognize license plate text with high precision (100% accuracy under optimal conditions).\n\nThe recognized plate data is validated against a cloud Firebase database in real-time. If valid, the system immediately commands a servo motor to open the gate within seconds. This integrated system has proven to accelerate parking flow while reducing operational costs.",
    tags: ["ESP32-CAM", "PyTesseract OCR", "OpenCV", "Firebase Cloud DB", "Servo Motor", "Ultrasonic Sensor"],
    images: [
      { src: "/projects/IOT PARKING 1.png", alt: "Smart IoT Parking Hardware Circuit Schematic ESP32 & Display" },
      { src: "/projects/IOT PARKING 2.png", alt: "Automatic Vehicle License Plate OCR Testing" },
    ],
  },
  {
    id: "smart-garbage",
    title: "Smart IoT-Based Trash Cart with Load Cell",
    category: "Embedded System & Hardware",
    description:
      "To prevent overloading that frequently causes conventional carts to break down, my colleague and I assembled a prototype of a Smart Trash Cart based on hardware and IoT.\n\nThe system is powered by an Arduino Nano and four weight sensors (load cells) for real-time load capacity monitoring.\n\nWhen trash weight reaches the maximum limit, the control panel we designed automatically activates warning lights and sounds a buzzer alarm. This practical innovation ensures longer cart life and makes garbage collectors' work safer, more measurable, and efficient.",
    tags: ["Arduino Nano", "Load Cell Sensors", "Buzzer Alarm", "Indicator Lights", "Hardware Prototyping"],
    images: [
      { src: "/projects/SMART GARBAGE 1.png", alt: "Physical Prototype of Smart Trash Cart with Control Panel" },
      { src: "/projects/SMART GARBAGE 2.png", alt: "Load Cell Weight Sensor Installation & Load Testing" },
    ],
  },
];

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

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
    setIsClosing(false);
    setSelectedProject(project);
    setModalImgIdx(imgIndex);
  };

  const closeProjectModal = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 200);
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects Portfolio</h2>
        <div className={styles.headingAccent} />
        <p className={styles.subtitle}>
          Collection of real projects covering enterprise web development, artificial intelligence (AI), and integrated IoT hardware prototypes.
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
                    <span>Slide {currentImgIdx + 1} of {project.images.length}</span>
                    <span className={styles.linkButton}>
                      <Maximize2 size={13} />
                      View Project Details
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
        <div
          className={isClosing ? styles.modalOverlayExit : styles.modalOverlay}
          onClick={closeProjectModal}
        >
          <div
            className={isClosing ? styles.modalContentExit : styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
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
                    <p className="text-xs text-slate-400 mb-2 font-mono">Select Screenshot:</p>
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
                    About This Project:
                  </h4>
                  <p className={styles.modalDescription}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider text-emerald-400">
                    Technologies & Tools:
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
