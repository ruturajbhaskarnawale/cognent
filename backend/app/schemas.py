from pydantic import BaseModel, EmailStr
from typing import List, Optional
from uuid import UUID

class LeadCreate(BaseModel):
    email: EmailStr
    services: List[str]
    timeline: Optional[str] = "standard" # urgent or standard

class LeadRead(BaseModel):
    id: UUID
    message: str

class ProjectCreate(BaseModel):
    slug: str
    client_name: str
    title: str
    challenge: str
    tech_stack: List[str]
    roi_metrics: str

class Consentreate(BaseModel):
    type: str # e.g. "cookies", "marketing"
    consent: bool

class DeletionRequest(BaseModel):
    email: EmailStr
