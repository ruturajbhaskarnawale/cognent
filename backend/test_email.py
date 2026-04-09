import asyncio
import os
from dotenv import load_dotenv
from app.services.email_service import email_service

async def test_email():
    load_dotenv()
    print("Testing Email Service...")
    print(f"SMTP Host: {os.getenv('SMTP_HOST')}")
    print(f"SMTP Port: {os.getenv('SMTP_PORT')}")
    print(f"SMTP User: {os.getenv('SMTP_USERNAME')}")
    
    success = await email_service.send_email(
        to_email=os.getenv("ADMIN_EMAIL"),
        subject="🛠 Connectivity Test",
        html_content="<h1>SMTP Connection Test</h1><p>If you see this, the email system is working correctly.</p>"
    )
    
    if success:
        print("✅ TEST SUCCESSFUL: Email sent.")
    else:
        print("❌ TEST FAILED: Check logs for errors.")

if __name__ == "__main__":
    asyncio.run(test_email())
