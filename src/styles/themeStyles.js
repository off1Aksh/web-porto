// ============================================
// themeStyles.js — Centralized Tailwind Classes
// All styling is managed here for clean JSX.
// ============================================

// --- Navbar ---
export const navbarStyles = {
  nav: "fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  inner: "flex items-center justify-between h-16",
  logo: "text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent tracking-tight",
  desktopMenu: "hidden md:flex items-center space-x-8",
  link: "text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium",
  mobileButton: "md:hidden text-slate-400 hover:text-white transition-colors",
  mobileMenu: "md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md",
  mobileMenuInner: "px-4 py-4 space-y-3",
  mobileLink: "block text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium",
};

// --- Hero ---
export const heroStyles = {
  section: "min-h-screen flex items-center justify-center relative overflow-hidden pt-16",
  bgGradient: "absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
  bgGlow1: "absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl",
  bgGlow2: "absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl",
  content: "relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto",
  greeting: "text-emerald-400 text-sm sm:text-base font-mono mb-4 tracking-wider",
  name: "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight",
  nameHighlight: "bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent",
  role: "text-lg sm:text-xl text-slate-300 mb-6 font-light",
  bio: "text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed",
  buttonGroup: "flex flex-col sm:flex-row items-center justify-center gap-4",
  primaryButton: "px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2",
  secondaryButton: "px-8 py-3 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 rounded-lg font-medium transition-all duration-300 flex items-center gap-2",
};

// --- Skills ---
export const skillsStyles = {
  section: "py-20 sm:py-28 bg-slate-950 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  heading: "text-3xl sm:text-4xl font-bold text-white text-center mb-4 tracking-tight",
  headingAccent: "w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-6 rounded-full",
  subtitle: "text-slate-400 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  card: "bg-slate-900/50 border border-slate-800/60 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group flex flex-col justify-between",
  cardIcon: "text-purple-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300",
  cardTitle: "text-white font-semibold text-lg mb-4",
  skillList: "space-y-2.5",
  skillItem: "flex items-center gap-2 text-slate-300 text-sm",
  skillDot: "w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0",
};

// --- Projects ---
export const projectsStyles = {
  section: "py-20 sm:py-28 bg-slate-900/40 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  heading: "text-3xl sm:text-4xl font-bold text-white text-center mb-4 tracking-tight",
  headingAccent: "w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-6 rounded-full",
  subtitle: "text-slate-400 text-center mb-14 max-w-2xl mx-auto text-sm sm:text-base",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-slate-950 border border-slate-800/70 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col group cursor-pointer",
  
  // Image and Carousel Styles
  imageContainer: "relative w-full h-56 bg-slate-900 overflow-hidden cursor-pointer",
  imageWrapper: "relative w-full h-full",
  image: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
  categoryBadge: "absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 z-10",
  carouselBtnPrev: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-600 z-10",
  carouselBtnNext: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-600 z-10",
  dotsContainer: "absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10",
  dotActive: "w-4 h-1.5 rounded-full bg-purple-400 transition-all duration-300",
  dotInactive: "w-1.5 h-1.5 rounded-full bg-slate-400/60 transition-all duration-300",

  // Card Content
  cardBody: "p-6 flex flex-col flex-grow justify-between",
  cardTop: "mb-4",
  cardTitle: "text-white font-semibold text-xl mb-3 group-hover:text-purple-300 transition-colors leading-snug",
  cardDescription: "text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3",
  expandBtn: "text-xs text-purple-400 hover:text-purple-300 font-medium mb-4 inline-block transition-colors cursor-pointer",
  
  // Tech tags
  tagContainer: "flex flex-wrap gap-1.5 mb-6",
  tag: "text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono",
  
  // Footer / links
  cardFooter: "pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500 font-mono",
  linkButton: "text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors font-medium cursor-pointer",

  // Modal for Project Details & Images
  modalOverlay: "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-anim",
  modalContent: "relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] modal-content-anim",
  modalClose: "absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-slate-700",
  modalScrollArea: "overflow-y-auto w-full",
  modalImageWrapper: "relative w-full h-[45vh] min-h-[260px] max-h-[460px] bg-slate-950 flex items-center justify-center p-3 border-b border-slate-800",
  modalImage: "max-h-full max-w-full object-contain rounded-lg",
  modalBody: "p-6 sm:p-8 bg-slate-900",
  modalHeader: "flex flex-wrap items-center gap-3 mb-3",
  modalCategory: "px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  modalTitle: "text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight",
  modalDescription: "text-slate-300 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line",
  modalThumbnails: "flex items-center gap-3 mb-6 overflow-x-auto pb-2",
  modalThumbItem: "relative w-20 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0",
  modalThumbActive: "border-purple-500 opacity-100",
  modalThumbInactive: "border-slate-800 opacity-60 hover:opacity-100",
};

// --- Certifications ---
export const certStyles = {
  section: "py-20 sm:py-28 bg-slate-950 relative border-t border-slate-900",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  heading: "text-3xl sm:text-4xl font-bold text-white text-center mb-4 tracking-tight",
  headingAccent: "w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-6 rounded-full",
  subtitle: "text-slate-400 text-center mb-14 max-w-2xl mx-auto text-sm sm:text-base",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col group",
  
  // Image container
  imageContainer: "relative w-full h-52 bg-slate-950 overflow-hidden cursor-pointer p-3 flex items-center justify-center border-b border-slate-800/60",
  imageWrapper: "relative w-full h-full rounded-lg overflow-hidden bg-white/5",
  image: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",
  badge: "absolute top-4 right-4 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-slate-950/85 backdrop-blur-md text-purple-400 border border-purple-500/30 z-10",
  
  // Card Body
  cardBody: "p-6 flex flex-col flex-grow justify-between",
  issuer: "text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2",
  title: "text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors leading-snug",
  description: "text-slate-400 text-sm leading-relaxed mb-4",
  
  // Footer
  cardFooter: "pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500",
  viewBtn: "text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1.5 font-medium transition-colors cursor-pointer",

  // Modal
  modalOverlay: "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-anim",
  modalContent: "relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl modal-content-anim",
  modalClose: "absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-slate-700",
  modalImageWrapper: "relative w-full h-[65vh] max-h-[650px] bg-slate-950 flex items-center justify-center p-4",
  modalImage: "max-h-full max-w-full object-contain rounded-lg",
  modalCaption: "p-4 bg-slate-900 text-center border-t border-slate-800",
};

// --- Footer ---
export const footerStyles = {
  footer: "py-12 bg-slate-950 border-t border-slate-800/60 relative",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  topSection: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-slate-900",
  contactTitle: "text-lg font-semibold text-white mb-3",
  contactText: "text-sm text-slate-400 leading-relaxed max-w-sm mb-4",
  contactList: "space-y-2 text-sm text-slate-300",
  contactItem: "flex items-center gap-2.5 text-slate-400",
  contactLink: "hover:text-emerald-400 transition-colors",
  inner: "flex flex-col sm:flex-row items-center justify-between gap-4",
  copyright: "text-slate-500 text-xs sm:text-sm",
  socialContainer: "flex items-center gap-4",
  socialLink: "w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300",
};

// --- Layout ---
export const layoutStyles = {
  main: "bg-slate-950 text-white min-h-screen",
};
