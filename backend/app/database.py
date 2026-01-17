from sqlmodel import SQLModel, create_engine, Session
from typing import Generator
import os

# Use SQLite for local development by default, or Postgres if available
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./agency.db")

engine = create_engine(DATABASE_URL, echo=True)

def init_db():
    SQLModel.metadata.create_all(engine)

def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session
