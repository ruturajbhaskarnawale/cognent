from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from app.database import get_session
from app.models import Project
from typing import List

router = APIRouter()

@router.get("/", response_model=List[Project])
def get_projects(session: Session = Depends(get_session)):
    projects = session.exec(select(Project).where(Project.is_published == True)).all()
    return projects

# TODO: Add Admin-only create endpoint
