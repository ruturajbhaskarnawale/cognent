from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db
from contextlib import asynccontextmanager

from app.api.v1 import leads, compliance, projects

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
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
    # Add your production frontend URL after deployment
    # Example: "https://oddjobs.vercel.app",
    # Wildcard for Vercel preview deployments
    "https://*.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
