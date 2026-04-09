from fastapi import APIRouter, Depends, HTTPException, Request
from sqlmodel import Session
from app.database import get_session
from app.services.email_service import email_service
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, timedelta
from collections import defaultdict

router = APIRouter()

# Simple rate limiting
rate_limit_storage = defaultdict(list)

def check_rate_limit(ip: str, max_requests: int = 5, window_minutes: int = 60) -> bool:
    now = datetime.utcnow()
    cutoff = now - timedelta(minutes=window_minutes)
    rate_limit_storage[ip] = [ts for ts in rate_limit_storage[ip] if ts > cutoff]
    if len(rate_limit_storage[ip]) >= max_requests:
        return False
    rate_limit_storage[ip].append(now)
    return True

class AuditRequest(BaseModel):
    name: str
    email: EmailStr
    website: Optional[str] = None
    challenges: Optional[str] = None

@router.post("/")
async def submit_audit_request(
    request: Request,
    data: AuditRequest
):
    """
    Handle Scale Readiness Audit requests
    """
    client_ip = request.client.host
    if not check_rate_limit(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")

    # Send email to admin
    admin_success = await email_service.send_audit_notification_to_admin(
        name=data.name,
        email=data.email,
        website=data.website,
        challenges=data.challenges
    )
    
    # Send confirmation to user
    user_success = await email_service.send_audit_confirmation_to_client(
        name=data.name,
        email=data.email
    )

    if not admin_success:
        raise HTTPException(status_code=500, detail="Failed to send notification to team.")

    return {"success": True, "message": "Audit request received. We will contact you soon."}
