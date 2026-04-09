from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db
from contextlib import asynccontextmanager
from dotenv import load_dotenv

# Load environment variables early
load_dotenv()

from app.api.v1 import leads, compliance, projects, auth, estimate, contact, audit

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize database tables (safe to call multiple times)
    try:
        init_db()
    except Exception as e:
        print(f"Warning: Database initialization failed: {e}")
        # Continue anyway - tables might already exist
    yield

app = FastAPI(
    title="Cognent API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
    "https://cognent-lac.vercel.app",  # Production frontend
]

# Allow all Vercel deployments using regex
allow_origin_regex = r"https://.*\.vercel\.app"

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=allow_origin_regex,  # Support all Vercel deployments
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(audit.router, prefix="/api/v1/audit", tags=["Audit"])
app.include_router(leads.router, prefix="/api/v1/leads", tags=["Leads"])
app.include_router(compliance.router, prefix="/api/v1/compliance", tags=["Compliance"])
app.include_router(projects.router, prefix="/api/v1/projects", tags=["Projects"])
app.include_router(contact.router, prefix="/api/v1/contact", tags=["Contact"])
app.include_router(estimate.router, prefix="/api/v1/estimate", tags=["Estimate"])

@app.get("/")
def read_root():
    return {"status": "online", "docs": "/docs"}
