from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlmodel import Session
from app.database import get_session
from app.models import Lead
from app.schemas import LeadCreate
from typing import List

router = APIRouter()

def send_quote_email(email: str, estimated_price: float):
    # Mock email sending
    print(f"Sending quote of ${estimated_price} to {email}")

@router.post("/calculate", response_model=dict)
def calculate_quote(lead_in: LeadCreate, background_tasks: BackgroundTasks, session: Session = Depends(get_session)):
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
    
    # Send email in background
    background_tasks.add_task(send_quote_email, lead.email, total_price)
    
    return {"success": True, "message": "Quote calculated and sent to your email."}
