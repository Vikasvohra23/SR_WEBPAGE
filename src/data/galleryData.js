// ─────────────────────────────────────────────────────────────
//  HOW TO ADD YOUR IMAGES
// ─────────────────────────────────────────────────────────────
//  1. Create folders inside src/assets/gallery/:
//       src/assets/gallery/president/
//       src/assets/gallery/epch/
//       src/assets/gallery/maharaja/
//       src/assets/gallery/office/
//       src/assets/gallery/industrial/
//       src/assets/gallery/vacuum/
//
//  2. Copy your images into the right folder.
//     Tip: rename them  01.jpg, 02.jpg … for easy ordering.
//
//  3. Import them below and add an entry to GALLERY_IMAGES.
//     Example:
//       import p01 from '../assets/gallery/president/01.jpg'
//       { id:'p01', category:'president', src: p01, caption:'Presidential Museum packing' }
//
//  Vite handles all image optimisation automatically.
// ─────────────────────────────────────────────────────────────

// ── PLACEHOLDER ENTRIES (replace when you add real images) ───
// Each entry: { id, category, src, caption }
// src can be a real import OR a placeholder string like null
// When src is null the gallery shows a stylised placeholder tile.

export const GALLERY_IMAGES = [
  // ── President of India ──────────────────────────────────────
  { id:"pr1", category:"president",  src:null, caption:"Presidential Museum — packing & labelling artifacts" },
  { id:"pr2", category:"president",  src:null, caption:"Heritage sculpture wrapping, Rashtrapati Bhawan" },
  { id:"pr3", category:"president",  src:null, caption:"Art crating for the Presidential Museum display" },
  { id:"pr4", category:"president",  src:null, caption:"Careful handling of rare paintings" },

  // ── EPCH Shilp Guru Awards ───────────────────────────────────
  { id:"ep1", category:"epch",       src:null, caption:"EPCH Shilp Guru Awards — Vigyan Bhawan setup" },
  { id:"ep2", category:"epch",       src:null, caption:"National Handicrafts Awards display packing" },
  { id:"ep3", category:"epch",       src:null, caption:"G20 Summit exhibition logistics" },
  { id:"ep4", category:"epch",       src:null, caption:"EPCH handicraft pavilion — post-event dismantling" },

  // ── Maharaja Express ─────────────────────────────────────────
  { id:"mx1", category:"maharaja",   src:null, caption:"Maharaja Express — chandelier packing" },
  { id:"mx2", category:"maharaja",   src:null, caption:"Luxury train furniture wrapping" },
  { id:"mx3", category:"maharaja",   src:null, caption:"Custom fittings in transit protection" },
  { id:"mx4", category:"maharaja",   src:null, caption:"Annual interior restoration packing" },

  // ── Office Shifting ──────────────────────────────────────────
  { id:"of1", category:"office",     src:null, caption:"IT asset tagging & inventory — corporate move" },
  { id:"of2", category:"office",     src:null, caption:"Server room dismantling & crating" },
  { id:"of3", category:"office",     src:null, caption:"100,000+ IT assets relocated — COVID operations" },
  { id:"of4", category:"office",     src:null, caption:"WHO South-East Asia office relocation" },

  // ── Industrial Shifting ──────────────────────────────────────
  { id:"in1", category:"industrial", src:null, caption:"13-ft production line — intact shift" },
  { id:"in2", category:"industrial", src:null, caption:"CMM machine rigging & relocation" },
  { id:"in3", category:"industrial", src:null, caption:"Industrial furnace dismantling & move" },
  { id:"in4", category:"industrial", src:null, caption:"Full plant relocation — compressor & tanks" },
  { id:"in5", category:"industrial", src:null, caption:"Robot arm packaging for transit" },

  // ── Vacuum Packing ───────────────────────────────────────────
  { id:"vp1", category:"vacuum",     src:null, caption:"Export-grade vacuum packing — machinery" },
  { id:"vp2", category:"vacuum",     src:null, caption:"Industrial parts vacuum sealed for export" },
  { id:"vp3", category:"vacuum",     src:null, caption:"Wooden crating with vacuum wrap inner layer" },
  { id:"vp4", category:"vacuum",     src:null, caption:"40HQ container loading — vacuum-packed goods" },
];
