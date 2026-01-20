from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db
from contextlib import asynccontextmanager

from app.api.v1 import leads, compliance, projects

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
    title="Agency Platform API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://oddjobs-lac.vercel.app",  # Production frontend
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
app.include_router(leads.router, prefix="/api/v1/leads", tags=["Leads"])
app.include_router(compliance.router, prefix="/api/v1/compliance", tags=["Compliance"])
app.include_router(projects.router, prefix="/api/v1/projects", tags=["Projects"])

@app.get("/")
def read_root():
    return {"status": "online", "docs": "/docs"}
