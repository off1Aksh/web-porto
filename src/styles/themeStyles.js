// ============================================
// themeStyles.js — Centralized Tailwind Classes
// Dark Aesthetic — Orange Accent Theme
// All styling is managed here for clean JSX.
// ============================================

// --- Navbar ---
export const navbarStyles = {
  nav: "fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  inner: "flex items-center justify-between h-16",
  logo: "text-xl font-bold text-white tracking-tight font-mono",
  logoAccent: "text-orange-500",
  desktopMenu: "hidden md:flex items-center space-x-8",
  link: "text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-medium",
  ctaLink: "px-4 py-1.5 text-sm font-medium bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors duration-300",
  mobileButton: "md:hidden text-zinc-400 hover:text-white transition-colors",
  mobileMenu: "md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-md",
  mobileMenuInner: "px-4 py-4 space-y-3",
  mobileLink: "block text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-medium py-1",
};

// --- Hero ---
export const heroStyles = {
  section: "min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-zinc-950",
  bgGlow1: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none",
  bgGlow2: "absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none",
  bgGrid: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none",

  // Layout
  container: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",

  // Left Column
  leftCol: "flex flex-col order-2 lg:order-1",
  badge: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium mb-6 self-start",
  badgeDot: "w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse",
  headline: "text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-5",
  headlineAccent: "text-orange-500",
  bio: "text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg",
  buttonGroup: "flex flex-wrap items-center gap-4 mb-12",
  primaryButton: "inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20",
  secondaryButton: "inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium rounded-xl transition-all duration-300",

  // Stats
  statsRow: "flex items-center gap-8 pt-6 border-t border-white/5",
  statItem: "flex flex-col",
  statNumber: "text-2xl sm:text-3xl font-bold text-white",
  statNumberAccent: "text-orange-500",
  statLabel: "text-xs text-zinc-500 mt-0.5 font-mono",

  // Right Column
  rightCol: "flex justify-center lg:justify-end order-1 lg:order-2",
  photoWrapper: "relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80",
  photoFrame: "w-full h-full rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden relative",
  photoInner: "w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center",
  photoInitials: "text-6xl font-bold text-zinc-700 select-none",
  photoGlow: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5",

  // Floating badge on photo
  floatingBadge: "absolute -bottom-4 -left-4 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl",
  floatingBadgeIcon: "w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400",
  floatingBadgeText: "flex flex-col",
  floatingBadgeValue: "text-sm font-bold text-white",
  floatingBadgeLabel: "text-xs text-zinc-500",
};

// --- Skills ---
export const skillsStyles = {
  section: "py-20 sm:py-28 bg-zinc-950 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionLabel: "text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3",
  heading: "text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight",
  headingAccent: "w-12 h-0.5 bg-orange-500 mb-6 rounded-full",
  subtitle: "text-zinc-400 mb-14 max-w-xl text-sm sm:text-base",

  // Bento Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  card: "bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-orange-500/5 will-change-transform group",
  cardLarge: "bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-orange-500/5 will-change-transform group md:col-span-2 lg:col-span-1",
  iconWrapper: "w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/15 transition-colors duration-300",
  cardIcon: "text-orange-400",
  cardTitle: "text-white font-semibold text-base mb-4",
  skillList: "space-y-2",
  skillItem: "flex items-center gap-2.5 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors",
  skillDot: "w-1 h-1 rounded-full bg-orange-500 shrink-0",
};

// --- Projects ---
export const projectsStyles = {
  section: "py-20 sm:py-28 bg-zinc-900/30 relative border-y border-white/5",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionLabel: "text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3",
  heading: "text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight",
  headingAccent: "w-12 h-0.5 bg-orange-500 mb-6 rounded-full",
  subtitle: "text-zinc-400 mb-14 max-w-xl text-sm sm:text-base",

  // Bento Grid – 3 cols with varying row spans
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  card: "bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-xl hover:shadow-orange-500/5 will-change-transform flex flex-col group cursor-pointer",

  // Image and Carousel Styles
  imageContainer: "relative w-full h-52 bg-zinc-950 overflow-hidden cursor-pointer",
  imageWrapper: "relative w-full h-full",
  image: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
  categoryBadge: "absolute top-3 left-3 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-zinc-950/80 backdrop-blur-md text-orange-400 border border-orange-500/20 z-10",
  carouselBtnPrev: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950/80 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 z-10",
  carouselBtnNext: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950/80 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 z-10",
  dotsContainer: "absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10",
  dotActive: "w-4 h-1.5 rounded-full bg-orange-400 transition-all duration-300",
  dotInactive: "w-1.5 h-1.5 rounded-full bg-white/30 transition-all duration-300",

  // Card Content
  cardBody: "p-5 flex flex-col flex-grow justify-between",
  cardTop: "mb-4",
  cardTitle: "text-white font-semibold text-lg mb-2 group-hover:text-orange-300 transition-colors leading-snug",
  cardDescription: "text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3",
  expandBtn: "text-xs text-orange-400 hover:text-orange-300 font-medium mb-4 inline-block transition-colors cursor-pointer",

  // Tech tags
  tagContainer: "flex flex-wrap gap-1.5 mb-5",
  tag: "text-xs px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-400 border border-white/5 font-mono",

  // Footer / links
  cardFooter: "pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-600 font-mono",
  linkButton: "text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors font-medium cursor-pointer",

  // Modal for Project Details & Images
  modalOverlay: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-anim",
  modalOverlayExit: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-exit",
  modalContent: "relative max-w-4xl w-full bg-zinc-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] modal-content-anim",
  modalContentExit: "relative max-w-4xl w-full bg-zinc-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] modal-content-exit",
  modalClose: "absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-950/80 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors border border-white/10",
  modalScrollArea: "overflow-y-auto w-full",
  modalImageWrapper: "relative w-full h-[45vh] min-h-[260px] max-h-[460px] bg-zinc-950 flex items-center justify-center p-3 border-b border-white/5",
  modalImage: "max-h-full max-w-full object-contain rounded-lg",
  modalBody: "p-6 sm:p-8 bg-zinc-900",
  modalHeader: "flex flex-wrap items-center gap-3 mb-3",
  modalCategory: "px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20",
  modalTitle: "text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight",
  modalDescription: "text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line",
  modalThumbnails: "flex items-center gap-3 mb-6 overflow-x-auto pb-2",
  modalThumbItem: "relative w-20 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0",
  modalThumbActive: "border-orange-500 opacity-100",
  modalThumbInactive: "border-white/10 opacity-60 hover:opacity-100",
  modalSectionLabel: "text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider font-mono",
  modalAboutLabel: "text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wider font-mono",
  modalTechLabel: "text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wider font-mono",
};

// --- Certifications ---
export const certStyles = {
  section: "py-20 sm:py-28 bg-zinc-950 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionLabel: "text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3",
  heading: "text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight",
  headingAccent: "w-12 h-0.5 bg-orange-500 mb-6 rounded-full",
  subtitle: "text-zinc-400 mb-14 max-w-xl text-sm sm:text-base",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  card: "bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-xl hover:shadow-orange-500/5 will-change-transform flex flex-col group",

  // Image container
  imageContainer: "relative w-full h-52 bg-zinc-950 overflow-hidden cursor-pointer p-3 flex items-center justify-center border-b border-white/5",
  imageWrapper: "relative w-full h-full rounded-xl overflow-hidden",
  image: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",
  badge: "absolute top-3 right-3 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-zinc-950/85 backdrop-blur-md text-orange-400 border border-orange-500/20 z-10",

  // Card Body
  cardBody: "p-5 flex flex-col flex-grow justify-between",
  issuer: "text-xs font-mono text-orange-400 uppercase tracking-wider mb-1.5",
  title: "text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors leading-snug",
  description: "text-zinc-500 text-sm leading-relaxed mb-4",

  // Footer
  cardFooter: "pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-600",
  verifiedBadge: "flex items-center gap-1.5 text-emerald-500",
  viewBtn: "text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1.5 font-medium transition-colors cursor-pointer",

  // Modal
  modalOverlay: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-anim",
  modalOverlayExit: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-exit",
  modalContent: "relative max-w-4xl w-full bg-zinc-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl modal-content-anim",
  modalContentExit: "relative max-w-4xl w-full bg-zinc-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl modal-content-exit",
  modalClose: "absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-950/80 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors border border-white/10",
  modalImageWrapper: "relative w-full h-[65vh] max-h-[650px] bg-zinc-950 flex items-center justify-center p-4",
  modalImage: "max-h-full max-w-full object-contain rounded-xl",
  modalCaption: "p-5 bg-zinc-900 text-center border-t border-white/5",
  modalCaptionTitle: "font-semibold text-white text-base",
  modalCaptionIssuer: "text-xs text-zinc-500 mt-1",
};

// --- Footer ---
export const footerStyles = {
  footer: "py-16 bg-zinc-950 border-t border-white/5 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  topSection: "grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 pb-12 border-b border-white/5",
  sectionLabel: "text-orange-500 text-xs font-mono font-medium tracking-widest uppercase mb-3",
  contactTitle: "text-2xl font-bold text-white mb-2",
  contactText: "text-sm text-zinc-400 leading-relaxed max-w-sm mb-6",
  contactList: "space-y-3",
  contactItem: "flex items-center gap-3 text-sm text-zinc-400",
  contactLink: "hover:text-orange-400 transition-colors",
  inner: "flex flex-col sm:flex-row items-center justify-between gap-4",
  copyright: "text-zinc-600 text-xs sm:text-sm font-mono",
  socialContainer: "flex items-center gap-3",
  socialLink: "w-9 h-9 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/30 hover:bg-zinc-800 transition-all duration-300",
};

// --- Layout ---
export const layoutStyles = {
  main: "bg-zinc-950 text-white min-h-screen",
};
