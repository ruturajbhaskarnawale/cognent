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
    html_content = f"""
    <h1>🚀 New Scale Readiness Audit Request</h1>
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Website/System:</strong> {data.website or 'Not provided'}</p>
    <p><strong>Challenges:</strong> {data.challenges or 'Not provided'}</p>
    <hr>
    <p>Submitted at: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>
    """
    
    admin_success = await email_service.send_email(
        to_email=email_service.admin_email,
        subject=f"🚀 Audit Request: {data.name}",
        html_content=html_content
    )
    
    # Send confirmation to user
    user_html = f"""
    <h2>We've Received Your Audit Request!</h2>
    <p>Hi {data.name},</p>
    <p>Thank you for requesting a Scale Readiness Audit. Our senior architects will review your project details and get back to you within 48 hours.</p>
    <p>Best regards,<br>The Cognent Team</p>
    """
    
    user_success = await email_service.send_email(
        to_email=data.email,
        subject="✅ Scale Readiness Audit Received",
        html_content=user_html
    )

    if not admin_success:
        raise HTTPException(status_code=500, detail="Failed to send notification to team.")

    return {"success": True, "message": "Audit request received. We will contact you soon."}
