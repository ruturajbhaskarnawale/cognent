"""Simple email test - run with: python simple_email_test.py"""
import asyncio
import ssl
import certifi
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

async def test():
    print("Testing email configuration...\n")
    
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USERNAME")
    smtp_pass = os.getenv("SMTP_PASSWORD")
    admin_email = os.getenv("ADMIN_EMAIL")
    skip_ssl_verify = os.getenv("SMTP_SKIP_SSL_VERIFY", "False").lower() == "true"
    
    print(f"Host: {smtp_host}")
    print(f"Port: {smtp_port}")
    print(f"User: {smtp_user}")
    print(f"Password: {'*' * len(smtp_pass) if smtp_pass else 'NOT SET'}")
    print(f"Admin: {admin_email}\n")
    
    if not smtp_pass or smtp_pass == "REPLACE_WITH_YOUR_APP_PASSWORD":
        print("❌ Password not configured in .env file!")
        return
    
    # Create test email
    message = MIMEMultipart()
    message["From"] = smtp_user
    message["To"] = admin_email
    message["Subject"] = "🧪 Cognent Email Test"
    
    body = """
    <h2>Email Test Successful!</h2>
    <p>If you're reading this, your email configuration is working correctly.</p>
    <p>You can now use the contact form and newsletter subscription features.</p>
    """
    
    message.attach(MIMEText(body, "html"))
    
    # Create SSL context with certifi
    if skip_ssl_verify:
        print("⚠️ Warning: Skipping SSL verification for test")
        context = ssl._create_unverified_context()
    else:
        context = ssl.create_default_context(cafile=certifi.where())
    
    try:
        print("Sending test email...")
        await aiosmtplib.send(
            message,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_pass,
            start_tls=True,
            tls_context=context,
        )
        print(f"✅ SUCCESS! Email sent to {admin_email}")
        print(f"\nCheck your inbox at {admin_email}")
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
        print("\nCommon issues:")
        print("1. Wrong app password")
        print("2. 2-factor auth not enabled")
        print("3. App passwords not enabled in Gmail")

if __name__ == "__main__":
    asyncio.run(test())
