#!/usr/bin/env python3
"""
Diagnostic script to help identify SMTP authentication issues
"""

import smtplib
import sys

print("=" * 70)
print("  Gmail SMTP Diagnostic Tool - Cognent")
print("=" * 70)
print()

# Configuration
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "cognent1824@gmail.com"

print("📋 Current Configuration:")
print(f"   Email: {SMTP_USER}")
print(f"   SMTP Host: {SMTP_HOST}")
print(f"   SMTP Port: {SMTP_PORT}")
print()

# Ask for password
print("🔑 Please enter your App Password:")
print("   (The one that looks like: uane ykej ouge ngqj)")
print("   Paste it here (with or without spaces):")
password_input = input("   Password: ").strip()

# Remove all spaces
password_clean = password_input.replace(" ", "")

print()
print(f"   Original: {password_input}")
print(f"   Cleaned:  {password_clean}")
print(f"   Length:   {len(password_clean)} characters")
print()

if len(password_clean) != 16:
    print("⚠️  WARNING: App Passwords should be exactly 16 characters!")
    print("   Your password has", len(password_clean), "characters")
    print()

# Test connection
print("🔧 Testing SMTP Connection...")
print("-" * 70)

try:
    # Step 1: Connect
    print("Step 1: Connecting to SMTP server...")
    server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10)
    print("   ✅ Connected successfully")
    
    # Step 2: Start TLS
    print("\nStep 2: Starting TLS encryption...")
    server.starttls()
    print("   ✅ TLS started successfully")
    
    # Step 3: Login
    print(f"\nStep 3: Attempting login as {SMTP_USER}...")
    server.login(SMTP_USER, password_clean)
    print("   ✅ Login successful!")
    
    server.quit()
    
    print()
    print("=" * 70)
    print("🎉 SUCCESS! Your SMTP configuration is working!")
    print("=" * 70)
    print()
    print("✅ You can now use this password in your .env file:")
    print(f"   SMTP_PASSWORD={password_clean}")
    print()
    
except smtplib.SMTPAuthenticationError as e:
    print(f"   ❌ Authentication failed: {e}")
    print()
    print("=" * 70)
    print("🔴 AUTHENTICATION ERROR")
    print("=" * 70)
    print()
    print("This error means Gmail is rejecting your credentials.")
    print()
    print("🔧 Troubleshooting Steps:")
    print()
    print("1. ✅ Verify you're logged into cognent1824@gmail.com")
    print("   Go to: https://mail.google.com")
    print("   Make sure you see: cognent1824@gmail.com in the top right")
    print()
    print("2. ✅ Check if 2-Step Verification is enabled:")
    print("   Go to: https://myaccount.google.com/security")
    print("   Look for '2-Step Verification' - it should say 'On'")
    print("   If it says 'Off', you MUST enable it first!")
    print()
    print("3. ✅ Generate a NEW App Password:")
    print("   Go to: https://myaccount.google.com/apppasswords")
    print("   (You must be logged into cognent1824@gmail.com)")
    print("   Create a new password for 'Mail' / 'Other'")
    print("   Copy the 16-character password")
    print()
    print("4. ✅ Make sure the App Password is for THIS account:")
    print("   App Passwords are account-specific!")
    print("   If you generated it while logged into a different Gmail,")
    print("   it won't work for cognent1824@gmail.com")
    print()
    
except Exception as e:
    print(f"   ❌ Unexpected error: {e}")
    print()
    print("🔧 This might be a network or firewall issue.")
    print()

print("=" * 70)
