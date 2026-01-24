#!/usr/bin/env python3
"""Quick SMTP Test for Cognent Gmail"""

import smtplib
from email.mime.text import MIMEText

# Test credentials
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "cognent1824@gmail.com"
SMTP_PASS = "ihmdibomxzpiidpq"  # No spaces!

print("🔧 Testing SMTP connection...")
print(f"   Host: {SMTP_HOST}:{SMTP_PORT}")
print(f"   User: {SMTP_USER}\n")

try:
    # Connect
    print("📡 Connecting...")
    server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10)
    server.starttls()
    
    # Login
    print("🔑 Logging in...")
    server.login(SMTP_USER, SMTP_PASS)
    print("✅ Login successful!\n")
    
    # Send test email
    print("📧 Sending test email...")
    msg = MIMEText("SMTP test from Cognent backend - SUCCESS!")
    msg["Subject"] = "✅ SMTP Test - Cognent"
    msg["From"] = f"Cognent Team <{SMTP_USER}>"
    msg["To"] = SMTP_USER
    
    server.send_message(msg)
    server.quit()
    
    print("✅ Email sent successfully!")
    print(f"📬 Check {SMTP_USER} inbox\n")
    print("🎉 SMTP is configured correctly!")
    
except Exception as e:
    print(f"❌ Error: {e}\n")
    print("🔧 Make sure:")
    print("   1. 2-Step Verification is enabled")
    print("   2. App Password is correct (no spaces)")
    print("   3. Password is: uaneykejourengqj")
