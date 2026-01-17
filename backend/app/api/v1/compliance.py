from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.database import get_session
from app.models import AuditLog
from app.schemas import Consentreate, DeletionRequest
from fastapi import Request

router = APIRouter()

@router.post("/consent")
def log_consent(data: Consentreate, request: Request, session: Session = Depends(get_session)):
    client_ip = request.client.host
    user_agent = request.headers.get("user-agent")
    
    log = AuditLog(
        event_type="COOKIE_CONSENT",
        ip_address=client_ip,
        user_agent=user_agent,
        consent_given=data.consent
    )
    session.add(log)
    session.commit()
    return {"status": "logged"}

@router.post("/request-erasure")
def request_erasure(data: DeletionRequest, request: Request, session: Session = Depends(get_session)):
    client_ip = request.client.host
    log = AuditLog(
        event_type="DELETION_REQUEST",
        ip_address=client_ip,
        related_email=data.email
    )
    session.add(log)
    session.commit()
    # Logic to trigger DPO alert would go here
    return {"status": "received", "message": "Your request has been logged and will be processed within 48 hours."}
