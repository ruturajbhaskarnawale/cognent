from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Project
from typing import List
from pydantic import BaseModel

router = APIRouter()

# Request model for creating projects
class ProjectCreate(BaseModel):
    slug: str
    client_name: str
    title: str
    challenge: str | None = None
    tech_stack: List[str]
    roi_metrics: str | None = None
    thumbnail_url: str | None = None
    is_published: bool = True

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

@router.post("/", response_model=Project, status_code=201)
def create_project(project_data: ProjectCreate, session: Session = Depends(get_session)):
    """
    Create a new project. 
    
    Use this endpoint to add projects without writing code!
    Access via: https://oddjobs-backend.vercel.app/docs
    """
    # Check if slug already exists
    existing = session.exec(select(Project).where(Project.slug == project_data.slug)).first()
    if existing:
        raise HTTPException(status_code=400, detail=f"Project with slug '{project_data.slug}' already exists")
    
    # Create new project
    project = Project(**project_data.model_dump())
    session.add(project)
    session.commit()
    session.refresh(project)
    return project
