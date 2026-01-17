from typing import Optional, List
from datetime import datetime
from uuid import UUID, uuid4
from sqlmodel import SQLModel, Field
from sqlalchemy import JSON, Column

class Lead(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    email: str
    # Store services as JSON list
    services: List[str] = Field(sa_column=Column(JSON))
    budget_range: Optional[str] = None
    is_urgent: bool = False
    estimated_price: Optional[float] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Project(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    slug: str = Field(unique=True, index=True)
    client_name: str
    title: str
    challenge: Optional[str] = None
    tech_stack: List[str] = Field(sa_column=Column(JSON))
    roi_metrics: Optional[str] = None
    thumbnail_url: Optional[str] = None
    is_published: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AuditLog(SQLModel, table=True):
    __tablename__ = "audit_logs"
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    event_type: str
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    consent_given: Optional[bool] = None
    related_email: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)
