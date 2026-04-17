# Cognent — Engineering High-Performance Digital Platforms

**Modern Engineering for Visionary Teams.** Cognent is a premium digital engineering studio platform designed to bridge the gap between high-level strategic consulting and enterprise-grade software implementation.

---

## 🏗️ Project Overview

| Badge        | Status                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **Stack**    | ![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi) |
| **License**  | ![License](https://img.shields.io/badge/License-MIT-blue.svg)                                                |
| **Vibe**     | ![Premium](https://img.shields.io/badge/Design-Premium-gold)                                                  |
| **Coverage** | ![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen)                                             |

### [Live Demo](https://cognent-lac.vercel.app/) • [API Documentation](https://cognent-api.up.railway.app/docs) • [Case Studies](https://cognent-lac.vercel.app/work)

---

## 🌟 About The Project

Cognent is more than a website; it's a "Sales Machine" and "Trust Beacon" for a boutique engineering agency. It solves the critical problem of **high-intent lead qualification** by automating the project scoping process through interactive tools.

### 🎯 Who is it for?
- **CTOs of scale-ups** looking for architectural excellence.
- **Founders of venture-backed startups** needing rapid, robust delivery.
- **Enterprise leaders** driving digital transformation.

---

## ✨ Key Features

- **🚀 Interactive Quote Wizard**: A multi-step flow that calculates project estimates in real-time using deterministic algorithms and Zustand state management.
- **🔬 Service Intelligence**: Dedicated deep-dive modules for **AI/ML Integration**, **Cloud Optimization**, and **System Design** with tech-stack visualizations.
- **🛡️ Compliance & Audit Engine**: An immutable logging system that tracks user consent and legal interactions for GDPR/CCPA readiness.
- **💎 Dynamic Work Showcase**: A data-driven portfolio highlighting challenges, technical solutions, and ROI metrics pulled directly from the backend API.
- **⚡ Performance-First Architecture**: SSR-optimized for <1.5s load times and seamless hardware-accelerated animations via Framer Motion.

---

## 🛠 Tech Stack

| Category           | Technologies                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| **Frontend**       | Next.js 14, React 18, TypeScript, Tailwind CSS                               |
| **Backend**        | FastAPI (Python 3.11+), SQLModel, Pydantic                                   |
| **State/Motion**   | Zustand, Framer Motion, Lucide React                                         |
| **Database**       | PostgreSQL, SQLAlchemy                                                       |
| **Infrastructure** | Vercel (Frontend), Railway/Render (Backend), Cloudinary (Assets)             |
| **Security**       | JWT Authentication, SMTP (aiosmtplib), CORS Enforcement                      |

---

## 📂 Repository Structure

```text
Cognent/
├── 📂 frontend/               # Next.js 14 App Router Application
│   ├── 📂 app/                # Main application routes & layouts
│   ├── 📂 components/         # Reusable UI components (Design System)
│   ├── 📂 store/              # Zustand state management (Quote Engine)
│   └── 📂 lib/                # Utility functions & API hooks
├── 📂 backend/                # FastAPI High-Performance Backend
│   ├── 📂 app/                # Core logic, API routes, and Models
│   │   ├── 📂 api/v1/         # Versioned REST endpoints
│   │   ├── 📂 models/         # SQLModel database schemas
│   │   └── 📂 services/       # Business logic & automation
│   ├── 📜 main.py             # Server entry point
│   └── 📜 requirements.txt    # Python dependency manifest
└── 📜 PROJECT_DOCUMENTATION.md # Comprehensive engineering specs
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/oddjobs.git
cd oddjobs
```

### 2️⃣ Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧠 Engineering Excellence

### Decoupled Architecture
The system follows a clean **Decoupled Architecture** pattern. The FastAPI backend handles heavy lifting (calculations, logging, data persistence), while the Next.js frontend focuses on high-fidelity delivery and SEO.

### Scalability & Reliability
- **Type Safety**: End-to-end type safety from Pydantic models to TypeScript interfaces.
- **Immutable Logs**: Specialized "Compliance Log" for legal auditing.
- **Optimized Delivery**: Vercel edge delivery with sub-100ms response times for the Quote Wizard.

---

## 🔮 Future Roadmap

- [ ] **AI Project Summarizer**: Automated summary generation for new leads using LLMs.
- [ ] **Client Dashboard**: A private portal for real-time project tracking.
- [ ] **Multi-Region Sync**: Global low-latency access via distributed database clusters.

---

## 👨‍💻 Author

**Ruturaj Bhaskar Nawale**  
*Technical Architect & Full-Stack Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)](https://www.linkedin.com/in/ruturaj-nawale-863418288)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-black?logo=github)](https://github.com/ruturajbhaskarnawale)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange)](https://ruturaj-nawale-portfolio.vercel.app)

---

## 🤝 Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Support
If you find this project useful or interesting, please give it a star! It helps visibility and encourages further development.
