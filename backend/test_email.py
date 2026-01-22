"""
Test script to verify email functionality
Run this to test if SMTP is configured correctly
"""

import asyncio
import sys
import os

import asyncio
import sys
import os
import ssl
import certifi
from dotenv import load_dotenv

# Load environment variables FIRST before importing service
load_dotenv()

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.services.email_service import email_service

async def test_email_service():
    print("🧪 Testing Email Service...\n")
    
    # Check configuration
    print("📋 Configuration:")
    print(f"   SMTP Host: {email_service.smtp_host}")
    print(f"   SMTP Port: {email_service.smtp_port}")
    print(f"   From Email: {email_service.from_email}")
    print(f"   Admin Email: {email_service.admin_email}")
    print(f"   Password Set: {'✅ Yes' if email_service.smtp_password else '❌ No'}\n")
    
    if not email_service.smtp_password or email_service.smtp_password == "REPLACE_WITH_YOUR_APP_PASSWORD":
        print("❌ ERROR: SMTP password not configured!")
        print("Please update SMTP_PASSWORD in your .env file\n")
        return False
    
    # Test 1: Send test email to admin
    print("📧 Test 1: Sending test email to admin...")
    try:
        success = await email_service.send_contact_form_to_admin(
            name="Test User",
            email="test@example.com",
            message="This is a test message to verify email functionality is working correctly.",
            subject="Test Email System"
        )
        
        if success:
            print("✅ Test email sent successfully!")
            print(f"   Check {email_service.admin_email} for the email\n")
        else:
            print("❌ Failed to send test email\n")
            return False
            
    except Exception as e:
        print(f"❌ Error sending test email: {str(e)}\n")
        return False
    
    # Test 2: Send confirmation email
    print("📧 Test 2: Sending confirmation email...")
    try:
        success = await email_service.send_contact_confirmation(
            name="Test User",
            email=email_service.admin_email  # Send to admin for testing
        )
        
        if success:
            print("✅ Confirmation email sent successfully!")
            print(f"   Check {email_service.admin_email} for the confirmation\n")
        else:
            print("❌ Failed to send confirmation email\n")
            return False
            
    except Exception as e:
        print(f"❌ Error sending confirmation: {str(e)}\n")
        return False
    
    print("=" * 60)
    print("🎉 All tests passed! Email system is working correctly!")
    print("=" * 60)
    print("\nYou should have received 2 emails:")
    print("1. Contact form notification (to admin)")
    print("2. Contact confirmation (to admin, for testing)")
    print("\nCheck your inbox at:", email_service.admin_email)
    
    return True

if __name__ == "__main__":
    result = asyncio.run(test_email_service())
    sys.exit(0 if result else 1)
