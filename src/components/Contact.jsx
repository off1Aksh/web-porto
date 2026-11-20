"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const contactInfo = [
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+62 859 5639 9344",
    href: "https://wa.me/6285956399344",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20",
  },
  {
    icon: Mail,
    label: "OFFICIAL EMAIL",
    value: "akashabnali@gmail.com",
    href: "mailto:akashabnali@gmail.com",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Salatiga, Central Java, Indonesia",
    href: null,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/akashabnali",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/off1Aksh",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/akashaa.9",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could integrate with email service)
    console.log("Form submitted:", formData);
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.message) return;
    const message = `Hello, I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/6285956399344?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            <Mail size={16} />
            CONTACT
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Interested in collaboration or have questions? Feel free to reach out through the form below or direct contact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} {...fadeUp(0.1 + index * 0.05)}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} hover:scale-[1.02] transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 border ${item.borderColor}`}>
                        <item.icon size={24} className={item.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-medium break-all group-hover:text-orange-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 border ${item.borderColor}`}>
                        <item.icon size={24} className={item.iconColor} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div {...fadeUp(0.25)} className="pt-4">
              <h3 className="text-white font-semibold mb-4">Social Networks</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/50 border border-white/10 rounded-xl text-zinc-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 text-sm font-medium"
                  >
                    <social.icon />
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div {...fadeUp(0.2)} className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send Direct Message</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-6">
              Fill out the form below and click <span className="text-green-400 font-semibold">WhatsApp Chat</span> to send your message directly through WhatsApp.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="e.g., Akasha Bin Ali"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="e.g., Web Development Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!formData.name || !formData.message}
                  className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-400 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
