from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlmodel import Session
from app.database import get_session
from app.models import Lead
from app.schemas import LeadCreate
from typing import List

router = APIRouter()

from app.services.email_service import email_service

@router.post("/calculate", response_model=dict)
async def calculate_quote(lead_in: LeadCreate, background_tasks: BackgroundTasks, session: Session = Depends(get_session)):
    # Simple logic
    base_price = 1000.0
    multiplier = 1.5 if lead_in.timeline == "urgent" else 1.0
    service_cost = len(lead_in.services) * 500
    
    total_price = (base_price + service_cost) * multiplier
    
    lead = Lead(
        email=lead_in.email,
        services=lead_in.services,
        budget_range=lead_in.timeline,
        is_urgent=(lead_in.timeline == "urgent"),
        estimated_price=total_price
    )
    
    session.add(lead)
    session.commit()
    session.refresh(lead)
    
    # Send email in background using the real email service
    background_tasks.add_task(
        email_service.send_email,
        to_email=lead.email,
        subject="🚀 Your Scale Readiness Audit Quote",
        html_content=f"""
        <h1>Your Audit Quote is Ready</h1>
        <p>Based on your requirements, the estimated investment for your Scale Readiness Audit is <strong>${total_price:,.2f}</strong>.</p>
        <p>Our team will reach out shortly to discuss the roadmap.</p>
        """
    )
    
    # Also notify admin
    background_tasks.add_task(
        email_service.send_email,
        to_email=email_service.admin_email,
        subject=f"🔔 New Audit lead: {lead.email}",
        html_content=f"New audit lead calculated: ${total_price:,.2f} for services: {', '.join(lead.services)}"
    )
    
    return {"success": True, "message": "Quote calculated and sent to your email."}
