# 🎨 Prashant Yati — Portfolio Website

> A beautifully crafted developer portfolio built with an **origami & paper-fold aesthetic**, featuring tactile 3D interactions, smooth animations, and a full MERN-stack backend for dynamic content.

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Sections](#-live-sections)
- [Featured Projects](#-featured-projects)
- [Skills & Technologies](#-skills--technologies)
- [Architecture](#-architecture)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Social & Profiles](#-social--profiles)
- [License](#-license)

---

## 🌟 Overview

This is the personal portfolio website of **Prashant Yati** — a Full Stack Developer & AI Systems Engineer based in India. The site showcases professional projects, technical skills, and provides a contact interface — all wrapped in a unique **origami-inspired design** with paper-fold textures, 3D card flips, and elegant typography using Playfair Display, Space Mono, and Crimson Pro fonts.

### ✨ Design Highlights

| Feature | Description |
|---|---|
| **Origami Aesthetic** | Paper-fold textures, creased card corners, and tactile visual design |
| **3D Card Flips** | Interactive project cards with smooth CSS 3D transforms |
| **Flying Reviews** | Origami-style animated review/testimonial cards |
| **Smooth Scroll Navigation** | Fixed navbar with active section tracking |
| **Responsive Layout** | Fully adaptive across desktop, tablet, and mobile |
| **Micro-Animations** | Fade-ups, staggered reveals, marquee skill tickers, and pulse effects |
| **Dark Warm Palette** | Earthy cream, gold accent, and warm tones throughout |

---

## 📄 Live Sections

The website is divided into **5 main sections**, each accessible via smooth-scroll navigation:

### 1. 🏠 Home (Hero)
- Full-screen hero with animated introduction
- Name: **Prashant Yati**
- Tagline: *"Full Stack Developer & AI Systems Engineer"*
- Bio highlighting specializations in scalable web apps, real-time architectures (Socket.io), and AI-powered solutions using modern LLMs
- GitHub avatar pulled dynamically from the GitHub API
- Call-to-action buttons for exploring projects and making contact

### 2. 🛠️ Skills & Capabilities
A visually rich skills showcase organized into **6 categories** with origami-cornered cards:

| Category | Technologies |
|---|---|
| **Languages** | JavaScript (ES6+), TypeScript, C++ (DSA & Logic), Python |
| **Frontend Development** | React.js 19, Next.js, Vite, Tailwind CSS & SCSS, Zustand & Context API |
| **Backend & Databases** | Node.js & Express, FastAPI (Python), MongoDB & Mongoose, RESTful APIs, Socket.io WebSockets |
| **AI & Cloud Engineering** | Mistral LLM & Gemini API, LangChain Orchestration, ImageKit Media CDN, Clerk Authentication, Microservices Architecture |
| **CS Fundamentals & DSA** | Data Structures in C++, Algorithm Design & Analysis, Dynamic Programming, Object Oriented Design, Operating Systems |
| **Tools & Workflow** | Git & GitHub VCS, Postman API Testing, Linux Terminal & Bash, npm & build tools, VS Code ecosystem |

Plus two **scrolling marquee tickers** with rotating skill badges.

### 3. 💼 Projects
Interactive project gallery with **3D flip cards** — each card has a front face (title, language, stars) and a back face (full description, tech stack, and links).

### 4. ⭐ Reviews
Community testimonials displayed as **origami paper airplanes** with animated fly-in effects. Visitors can submit their own reviews which are stored in MongoDB.

### 5. 📬 Contact
A paper-textured contact form with:
- Name, Email, and Message fields with validation
- Email delivery via **Nodemailer**
- Social links sidebar (GitHub, LinkedIn, LeetCode, CodeForces, CodeChef)
- Rate-limited API to prevent spam

---

## 💼 Featured Projects

| # | Project | Description | Tech Stack | Links |
|---|---|---|---|---|
| 1 | **PrepAI — AI Interview Platform** | Full-stack AI-powered interview prep platform. Leverages Mistral LLM via LangChain for real-time mock interviews, response evaluation, and personalized feedback with skill gaps and roadmaps. | React.js, FastAPI, Mistral AI, LangChain, Node.js, MongoDB, WebSockets | [GitHub](https://github.com/theprashantyati/prepai) |
| 2 | **Helpit — AI Code Reviewer** | Automated code review app using Google Gemini API. Paste code into an in-browser editor, receive structured feedback, safe patches, and syntax fixes across multiple languages. | React 19, Vite, Google Gemini API, Express.js, Node.js, PrismJS | [GitHub](https://github.com/theprashantyati/Helpit) |
| 3 | **LetsChat — Real-Time Messenger** | Premium full-stack real-time chat app (MERN stack). Instant messaging with Socket.io, Clerk auth, presence tracking, media sharing with ImageKit, and customizable themes. | React 19, Tailwind CSS, Socket.io, Clerk Auth, Node.js, Express, MongoDB, ImageKit | [GitHub](https://github.com/theprashantyati/letschat) · [Live](https://letschat-wp8r.onrender.com/) |
| 4 | **Uber Full-Stack Platform** | Ride-hailing clone with real-time driver & rider tracking, interactive route mapping, dynamic distance/fare estimations, and JWT authentication. | React.js, Node.js, Express, MongoDB, Socket.io, Leaflet Maps | [GitHub](https://github.com/theprashantyati/uber) |
| 5 | **DSA & Problem Solving in C++** | Repository of high-efficiency algorithmic implementations — graph algorithms, dynamic programming, binary search trees, tries, segment trees, and competitive programming problems. | C++, Algorithms, Data Structures, Dynamic Programming, Graph Theory | [GitHub](https://github.com/theprashantyati/Problems) |
| 6 | **Origami Portfolio Showcase** | This very portfolio! A bespoke developer portfolio with origami paper-fold aesthetic, tactile 3D card flips, responsive layouts, and full MERN API integration. | React.js, Origami CSS, Node.js, Express, MongoDB, REST API | [GitHub](https://github.com/theprashantyati) |

---

## 🧰 Skills & Technologies

### Core Stack

```
Frontend:   React 19 · Vite · Tailwind CSS · Zustand · Next.js
Backend:    Node.js · Express.js · FastAPI · Socket.io
Database:   MongoDB · Mongoose
AI/ML:      Mistral LLM · Google Gemini API · LangChain
Languages:  JavaScript · TypeScript · C++ · Python
```

### Full Technology Cloud

> React 19, Node.js, FastAPI, MongoDB, C++, Express, TypeScript, Python, Socket.io, Git, Tailwind, LangChain, Gemini API, Mistral LLM, Zustand, Vite, REST APIs, DSA, Clerk Auth, Docker, Webpack, Firebase, Sass, Postman, Nginx, Cloudinary, JWT, Mongoose, Redux, GSAP, ImageKit, Vercel, Bash, OOP, GitHub, OAuth

---

## 🏗️ Architecture

```
PORTFOLIO-main/
├── public/                    # Frontend (pre-built React SPA)
│   ├── index.html             # Entry HTML with SEO meta tags
│   └── assets/
│       ├── index-CBR6G0E9.js  # Bundled React application
│       └── index-CPwNfHkN.css # Bundled styles (origami theme)
├── src/                       # Backend (Express.js API)
│   ├── config/
│   │   └── db.js              # MongoDB connection with Mongoose
│   ├── controllers/
│   │   ├── profileController.js   # GitHub profile data fetcher
│   │   ├── projectController.js   # GitHub repos fetcher
│   │   ├── reviewController.js    # Review CRUD operations
│   │   └── contactController.js   # Contact form email handler
│   ├── middleware/
│   │   ├── rateLimiter.js     # Express rate limiting
│   │   └── errorHandler.js    # Centralized error handling
│   ├── models/                # Mongoose schemas
│   ├── routes/                # Express route definitions
│   └── utils/
│       └── getSecret.js       # Environment variable helper
├── server.js                  # Express server entry point
├── package.json               # Dependencies & scripts
└── .env                       # Environment configuration
```

### How It Works

1. **Frontend** — A pre-built React 19 SPA served as static files. Uses an origami-inspired CSS design system with 3D transforms, paper textures, and warm color palettes.
2. **Backend** — Express.js API server provides dynamic data:
   - Fetches live GitHub profile info and repository data
   - Handles contact form submissions via Nodemailer
   - Manages visitor reviews with MongoDB
3. **Security** — Helmet CSP headers, CORS configuration, rate limiting, and input validation.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/profile` | Fetches GitHub profile data (name, bio, avatar, location) |
| `GET` | `/api/projects` | Fetches GitHub repository data (projects, stars, forks) |
| `GET` | `/api/reviews` | Retrieves all visitor reviews |
| `POST` | `/api/reviews` | Submit a new review |
| `POST` | `/api/contact` | Submit a contact form message (sent via email) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** instance (local or cloud — e.g., MongoDB Atlas)
- **npm** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/theprashantyati/PORTFOLIO.git
cd PORTFOLIO

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env

# 4. Start the development server
npm run dev

# 5. Open in browser
open http://localhost:3000
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Start with nodemon (auto-restart on changes) |
| **Start** | `npm start` | Start production server |
| **Seed** | `npm run seed` | Seed the database with initial data |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio


```

---

## 🌐 Social & Profiles

| Platform | Link |
|---|---|
| **GitHub** | [github.com/theprashantyati](https://github.com/theprashantyati) |
| **LinkedIn** | [linkedin.com/in/prashant-yati](https://www.linkedin.com/in/prashant-yati-6157aa34a/) |
| **LeetCode** | [leetcode.com/u/yati69](https://leetcode.com/u/yati69/) |
| **CodeForces** | [codeforces.com/profile/prashantyati](https://codeforces.com/profile/prashantyati) |
| **CodeChef** | [codechef.com/users/prashantyati](https://www.codechef.com/users/prashantyati) |

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">
  Crafted with ❤️ by <strong>Prashant Yati</strong>
</p>
