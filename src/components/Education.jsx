"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, Calendar, GraduationCap, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const relevantCourses = [
  "Web Framework Programming",
  "Mobile Programming",
  "Machine Learning",
  "Big Data",
  "Cloud Computing",
  "Object-Oriented Programming",
  "Database and Data Analysis",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Education Background
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mb-6 rounded-full mx-auto" />
        </motion.div>

        {/* Education Card */}
        <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5">
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* Logo */}
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-white/5 p-3 border border-white/10">
                    <Image
                      src="/projects/Logo-Polines-96dpi-200px.png"
                      alt="Politeknik Negeri Semarang Logo"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Institution & Degree */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Politeknik Negeri Semarang
                    </h3>
                    <p className="text-orange-400 font-semibold text-lg mb-1">
                      D4 Teknologi Rekayasa Komputer
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-orange-400" />
                        August 2022 – September 2026
                      </span>
                      <span className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-orange-400" />
                        GPA: <span className="text-white font-semibold">3.63</span> / 4.00
                      </span>
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={18} className="text-orange-400" />
                      <h4 className="text-white font-semibold">Relevant Courses:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/50 text-zinc-300 border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link to Website */}
                  <div className="pt-2">
                    <a
                      href="https://polines.ac.id/id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium group"
                    >
                      Visit Official Website
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
