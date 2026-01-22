"""
Database migration script to add new fields to Project model.

This script will:
1. Backup existing data
2. Drop and recreate tables with new schema
3. Restore existing data

Run with: python migrate_database.py
"""

from sqlmodel import Session, select
from app.database import engine
from app.models import Project
import json
from datetime import datetime

def migrate():
    print("Starting database migration...")
    
    # Step 1: Backup existing projects
    print("Step 1: Backing up existing projects...")
    existing_projects = []
    
    try:
        with Session(engine) as session:
            projects = session.exec(select(Project)).all()
            for project in projects:
                existing_projects.append({
                    "id": str(project.id),
                    "slug": project.slug,
                    "client_name": project.client_name,
                    "title": project.title,
                    "challenge": project.challenge,
                    "tech_stack": project.tech_stack,
                    "roi_metrics": project.roi_metrics,
                    "thumbnail_url": project.thumbnail_url,
                    "is_published": project.is_published,
                    "created_at": project.created_at.isoformat() if project.created_at else None,
                })
        print(f"✓ Backed up {len(existing_projects)} projects")
    except Exception as e:
        print(f"Note: Could not backup existing data (table may not exist yet): {e}")
    
    # Save backup to file
    if existing_projects:
        with open("projects_backup.json", "w") as f:
            json.dump(existing_projects, f, indent=2)
        print(f"✓ Backup saved to projects_backup.json")
    
    # Step 2: Drop and recreate tables
    print("\nStep 2: Recreating database schema...")
    from sqlmodel import SQLModel
    
    # Drop all tables
    SQLModel.metadata.drop_all(engine)
    print("✓ Dropped old tables")
    
    # Create new tables with updated schema
    SQLModel.metadata.create_all(engine)
    print("✓ Created new tables with updated schema")
    
    # Step 3: Restore data
    if existing_projects:
        print(f"\nStep 3: Restoring {len(existing_projects)} projects...")
        with Session(engine) as session:
            for proj_data in existing_projects:
                # Create project with old fields + new fields (set to None/defaults)
                project = Project(
                    slug=proj_data["slug"],
                    client_name=proj_data["client_name"],
                    title=proj_data["title"],
                    challenge=proj_data.get("challenge"),
                    description=None,  # New field
                    tech_stack=proj_data["tech_stack"],
                    roi_metrics=proj_data.get("roi_metrics"),
                    thumbnail_url=proj_data.get("thumbnail_url"),
                    is_published=proj_data["is_published"],
                    scheduled_publish_at=None,  # New field
                    created_at=datetime.fromisoformat(proj_data["created_at"]) if proj_data.get("created_at") else datetime.utcnow(),
                    updated_at=None,  # New field
                )
                session.add(project)
            
            session.commit()
        print(f"✓ Restored all projects")
    
    print("\n✅ Migration completed successfully!")
    print("\nNew fields added to Project model:")
    print("  - description (Optional[str])")
    print("  - scheduled_publish_at (Optional[datetime])")
    print("  - updated_at (Optional[datetime])")

if __name__ == "__main__":
    migrate()
