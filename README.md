# Shree Radhey Relocation Services — Website

Premium React + Vite website.

---

## Quick Start

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

---

## Before Going Live — 3 Things to Update

Open `src/data/constants.js` and change:

| Variable         | What to put                        |
|------------------|------------------------------------|
| `YOUR_WA_NUMBER` | Your number with country code, no + e.g. `919876543210` |
| `YOUR_EMAIL`     | Your email for lead notifications  |
| `ADMIN_PASSWORD` | A strong password of your choice   |

---

## Adding Your Images

1. Create these folders:
```
src/assets/gallery/
  president/
  epch/
  maharaja/
  office/
  industrial/
  vacuum/
```

2. Copy your images into the right folder (JPG/PNG/WEBP all fine).

3. Open `src/data/galleryData.js` and import + register them:
```js
// At the top of the file:
import p01 from '../assets/gallery/president/01.jpg'
import p02 from '../assets/gallery/president/02.jpg'
// ... etc

// In the GALLERY_IMAGES array, replace src:null with your import:
{ id:'pr1', category:'president', src: p01, caption:'Presidential Museum packing' },
```

Vite handles all resizing and optimisation automatically.

---

## Project Structure

```
src/
├── assets/
│   └── gallery/          ← put your images here
│       ├── president/
│       ├── epch/
│       ├── maharaja/
│       ├── office/
│       ├── industrial/
│       └── vacuum/
│
├── components/
│   ├── Navbar.jsx        ← responsive nav with mobile hamburger
│   ├── Hero.jsx          ← full-screen landing + trust bar
│   ├── Services.jsx      ← 6 service cards
│   ├── About.jsx         ← credentials + stats + client cloud
│   ├── Projects.jsx      ← 6 signature project cards
│   ├── Gallery.jsx       ← filterable gallery + lightbox
│   ├── Calculator.jsx    ← estimate calculator (rates hidden)
│   ├── Contact.jsx       ← contact form → WhatsApp
│   ├── Footer.jsx
│   ├── WaFloat.jsx       ← floating WhatsApp button
│   └── Shared.jsx        ← Reveal, SectionLabel, WaIcon
│
├── data/
│   ├── constants.js      ← all text, config, CFT items
│   └── galleryData.js    ← image imports + captions
│
├── hooks/
│   └── useInView.js      ← scroll-reveal intersection observer
│
├── pages/
│   └── Home.jsx          ← assembles all sections
│
├── utils/
│   ├── cftCalculator.js  ← CFT + cost logic (hidden from client)
│   └── whatsapp.js       ← WA message builders
│
├── App.jsx
├── main.jsx
└── index.css             ← all styles + responsive rules
```

---

## How the Estimate Works

- Client sees: item list, move type, origin/destination
- Client never sees: CFT per item, rate (₹170/CFT), or total cost
- Admin logs in with password → sees total CFT + cost per estimate
- On submit: phone modal appears → client enters number → WhatsApp opens with full details sent to YOUR number → email notification also triggered

---

## Deploying

**Netlify (free):**
```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

**Vercel (free):**
```bash
npx vercel
```
