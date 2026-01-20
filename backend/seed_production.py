"""
Seed Production Database Script

This script connects to your Vercel Postgres database and seeds it with project data.
Run this locally with your production DATABASE_URL.
"""

import os
from sqlmodel import Session, select
from app.database import engine, init_db
from app.models import Project

def seed_production():
    """Seed the production database with project data."""
    
    # Verify we're using PostgreSQL
    database_url = os.getenv("DATABASE_URL", "")
    if not database_url.startswith("postgres"):
        print("❌ ERROR: DATABASE_URL must be a PostgreSQL connection string")
        print(f"Current DATABASE_URL: {database_url[:30]}...")
        return
    
    print("🔗 Connecting to production database...")
    print(f"Database: {database_url[:30]}...")
    
    # Initialize database (create tables if they don't exist)
    print("📊 Initializing database tables...")
    init_db()
    
    # Project data
    projects_data = [
        {
            "slug": "zenith-fitness",
            "client_name": "Zenith Fitness",
            "title": "Membership Portal & App",
            "challenge": "Zenith Fitness needed to unify 5 locations under one digital roof, reduce churn, and automate class bookings.",
            "tech_stack": ["Next.js", "Trpc", "PostgreSQL", "Stripe"],
            "roi_metrics": "35% increase in member retention, 20hrs/week saved in admin time.",
            "thumbnail_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "nexus-systems",
            "client_name": "Nexus Systems",
            "title": "Enterprise ERP Dashboard",
            "challenge": "Legacy systems were causing data silos. Nexus needed a real-time command center for their logistics operations.",
            "tech_stack": ["React", "Python", "Redis", "AWS"],
            "roi_metrics": "Real-time tracking of 50k+ daily shipments. 99.9% uptime achieved.",
            "thumbnail_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "nova-bank",
            "client_name": "Nova Bank",
            "title": "Secure Mobile Banking",
            "challenge": "Nova wanted to appeal to Gen Z with a mobile-first banking experience without compromising security.",
            "tech_stack": ["Flutter", "Go", "Kubernetes", "Vault"],
            "roi_metrics": "200k downloads in first month. 4.9 star app store rating.",
            "thumbnail_url": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "greenleaf-marketplace",
            "client_name": "GreenLeaf Co.",
            "title": "Sustainable E-commerce Platform",
            "challenge": "Building a carbon-neutral marketplace that handles high traffic spikes during eco-awareness campaigns.",
            "tech_stack": ["Shopify Hydrogen", "Sanity CMS", "Vercel"],
            "roi_metrics": "150% YoY growth. Carbon neutral certification achieved.",
            "thumbnail_url": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "techstart-accelerator",
            "client_name": "TechStart Ventures",
            "title": "Startup Accelerator Platform",
            "challenge": "TechStart needed a comprehensive platform to manage 100+ startups, mentors, and investors with real-time collaboration tools.",
            "tech_stack": ["Next.js", "FastAPI", "PostgreSQL", "WebSockets"],
            "roi_metrics": "Managed $50M in funding rounds. 85% startup success rate.",
            "thumbnail_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
            "is_published": True
        }
    ]
    
    print(f"\n🌱 Seeding {len(projects_data)} projects...")
    
    with Session(engine) as session:
        created_count = 0
        skipped_count = 0
        
        for p_data in projects_data:
            # Check if exists
            existing = session.exec(
                select(Project).where(Project.slug == p_data["slug"])
            ).first()
            
            if existing:
                print(f"⏭️  Skipping existing: {p_data['title']}")
                skipped_count += 1
            else:
                print(f"✅ Creating: {p_data['title']}")
                project = Project(**p_data)
                session.add(project)
                created_count += 1
        
        session.commit()
        
        print(f"\n🎉 Seeding complete!")
        print(f"   Created: {created_count} projects")
        print(f"   Skipped: {skipped_count} projects")
        print(f"   Total: {created_count + skipped_count} projects in database")

if __name__ == "__main__":
    seed_production()
