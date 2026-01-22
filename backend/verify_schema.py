"""Quick script to verify database schema"""
from sqlmodel import Session, select, text
from app.database import engine
from app.models import Project

print("Verifying database schema...")

with Session(engine) as session:
    # Get table info
    result = session.exec(text("PRAGMA table_info(project)"))
    columns = result.fetchall()
    
    print("\nProject table columns:")
    for col in columns:
        print(f"  - {col[1]} ({col[2]})")
    
    # Count projects
    count = session.exec(select(Project)).all()
    print(f"\nTotal projects in database: {len(count)}")
    
    if count:
        print("\nSample project:")
        proj = count[0]
        print(f"  Title: {proj.title}")
        print(f"  Has description field: {hasattr(proj, 'description')}")
        print(f"  Has scheduled_publish_at field: {hasattr(proj, 'scheduled_publish_at')}")
        print(f"  Has updated_at field: {hasattr(proj, 'updated_at')}")

print("\n✅ Schema verification complete!")
