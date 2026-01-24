# Cognent - Developer Handover
## Project Overview
This project is a high-performance web platform for Cognent, built to act as a "Sales Machine" and "Trust Beacon".
It features a **Next.js 14** frontend for SEO/speed and a **FastAPI** backend for robust logic and compliance logging.
## Repository Structure (`/`)
- `frontend/` - Next.js App Router Application.
- `backend/` - Python FastAPI Application.
## Getting Started
### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL (or SQLite for local dev)
### 1. Backend Setup
The backend handles Quote Calculations and Compliance Logging.
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
*API Docs available at: http://127.0.0.1:8000/docs*
### 2. Frontend Setup
The frontend contains the Marketing Pages and Quote Wizard.
```bash
cd frontend
npm install
npm run dev
```
*App running at: http://localhost:3000*
## Core Features Implemented
### 1. Interactive Quote Wizard (`/estimate`)
- **State**: Managed by Zustand (`store/useQuoteStore.ts`).
- **Flow**: Services -> Timeline -> Email Capture.
- **Backend Integration**: POSTs to `/api/v1/leads/calculate`.
### 2. Compliance Engine
- **Consent Manager**: Global component in `layout.tsx` that checks `localStorage`.
- **Logging**: POSTs to `/api/v1/compliance/consent` to create an immutable audit log.
### 3. Design System
- **Tailwind**: Utility-first styling.
- **Framer Motion**: Animations for `Hero` and `Button` interactions.
- **Components**: Located in `components/ui` (Button, Card) and `components/features`.
## Deployment Guide
### Frontend (Vercel)
1. Import the `frontend` root directory into Vercel.
2. Build Command: `next build`
3. Install Command: `npm install`
4. Add Environment Variables:
   - `NEXT_PUBLIC_API_URL`: URL of your deployed backend.
### Backend (Render/Railway)
1. Connect repository.
2. Root Directory: `backend`
3. Build Command: `pip install -r requirements.txt`
4. Start Command: `uvicorn main:app --host 0.0.0.0 --port 10000`
5. Add Environment Variables:
   - `DATABASE_URL`: Connection string for PostgreSQL.
## Next Steps for Development
1. **Connect Real Email Service**: Update `backend/app/api/v1/leads.py` to use SendGrid/Resend.
2. **Admin Dashboard**: Create a secure `/admin` route to view Leads and Audit Logs.
3. **Blog/Case Studies**: Populate the `projects` table and create the dynamic `/work/[slug]` route.
---
*Built by Antigravity Agent*