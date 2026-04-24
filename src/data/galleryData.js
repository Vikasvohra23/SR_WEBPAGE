// ─────────────────────────────────────────────────────────────
//  IMAGE IMPORTS FROM GALLERY FOLDERS
// ─────────────────────────────────────────────────────────────

// ── President of India ──────────────────────────────────────
import pr1 from '../assets/gallery/president/1.jpg'
import pr2 from '../assets/gallery/president/2.jpg'
import pr3 from '../assets/gallery/president/3.jpg'
import pr4 from '../assets/gallery/president/4.jpg'

// ── Maharaja Express ─────────────────────────────────────────
import mx4 from '../assets/gallery/maharaja/4.jpg'

// ── Vacuum Packing (Images Only) ──────────────────────────────
import vp1 from '../assets/gallery/vacuum/1.jpg'
import vp4 from '../assets/gallery/vacuum/4.jpeg'

// ─────────────────────────────────────────────────────────────
//  VIDEO PATHS (served from public folder)
// ─────────────────────────────────────────────────────────────

// ── EPCH Shilp Guru Awards ───────────────────────────────────
const ep1 = '/gallery/videos/epch-1.mp4'
const ep2 = '/gallery/videos/epch-2.mp4'
const ep3 = '/gallery/videos/epch-3.mov'
const ep4 = '/gallery/videos/epch-4.mov'

// ── Maharaja Express ─────────────────────────────────────────
const mx1 = '/gallery/videos/maharaja-1.mov'
const mx2 = '/gallery/videos/maharaja-2.mov'
const mx3 = '/gallery/videos/maharaja-3.mov'

// ── Office Shifting ──────────────────────────────────────────
const of1 = '/gallery/videos/office-1.mov'
const of2 = '/gallery/videos/office-2.mov'
const of3 = '/gallery/videos/office-3.mov'
const of4 = '/gallery/videos/office-4.mp4'

// ── Industrial Shifting ──────────────────────────────────────
const in1 = '/gallery/videos/industrial-1.mov'
const in2 = '/gallery/videos/industrial-2.mov'
const in3 = '/gallery/videos/industrial-3.mov'
const in4 = '/gallery/videos/industrial-4.mov'
const in5 = '/gallery/videos/industrial-5.mov'

// ── Vacuum Packing (Videos Only) ──────────────────────────────
const vp2 = '/gallery/videos/vacuum-2.mov'
const vp3 = '/gallery/videos/vacuum-3.mp4'

// ─────────────────────────────────────────────────────────────
//  GALLERY DATA
// ─────────────────────────────────────────────────────────────

export const GALLERY_IMAGES = [
  // ── President of India ──────────────────────────────────────
  { id:"pr1", category:"president",  src:pr1, caption:"Presidential Museum — packing & labelling artifacts" },
  { id:"pr2", category:"president",  src:pr2, caption:"Heritage sculpture wrapping, Rashtrapati Bhawan" },
  { id:"pr3", category:"president",  src:pr3, caption:"Art crating for the Presidential Museum display" },
  { id:"pr4", category:"president",  src:pr4, caption:"Careful handling of rare paintings" },

  // ── EPCH Shilp Guru Awards ───────────────────────────────────
  { id:"ep1", category:"epch",       src:ep1, caption:"EPCH Shilp Guru Awards — Vigyan Bhawan setup" },
  { id:"ep2", category:"epch",       src:ep2, caption:"National Handicrafts Awards display packing" },
  { id:"ep3", category:"epch",       src:ep3, caption:"G20 Summit exhibition logistics" },
  { id:"ep4", category:"epch",       src:ep4, caption:"EPCH handicraft pavilion — post-event dismantling" },

  // ── Maharaja Express ─────────────────────────────────────────
  { id:"mx1", category:"maharaja",   src:mx1, caption:"Maharaja Express — chandelier packing" },
  { id:"mx2", category:"maharaja",   src:mx2, caption:"Luxury train furniture wrapping" },
  { id:"mx3", category:"maharaja",   src:mx3, caption:"Custom fittings in transit protection" },
  { id:"mx4", category:"maharaja",   src:mx4, caption:"Annual interior restoration packing" },

  // ── Office Shifting ──────────────────────────────────────────
  { id:"of1", category:"office",     src:of1, caption:"office furniture packing" },
  { id:"of2", category:"office",     src:of2, caption:"office shifting" },
  { id:"of3", category:"office",     src:of3, caption:"Office Cabins & Partitions" },
  { id:"of4", category:"office",     src:of4, caption:"WHO South-East Asia office relocation" },

  // ── Industrial Shifting ──────────────────────────────────────
  { id:"in1", category:"industrial", src:in1, caption:"Air Tank relocation" },
  { id:"in2", category:"industrial", src:in2, caption:"Vertical Erection of Air Tanks" },
  { id:"in3", category:"industrial", src:in3, caption:"Industrial machinery movement" },
  { id:"in4", category:"industrial", src:in4, caption:"Carefull Handling" },
  { id:"in5", category:"industrial", src:in5, caption:"Proper Machine Leveling after Relocation" },

  // ── Vacuum Packing ───────────────────────────────────────────
  { id:"vp1", category:"vacuum",     src:vp1, caption:"Export-grade vacuum packing — machinery" },
  { id:"vp2", category:"vacuum",     src:vp2, caption:"Industrial parts vacuum sealed for export" },
  { id:"vp3", category:"vacuum",     src:vp3, caption:"Wooden crating with vacuum wrap inner layer" },
  { id:"vp4", category:"vacuum",     src:vp4, caption:"40HQ container loading — vacuum-packed goods" },
];
