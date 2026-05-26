# Abiyu Ambaye — Portfolio

A dark, tech-focused portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000
```

## 📦 Deploy to Vercel (Recommended — Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done! Vercel auto-detects Next.js

## 🌐 Deploy to Netlify

```bash
npm run build
# Upload the `.next` folder to Netlify, or connect your GitHub repo
```

## 🏗️ Project Structure

```
abiyu-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles & animations
├── components/
│   ├── Navbar.tsx       # Sticky nav with scroll-aware active state
│   ├── Hero.tsx         # Hero with typewriter effect & terminal UI
│   ├── About.tsx        # About + stats + education
│   ├── Experience.tsx   # Tabbed work history
│   ├── Skills.tsx       # Animated progress bars + tech tags
│   ├── Projects.tsx     # Project cards
│   ├── Certifications.tsx # Certification grid
│   ├── Contact.tsx      # Contact cards with copy-to-clipboard
│   └── Footer.tsx       # Footer
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## ✏️ Customization

- **Personal info**: Edit each component directly
- **Colors**: Change CSS variables in `app/globals.css` (`:root`) and `tailwind.config.js`
- **Add projects**: Edit the `projects` array in `components/Projects.tsx`
- **Add certifications**: Edit the `certs` array in `components/Certifications.tsx`

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (JetBrains Mono, Syne, DM Sans)
- Vanilla CSS animations (no extra animation libraries needed)
