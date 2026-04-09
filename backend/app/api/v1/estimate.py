from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional
from app.services.email_service import email_service
from collections import defaultdict
from datetime import datetime, timedelta

router = APIRouter()

# Simple rate limiting
rate_limit_storage = defaultdict(list)

def check_rate_limit(ip: str, max_requests: int = 10, window_minutes: int = 60) -> bool:
    now = datetime.utcnow()
    cutoff = now - timedelta(minutes=window_minutes)
    rate_limit_storage[ip] = [ts for ts in rate_limit_storage[ip] if ts > cutoff]
    if len(rate_limit_storage[ip]) >= max_requests:
        return False
    rate_limit_storage[ip].append(now)
    return True

class EstimateNotificationRequest(BaseModel):
    project_type: str
    features: List[str]
    team_size: str
    user_phone: str
    user_name: Optional[str] = None
    user_email: Optional[str] = None

@router.post("/notify")
async def notify_estimate(
    request: Request,
    data: EstimateNotificationRequest
):
    """
    Receive project configuration and notify admin
    """
    client_ip = request.client.host
    if not check_rate_limit(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests")

    admin_success = await email_service.send_estimate_notification_to_admin(
        project_type=data.project_type,
        features=data.features,
        team_size=data.team_size,
        user_name=data.user_name,
        user_email=data.user_email,
        user_phone=data.user_phone
    )

    # Send confirmation to user if email is provided
    if data.user_email:
        await email_service.send_estimate_confirmation_to_client(
            name=data.user_name,
            email=data.user_email,
            project_type=data.project_type,
            features=data.features,
            team_size=data.team_size
        )

    if not admin_success:
        raise HTTPException(status_code=500, detail="Failed to send notification")

    return {"success": True, "message": "Notification sent"}
