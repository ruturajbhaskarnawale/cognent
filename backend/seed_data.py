from sqlmodel import Session, select
from app.database import engine
from app.models.all_models import Project
from datetime import datetime

def seed_projects():
    projects = [
        {
            "slug": "fintech-scale-hardening",
            "client_name": "Nexus Finance",
            "title": "Hardening Infrastructure for 10M+ Real-time Transactions",
            "challenge": "Legacy monolith was experiencing 40% request failure rates during market volatility spikes, threatening institutional liquidity and regulatory compliance.",
            "description": "Implemented a decoupled, event-driven architecture using Kafka for transaction queuing and Go-based microservices. Hardened the database layer with automated failover and read-replicas to ensure 99.99% availability.",
            "tech_stack": ["Go", "Kafka", "PostgreSQL", "AWS EKS", "Redis"],
            "roi_metrics": "System survived 12x surge traffic with zero dropped transactions and latency reduced by 85%.",
            "thumbnail_url": "https://images.unsplash.com/photo-1611974714131-306fb977926b?q=80&w=2070&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "ecommerce-spike-survival",
            "client_name": "Vela Retail",
            "title": "Zero-Downtime Migration for Global E-commerce Surge",
            "challenge": "A viral marketing campaign caused a 50x traffic surge that crashed the previous infrastructure, leading to $200k in lost revenue in just 2 hours.",
            "description": "Architected a multi-region deployment on AWS using CloudFront for global edge caching and Lambda for serverless scaling. We executed a zero-downtime migration of the checkout pipeline while the site was under load.",
            "tech_stack": ["Next.js", "Node.js", "Terraform", "AWS Lambda", "DynamoDB"],
            "roi_metrics": "Maintained 100% uptime through BFCM peak; average response time stayed below 300ms globally.",
            "thumbnail_url": "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
            "is_published": True
        },
        {
            "slug": "ai-agent-automation-pipeline",
            "client_name": "Insight Corp",
            "title": "Scaling AI Agent Pipelines for Institutional Data",
            "challenge": "Scaling LLM-driven complex data analysis pipelines was causing massive GPU bottlenecking and cost overruns, slowing down critical decision-making.",
            "description": "Engineered a high-concurrency job queue system that optimized GPU utilization by 40%. Implemented a custom caching layer for frequent LLM embeddings to reduce API costs by 60% while maintaining real-time performance.",
            "tech_stack": ["Python", "FastAPI", "Pinecone", "Docker", "PyTorch"],
            "roi_metrics": "Processing capacity increased from 1k to 50k reports per hour with no additional infrastructure spend.",
            "thumbnail_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
            "is_published": True
        }
    ]

    with Session(engine) as session:
        # Clear existing dummy projects first
        existing_projects = session.exec(select(Project)).all()
        for p in existing_projects:
            session.delete(p)
        session.commit()
        
        print(f"Cleared {len(existing_projects)} existing projects.")

        for p_data in projects:
            project = Project(**p_data)
            session.add(project)
        
        session.commit()
        print(f"Successfully seeded {len(projects)} premium case studies.")

if __name__ == "__main__":
    seed_projects()
