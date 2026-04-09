import asyncio
import os
import sys

# Add backend directory to path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend')))

from backend.app.services.email_service import EmailService

class MockEmailService(EmailService):
    async def send_email(self, to_email, subject, html_content, plain_content=None):
        try:
            print(f"\n--- MOCK EMAIL SENT ---")
            print(f"To: {to_email}")
            print(f"Subject: {subject}")
        except UnicodeEncodeError:
            print(f"To: {to_email}")
            print(f"Subject: [Contains Unicode Characters]")
            
        print(f"HTML Content Length: {len(html_content)}")
        
        # Save to a temporary file for inspection
        filename = f"test_email_{to_email.split('@')[0]}.html"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"HTML saved to {filename}")
        return True

async def run_tests():
    service = MockEmailService()
    
    print("Testing Audit Emails...")
    await service.send_audit_notification_to_admin(
        name="Test User",
        email="client@example.com",
        website="https://test.com",
        challenges="Scaling database issues"
    )
    await service.send_audit_confirmation_to_client(
        name="Test User",
        email="client@example.com"
    )
    
    print("\nTesting Estimate Emails...")
    await service.send_estimate_confirmation_to_client(
        name="Test User",
        email="client@example.com",
        project_type="MVP / Startup",
        features=["User Auth", "Payments"],
        team_size="Small Team (2-3)"
    )

if __name__ == "__main__":
    asyncio.run(run_tests())
