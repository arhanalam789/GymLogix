# 🏋️ GYMLOGIX — THE ELITE TRAINING PLATFORM

[![Production Deployment](https://img.shields.io/badge/Production-Live-success?style=for-the-badge&logo=vercel)](https://gym-logix.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-FullSTACK-blue?style=for-the-badge&logo=next.js)](https://github.com/arhanalam789/GymLogix)

GymLogix is a premium, high-performance fitness platform designed for athletes who demand precision, aesthetics, and results. Built with a "Next-Level" dark aesthetic and a robust custom backend, it bridges the gap between ambition and achievement.

---

## ✨ KEY FEATURES

### 🚀 Performance & Design
- **Cinematic UI**: A custom-crafted dark theme with glassmorphism, high-impact typography, and a "dam smooth" user experience powered by **Framer Motion**.
- **Responsive Architecture**: Fully optimized for Desktop, Tablet, and Mobile performance.

### 🔐 Secure Intelligence
- **Custom Auth System**: Secure JWT-based authentication system with hashed passwords and persistent sessions.
- **Data Isolation**: User-specific data metrics and goal tracking.

### 📋 Athlete Tools
- **Workout Split Engine**: Intelligent selection of training methodologies (PPL, Arnold Split, Bro Split, etc.).
- **Goals CRUD API**: Personalized fitness target management with real-time backend synchronization.
- **Exercise Intelligence**: Integration with extensive exercise databases for form and technique.
- **Reminders & Sync**: Smart workout notification system with Google Calendar integration.

---

## 🛠️ TECH STACK

| Component | Technology | Used For |
| :--- | :--- | :--- |
| **Frontend** | [Next.js 15+](https://nextjs.org/) | App Router & Server Components |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) / [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Premium UI & Glassmorphism |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth Transitions & Reveal Effects |
| **Backend** | [Node.js](https://nodejs.org/) / [Express](https://expressjs.com/) | Custom Scalable REST API |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas/database) | Persistent Data Storage |
| **Auth** | [JWT](https://jwt.io/) / [BcryptJS](https://www.npmjs.com/package/bcryptjs) | Security & Session Management |

---

## 🏠 LOCAL DEVELOPMENT

### 1. Clone the repository
```bash
git clone https://github.com/arhanalam789/GymLogix.git
cd GymLogix
```

### 2. Setup Backend
```bash
cd Backend
npm install
# Create a .env file with MONGO_URI and JWT_SECRET
npm run dev
```

### 3. Setup Frontend
```bash
cd Frontend
npm install
npm run dev
```

---

## 🏗️ PRODUCTION ARCHITECTURE

GymLogix is engineered for scalability and production efficiency:

- **Frontend Hosting**: Deployed on **Vercel** with global edge caching.
- **Backend API**: Hosted on **Render** (Auto-sync with GitHub).
- **Environment Detection**: Intelligent API URL switching between `localhost` and `Render` depending on the environment.

---

## 🎨 DESIGN PHILOSOPHY

> "Consistency is the mother of mastery."

GymLogix isn't just an app; it's a visual statement. We use brand red `#FF4F5A` to represent energy and drive, set against deep obsidian backgrounds to minimize distraction and maximize focus.

---

## 👨‍💻 DEVELOPED BY
Created by **Arhan Alam** — Dedicated to pushing the boundaries of web design and fitness technology.

---
© 2026 GYMLOGIX. ALL RIGHTS RESERVED.
