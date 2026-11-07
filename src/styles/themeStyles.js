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
  cardDescription: "text-zinc-500 text-sm leading-relaxed mb-3 line-clamp-2",

  // Card Star Features Preview
  cardFeaturesList: "space-y-1.5 mb-4 py-2.5 px-3 rounded-xl bg-zinc-950/60 border border-white/5",
  cardFeatureItem: "flex items-center gap-2 text-xs text-zinc-300",
  cardFeatureIcon: "text-orange-400 shrink-0 fill-orange-400/20",
  cardFeatureText: "line-clamp-1 text-zinc-400 text-xs",
  cardFeatureTitle: "text-zinc-200 font-semibold mr-1",

  // Tech tags
  tagContainer: "flex flex-wrap gap-1.5 mb-5",
  tag: "text-xs px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-400 border border-white/5 font-mono",

  // Footer / links
  cardFooter: "pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-600 font-mono",
  linkButton: "text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors font-medium cursor-pointer",

  // ── Modal Shell ──────────────────────────────────────────────
  modalOverlay: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-anim overflow-y-auto lg:overflow-hidden",
  modalOverlayExit: "fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 modal-backdrop-exit",
  modalContent: "relative max-w-7xl w-full bg-zinc-900 border border-white/8 rounded-2xl shadow-2xl flex flex-col lg:flex-row my-auto lg:max-h-[90vh] modal-content-anim overflow-visible lg:overflow-hidden",
  modalContentExit: "relative max-w-7xl w-full bg-zinc-900 border border-white/8 rounded-2xl shadow-2xl flex flex-col lg:flex-row my-auto lg:max-h-[90vh] modal-content-exit overflow-visible lg:overflow-hidden",
  modalClose: "absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-zinc-950/80 text-white flex items-center justify-center hover:bg-zinc-800 hover:text-orange-400 transition-all duration-200 border border-white/10 backdrop-blur-md",

  // ── Modal Left Column (Visual) ─────────────────────────────────
  modalLeftColumn: "w-full lg:w-1/2 flex flex-col bg-zinc-950 lg:h-full lg:overflow-y-auto shrink-0",
  modalImageWrapper: "relative w-full h-[45vh] lg:h-[55vh] bg-zinc-950 flex items-center justify-center p-4 border-b border-white/5 shrink-0",
  modalImage: "max-h-full max-w-full object-contain rounded-lg",

  // ── Modal Right Column (Content) ───────────────────────────────
  modalRightColumn: "w-full lg:w-1/2 flex flex-col lg:overflow-y-auto lg:h-full",
  modalScrollArea: "flex-1 min-h-0",

  // ── Modal Body ────────────────────────────────────────────────
  modalBody: "p-6 sm:p-8 bg-zinc-900",
  modalHeader: "flex flex-wrap items-center gap-3 mb-2",
  modalCategory: "px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20",
  modalTitle: "text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight",

  // Thumbnail Switcher
  modalSectionLabel: "text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider font-mono",
  modalThumbnails: "flex items-center gap-3 mb-6 overflow-x-auto pb-2",
  modalThumbItem: "relative w-20 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 shrink-0",
  modalThumbActive: "border-orange-500 opacity-100 scale-105",
  modalThumbInactive: "border-white/10 opacity-55 hover:opacity-85 hover:border-white/25",
  modalThumbImg: "object-cover",

  // ── Tabs Navigation ───────────────────────────────────────────
  modalTabsContainer: "flex items-center gap-1.5 mb-6 border-b border-white/5 pb-0 overflow-x-auto",
  modalTabBtn: "px-4 py-2 text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 -mb-px",
  modalTabActive: "text-orange-400 border-orange-500 bg-transparent",
  modalTabInactive: "text-zinc-500 border-transparent hover:text-zinc-300 hover:border-zinc-600",

  // ── Overview Tab ──────────────────────────────────────────────
  overviewSection: "mb-0",
  overviewText: "text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line",
  modalTechLabel: "text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider font-mono flex items-center gap-2",

  // ── Star Features Tab ─────────────────────────────────────────
  starFeaturesGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
  // Clickable feature button card
  starFeatureBtn: "w-full text-left p-4 rounded-xl border transition-all duration-250 cursor-pointer flex items-start gap-3.5 group/feat",
  starFeatureBtnDefault: "bg-zinc-950/60 border-white/6 hover:border-orange-500/30 hover:bg-zinc-950/90",
  starFeatureBtnActive: "bg-orange-500/8 border-orange-500/50 shadow-lg shadow-orange-500/5",
  starFeatureIconWrapper: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200",
  starFeatureIconDefault: "bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover/feat:bg-orange-500/20",
  starFeatureIconActive: "bg-orange-500/25 border border-orange-500/40 text-orange-300",
  starFeatureContent: "flex flex-col flex-1 min-w-0",
  starFeatureTitle: "text-sm font-semibold mb-0.5 transition-colors duration-200",
  starFeatureTitleDefault: "text-white group-hover/feat:text-orange-300",
  starFeatureTitleActive: "text-orange-300",
  starFeatureTeaser: "text-xs text-zinc-500 font-mono",
  // Expanded detail panel
  starFeatureDetail: "mt-3 rounded-xl bg-zinc-900 border border-orange-500/15 overflow-hidden modal-feat-expand",
  starFeatureDetailInner: "p-4 sm:p-5",
  starFeatureDetailText: "text-sm text-zinc-300 leading-relaxed",
  starFeatureDetailStack: "mt-3 flex flex-wrap gap-1.5",

  // ── S.T.A.R. Tab ──────────────────────────────────────────────
  starMethodSection: "mb-0 space-y-3",
  starMethodCard: "rounded-xl border border-white/5 overflow-hidden transition-all duration-200 hover:border-white/10",
  starMethodHeader: "flex items-center gap-3 p-4",
  starMethodBadge: "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0",
  starMethodBadgeSituation: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  starMethodBadgeTask: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  starMethodBadgeAction: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
  starMethodBadgeResult: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  starMethodHeaderText: "flex flex-col",
  starMethodLabel: "text-xs font-mono text-zinc-500 uppercase tracking-widest leading-none mb-0.5",
  starMethodTitle: "text-sm font-semibold text-white",
  starMethodBody: "px-4 pb-4",
  starMethodText: "text-xs sm:text-sm text-zinc-300 leading-relaxed",
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
