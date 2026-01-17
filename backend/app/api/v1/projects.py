from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Project
from typing import List

router = APIRouter()

@router.get("/", response_model=List[Project])
def get_projects(session: Session = Depends(get_session)):
    projects = session.exec(select(Project).where(Project.is_published == True)).all()
    return projects

@router.get("/{slug}", response_model=Project)
def get_project_by_slug(slug: str, session: Session = Depends(get_session)):
    project = session.exec(select(Project).where(Project.slug == slug)).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

# TODO: Add Admin-only create endpoint
