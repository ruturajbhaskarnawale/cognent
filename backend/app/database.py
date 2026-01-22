from sqlmodel import SQLModel, create_engine, Session
from typing import Generator
import os

# Use SQLite for local development by default, or Postgres if available
# Check for multiple possible environment variable names used by Vercel Postgres
DATABASE_URL = os.getenv("DATABASE_URL") or os.getenv("POSTGRES_URL") or os.getenv("POSTGRES_PRISMA_URL") or "sqlite:///./agency.db"

# SQLAlchemy 1.4+ requires postgresql:// instead of postgres://
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Disable echo in production to reduce logs
is_production = os.getenv("VERCEL_ENV") == "production"

# Create engine with appropriate settings
if DATABASE_URL.startswith("postgresql"):
    # PostgreSQL configuration for Vercel
    engine = create_engine(
        DATABASE_URL,
        echo=False,  # Disable echo in production
        pool_pre_ping=True,  # Verify connections before using
        connect_args={
            "connect_timeout": 10,
        }
    )
else:
    # SQLite configuration for local development
    engine = create_engine(DATABASE_URL, echo=not is_production)

def init_db():
    """Initialize database tables. Safe to call multiple times."""
    try:
        SQLModel.metadata.create_all(engine)
    except Exception as e:
        print(f"Database initialization error: {e}")
        # Don't crash if tables already exist

def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session
