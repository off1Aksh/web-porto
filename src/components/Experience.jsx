"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const experiences = [
  {
    company: "PT Dtech Inovasi Indonesia",
    role: "IT Support & Software Developer Intern",
    duration: "August 2025 – December 2025",
    location: "Salatiga, Central Java",
    type: "Internship",
    responsibilities: [
      "Handled daily IT issues including network, software, and hardware troubleshooting for office staff",
      "Contributed to company software design and development planning",
      "Built comprehensive IT ticketing system using React.js, Laravel, n8n, GOWA, and Docker to streamline IT support workflow with escalation dashboard",
      "Implemented QR Code asset management system, replacing manual Excel-based tracking",
      "Developed 24/7 WhatsApp AI chatbot providing self-repair guidance and automatic ticket creation",
    ],
  },
  {
    company: "Gerobak Pintar",
    role: "Freelance Embedded System Developer",
    duration: "May 2026 – June 2026",
    location: "Semarang, Central Java",
    type: "Freelance",
    responsibilities: [
      "Programmed and designed electrical systems for smart cart using Arduino Nano",
      "Integrated four loadcell sensors at each corner to automatically measure load and display real-time data on I2C screen",
      "Implemented multi-color pilot lamp (green/yellow/red) and buzzer system to indicate load status from safe to full capacity",
    ],
  },
  {
    company: "Politeknik Negeri Semarang",
    role: "PanganPredict – Academic Project",
    duration: "March 2026 – August 2026",
    location: "Semarang, Central Java",
    type: "Academic Project",
    responsibilities: [
      "Designed and built cross-platform application with React web app, React Native mobile app, and Flask backend",
      "Developed features to display Central Java food commodity prices, predict prices 7 days ahead, and detect commodity types via photo",
      "Achieved 95.48% accuracy for image detection model",
      "Optimized price prediction model with sliding window architecture, achieving lowest MAPE of 0.86%",
    ],
  },
];

const typeColors = {
  Internship: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Freelance: "bg-green-500/10 text-green-400 border-green-500/20",
  "Academic Project": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Professional Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mb-6 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeUp(0.1 + index * 0.1)}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="hidden sm:block absolute left-[19px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent" />
              )}

              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="p-6 sm:p-8">
                  <div className="flex gap-6 items-start">
                    {/* Timeline Dot */}
                    <div className="hidden sm:block shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
                        <Briefcase size={18} className="text-orange-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {exp.company}
                          </h3>
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${typeColors[exp.type]}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-orange-400 font-semibold text-base sm:text-lg mb-3">
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-orange-400 shrink-0" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-orange-400 shrink-0" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2.5">
                        {exp.responsibilities.map((item, idx) => (
                          <div key={idx} className="flex gap-3 group">
                            <ChevronRight
                              size={16}
                              className="text-orange-400 shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                            />
                            <p className="text-zinc-400 text-sm leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
