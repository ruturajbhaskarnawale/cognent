from fastapi import APIRouter, Depends, HTTPException, Request
from sqlmodel import Session, select
from app.database import get_session
from app.models import ContactSubmission, Subscription
from app.services.email_service import email_service
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, timedelta
from collections import defaultdict

router = APIRouter()

# Rate limiting storage (in-memory for simplicity)
rate_limit_storage = defaultdict(list)

def check_rate_limit(ip: str, max_requests: int = 5, window_minutes: int = 60) -> bool:
    """Simple rate limiting: max_requests per window_minutes"""
    now = datetime.utcnow()
    cutoff = now - timedelta(minutes=window_minutes)
    
    # Clean old entries
    rate_limit_storage[ip] = [
        timestamp for timestamp in rate_limit_storage[ip]
        if timestamp > cutoff
    ]
    
    # Check if limit exceeded
    if len(rate_limit_storage[ip]) >= max_requests:
        return False
    
    # Add current request
    rate_limit_storage[ip].append(now)
    return True

# Request models
class ContactFormRequest(BaseModel):
    name: str
    email: EmailStr
    message: str
    phone: str
    subject: Optional[str] = None
    company: Optional[str] = None

class SubscribeRequest(BaseModel):
    email: EmailStr

# Response models
class ContactFormResponse(BaseModel):
    success: bool
    message: str

class SubscribeResponse(BaseModel):
    success: bool
    message: str

@router.post("/contact", response_model=ContactFormResponse)
@router.post("/contact/", response_model=ContactFormResponse, include_in_schema=False)
async def submit_contact_form(
    request: Request,
    form_data: ContactFormRequest,
    session: Session = Depends(get_session)
):
    """
    Handle contact form submissions
    - Saves to database
    - Sends email to admin
    - Sends confirmation to user
    - Rate limited to prevent spam
    """
    
    # Get client IP
    client_ip = request.client.host
    
    # Check rate limit
    if not check_rate_limit(client_ip, max_requests=5, window_minutes=60):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later."
        )
    
    try:
        # Save to database
        contact = ContactSubmission(
            name=form_data.name,
            email=form_data.email,
            subject=form_data.subject,
            message=form_data.message,
            phone=form_data.phone,
            company=form_data.company,
            status="pending"
        )
        session.add(contact)
        session.commit()
        
        # Send email to admin
        admin_email_sent = await email_service.send_contact_form_to_admin(
            name=form_data.name,
            email=form_data.email,
            message=form_data.message,
            subject=form_data.subject,
            phone=form_data.phone,
            company=form_data.company
        )
        
        # Send confirmation to user
        user_email_sent = await email_service.send_contact_confirmation(
            name=form_data.name,
            email=form_data.email
        )
        
        if not admin_email_sent:
            print("⚠️ Warning: Failed to send email to admin")
        
        if not user_email_sent:
            print("⚠️ Warning: Failed to send confirmation to user")
        
        return ContactFormResponse(
            success=True,
            message="Thank you! We've received your message and will get back to you soon."
        )
        
    except Exception as e:
        print(f"❌ Error processing contact form: {str(e)}")
        session.rollback()
        raise HTTPException(
            status_code=500,
            detail="Failed to process your request. Please try again later."
        )

@router.post("/subscribe", response_model=SubscribeResponse)
@router.post("/subscribe/", response_model=SubscribeResponse, include_in_schema=False)
async def subscribe_newsletter(
    request: Request,
    subscribe_data: SubscribeRequest,
    session: Session = Depends(get_session)
):
    """
    Handle newsletter subscriptions
    - Checks for existing subscription
    - Saves to database
    - Sends notification to admin
    - Sends welcome email to subscriber
    - Rate limited to prevent spam
    """
    
    # Get client IP
    client_ip = request.client.host
    
    # Check rate limit
    if not check_rate_limit(client_ip, max_requests=3, window_minutes=60):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later."
        )
    
    try:
        # Check if already subscribed
        existing = session.exec(
            select(Subscription).where(Subscription.email == subscribe_data.email)
        ).first()
        
        if existing:
            if existing.is_active:
                return SubscribeResponse(
                    success=True,
                    message="You're already subscribed to our newsletter!"
                )
            else:
                # Reactivate subscription
                existing.is_active = True
                existing.subscribed_at = datetime.utcnow()
                session.add(existing)
                session.commit()
                
                await email_service.send_subscription_confirmation(subscribe_data.email)
                
                return SubscribeResponse(
                    success=True,
                    message="Welcome back! Your subscription has been reactivated."
                )
        
        # Create new subscription
        subscription = Subscription(
            email=subscribe_data.email,
            is_active=True
        )
        session.add(subscription)
        session.commit()
        
        # Send notification to admin
        await email_service.send_subscription_to_admin(subscribe_data.email)
        
        # Send welcome email to subscriber
        await email_service.send_subscription_confirmation(subscribe_data.email)
        
        return SubscribeResponse(
            success=True,
            message="Thank you for subscribing! Check your email for confirmation."
        )
        
    except Exception as e:
        print(f"❌ Error processing subscription: {str(e)}")
        session.rollback()
        raise HTTPException(
            status_code=500,
            detail="Failed to process your subscription. Please try again later."
        )

@router.get("/contact/submissions")
async def get_contact_submissions(
    session: Session = Depends(get_session),
    status: Optional[str] = None
):
    """Get all contact submissions (admin only - add auth later)"""
    query = select(ContactSubmission)
    if status:
        query = query.where(ContactSubmission.status == status)
    
    submissions = session.exec(query.order_by(ContactSubmission.created_at.desc())).all()
    return submissions

@router.get("/subscriptions")
async def get_subscriptions(
    session: Session = Depends(get_session),
    active_only: bool = True
):
    """Get all subscriptions (admin only - add auth later)"""
    query = select(Subscription)
    if active_only:
        query = query.where(Subscription.is_active == True)
    
    subscriptions = session.exec(query.order_by(Subscription.subscribed_at.desc())).all()
    return subscriptions
