from sqlmodel import Session, select
from app.database import engine
from app.models import Project

def seed_projects():
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
            "challenge": "Nova wanted to appeal to Gen Z with a mobile-first banking experience without capturing biometric data.",
            "tech_stack": ["Flutter", "Go", "Kubernetes", "Vault"],
            "roi_metrics": "200k downloads in first month. 4.9 star app store rating.",
            "thumbnail_url": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "eco-market",
            "client_name": "EcoMarket",
            "title": "Sustainable E-commerce",
            "challenge": "Building a carbon-neutral marketplace that handles high traffic spikes during eco-awareness campaigns.",
            "tech_stack": ["Shopify Hydrogen", "Sanity CMS", "Vercel"],
            "roi_metrics": "150% YoY growth. Carbon neutral certification achieved.",
            "thumbnail_url": "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b73?q=80&w=1470&auto=format&fit=crop",
            "is_published": True
        }
    ]

    with Session(engine) as session:
        for p_data in projects_data:
            # Check if exists
            existing = session.exec(select(Project).where(Project.slug == p_data["slug"])).first()
            if not existing:
                print(f"Creating project: {p_data['title']}")
                project = Project(**p_data)
                session.add(project)
            else:
                print(f"Skipping existing project: {p_data['title']}")
        
        session.commit()
        print("Seeding complete!")

if __name__ == "__main__":
    seed_projects()
