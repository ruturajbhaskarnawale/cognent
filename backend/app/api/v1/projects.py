from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Project
from app.middleware import verify_admin_token
from typing import List, Optional
from pydantic import BaseModel
from uuid import UUID
from datetime import datetime

router = APIRouter()

# Request model for creating projects
class ProjectCreate(BaseModel):
    slug: str
    client_name: str
    title: str
    challenge: str | None = None
    description: str | None = None
    tech_stack: List[str]
    roi_metrics: str | None = None
    thumbnail_url: str | None = None
    is_published: bool = True
    scheduled_publish_at: str | None = None  # ISO format datetime string

@router.get("", response_model=List[Project])
def get_projects(session: Session = Depends(get_session)):
    projects = session.exec(select(Project).where(Project.is_published == True)).all()
    return projects

@router.get("/all", response_model=List[Project])
def get_all_projects(
    session: Session = Depends(get_session),
    admin: dict = Depends(verify_admin_token)
):
    """
    Get all projects including drafts (Admin only - requires authentication)
    
    Requires a valid JWT token in the Authorization header.
    """
    projects = session.exec(select(Project)).all()
    return projects


@router.get("/{slug}", response_model=Project)
def get_project_by_slug(slug: str, session: Session = Depends(get_session)):
    project = session.exec(select(Project).where(Project.slug == slug)).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.post("", response_model=Project, status_code=201)
def create_project(
    project_data: ProjectCreate, 
    session: Session = Depends(get_session),
    admin: dict = Depends(verify_admin_token)
):
    """
    Create a new project (Admin only - requires authentication)
    
    Requires a valid JWT token in the Authorization header.
    """
    # Check if slug already exists
    existing = session.exec(select(Project).where(Project.slug == project_data.slug)).first()
    if existing:
        raise HTTPException(status_code=400, detail=f"Project with slug '{project_data.slug}' already exists")
    
    # Create new project
    project_dict = project_data.model_dump()
    
    # Convert scheduled_publish_at string to datetime if provided
    if project_dict.get('scheduled_publish_at'):
        try:
            project_dict['scheduled_publish_at'] = datetime.fromisoformat(project_dict['scheduled_publish_at'].replace('Z', '+00:00'))
        except:
            project_dict['scheduled_publish_at'] = None
    
    project = Project(**project_dict)
    session.add(project)
    session.commit()
    session.refresh(project)
    return project

@router.put("/{project_id}", response_model=Project)
def update_project(
    project_id: UUID,
    project_data: ProjectCreate,
    session: Session = Depends(get_session),
    admin: dict = Depends(verify_admin_token)
):
    """
    Update an existing project (Admin only - requires authentication)
    
    Requires a valid JWT token in the Authorization header.
    """
    # Find the project
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Check if slug is being changed and if new slug already exists
    if project_data.slug != project.slug:
        existing = session.exec(select(Project).where(Project.slug == project_data.slug)).first()
        if existing:
            raise HTTPException(status_code=400, detail=f"Project with slug '{project_data.slug}' already exists")
    
    # Update project fields
    project_dict = project_data.model_dump()
    
    # Convert scheduled_publish_at string to datetime if provided
    if project_dict.get('scheduled_publish_at'):
        try:
            project_dict['scheduled_publish_at'] = datetime.fromisoformat(project_dict['scheduled_publish_at'].replace('Z', '+00:00'))
        except:
            project_dict['scheduled_publish_at'] = None
    
    for key, value in project_dict.items():
        setattr(project, key, value)
    
    # Update the updated_at timestamp
    project.updated_at = datetime.utcnow()
    
    session.add(project)
    session.commit()
    session.refresh(project)
    return project

@router.delete("/{project_id}", status_code=204)
def delete_project(
    project_id: UUID,
    session: Session = Depends(get_session),
    admin: dict = Depends(verify_admin_token)
):
    """
    Delete a project (Admin only - requires authentication)
    
    Requires a valid JWT token in the Authorization header.
    """
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    session.delete(project)
    session.commit()
    return None

@router.patch("/{project_id}/publish", response_model=Project)
def toggle_publish(
    project_id: UUID,
    session: Session = Depends(get_session),
    admin: dict = Depends(verify_admin_token)
):
    """
    Toggle the publish status of a project (Admin only - requires authentication)
    
    Requires a valid JWT token in the Authorization header.
    """
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Toggle the is_published field
    project.is_published = not project.is_published
    
    session.add(project)
    session.commit()
    session.refresh(project)
    return project
