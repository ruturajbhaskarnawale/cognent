"""
Email service for sending emails via SMTP
Supports contact form notifications and newsletter subscriptions
"""

import os
import ssl
import certifi
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from datetime import datetime
from dotenv import load_dotenv

# Ensure environment variables are loaded
load_dotenv()

class EmailService:
    def __init__(self):
        self.smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_username = os.getenv("SMTP_USERNAME")
        self.smtp_password = os.getenv("SMTP_PASSWORD")
        self.from_email = os.getenv("SMTP_FROM_EMAIL")
        self.from_name = os.getenv("SMTP_FROM_NAME", "Cognent Team")
        self.admin_email = os.getenv("ADMIN_EMAIL")
        self.skip_ssl_verify = os.getenv("SMTP_SKIP_SSL_VERIFY", "False").lower() == "true"
        self.brand_primary = "#7c3aed"  # Brand Purple
        self.brand_secondary = "#14b8a6" # Brand Teal
        self.brand_black = "#000000"

    def _get_base_styles(self):
        return f"""
            body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f8fafc; }}
            .container {{ max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0; }}
            .header {{ background: {self.brand_black}; color: white; padding: 40px 20px; text-align: center; position: relative; overflow: hidden; }}
            .header-orb {{ position: absolute; top: 0; right: 0; width: 150px; hieght: 150px; background: {self.brand_primary}; opacity: 0.2; filter: blur(40px); border-radius: 50%; }}
            .content {{ padding: 40px; }}
            .section {{ margin-bottom: 25px; }}
            .label {{ font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: 700; margin-bottom: 8px; }}
            .value {{ font-size: 15px; color: #0f172a; font-weight: 600; padding: 12px 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid {self.brand_primary}; }}
            .footer {{ text-align: center; padding: 30px; color: #94a3b8; font-size: 12px; border-top: 1px solid #f1f5f9; }}
            .button {{ display: inline-block; padding: 14px 32px; background: {self.brand_black}; color: #ffffff !important; text-decoration: none; border-radius: 12px; font-weight: 700; margin: 20px 0; transition: all 0.3s ease; }}
            .badge {{ display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; background: #f0fdf4; color: #166534; margin-bottom: 10px; }}
            .icon-box {{ wdtih: 48px; height: 48px; background: rgba(124, 58, 237, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }}
        """

    def _get_html_wrapper(self, title, content_html, badge=None):
        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                {self._get_base_styles()}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="header-orb"></div>
                    <h1 style="margin:0; font-size: 24px; position: relative; z-index: 1;">{title}</h1>
                </div>
                <div class="content">
                    {f'<div style="text-align: center;"><span class="badge">{badge}</span></div>' if badge else ''}
                    {content_html}
                </div>
                <div class="footer">
                    <p>© {datetime.now().year} Cognent Engineering Inc.</p>
                    <p>High-Performance Systems & Architecture</p>
                </div>
            </div>
        </body>
        </html>
        """

    async def send_email(
        self,
        to_email: str,
        subject: str,
        html_content: str,
        plain_content: Optional[str] = None
    ) -> bool:
        """Send an email via SMTP"""
        try:
            # Create message
            message = MIMEMultipart("alternative")
            message["From"] = f"{self.from_name} <{self.from_email}>"
            message["To"] = to_email
            message["Subject"] = subject

            # Add plain text version
            if plain_content:
                part1 = MIMEText(plain_content, "plain")
                message.attach(part1)

            # Add HTML version
            part2 = MIMEText(html_content, "html")
            message.attach(part2)

            # Create SSL context with certifi certificates
            if self.skip_ssl_verify:
                print("Warning: Skipping SSL verification for SMTP (Local Only)")
                context = ssl._create_unverified_context()
            else:
                context = ssl.create_default_context(cafile=certifi.where())

            # Send email
            await aiosmtplib.send(
                message,
                hostname=self.smtp_host,
                port=self.smtp_port,
                username=self.smtp_username,
                password=self.smtp_password,
                start_tls=True,
                tls_context=context,
            )

            print(f"Email sent successfully to {to_email}")
            return True

        except Exception as e:
            print(f"Failed to send email to {to_email}: {str(e)}")
            return False

    async def send_contact_form_to_admin(
        self,
        name: str,
        email: str,
        message: str,
        subject: Optional[str] = None,
        phone: Optional[str] = None,
        company: Optional[str] = None
    ) -> bool:
        """Send contact form submission to admin"""
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                .field {{ margin-bottom: 20px; }}
                .label {{ font-weight: bold; color: #667eea; margin-bottom: 5px; }}
                .value {{ background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }}
                .footer {{ text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🔔 New Contact Form Submission</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">From:</div>
                        <div class="value">{name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value"><a href="mailto:{email}">{email}</a></div>
                    </div>
                    {f'<div class="field"><div class="label">Phone:</div><div class="value">{phone}</div></div>' if phone else ''}
                    {f'<div class="field"><div class="label">Company:</div><div class="value">{company}</div></div>' if company else ''}
                    {f'<div class="field"><div class="label">Subject:</div><div class="value">{subject}</div></div>' if subject else ''}
                    <div class="field">
                        <div class="label">Message:</div>
                        <div class="value">{message}</div>
                    </div>
                    <div class="footer">
                        <p>Submitted: {datetime.now().strftime("%B %d, %Y at %I:%M %p")}</p>
                        <p>Reply directly to this email to respond to {name}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

        plain_content = f"""
        NEW CONTACT FORM SUBMISSION
        
        From: {name}
        Email: {email}
        {f'Phone: {phone}' if phone else ''}
        {f'Company: {company}' if company else ''}
        {f'Subject: {subject}' if subject else ''}
        
        Message:
        {message}
        
        ---
        Submitted: {datetime.now().strftime("%B %d, %Y at %I:%M %p")}
        Reply to: {email}
        """

        email_subject = f"🔔 New Contact: {subject or 'General Inquiry'}"
        
        return await self.send_email(
            to_email=self.admin_email,
            subject=email_subject,
            html_content=html_content,
            plain_content=plain_content
        )

    async def send_contact_confirmation(
        self,
        name: str,
        email: str
    ) -> bool:
        """Send confirmation email to user who submitted contact form"""
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                .checkmark {{ font-size: 48px; text-align: center; margin: 20px 0; }}
                .footer {{ text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }}
                .button {{ display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✅ Message Received!</h1>
                </div>
                <div class="content">
                    <div class="checkmark">✓</div>
                    <p>Hi {name},</p>
                    <p>Thank you for reaching out to <strong>Cognent</strong>! We've received your message and our team will review it shortly.</p>
                    
                    <h3>What happens next?</h3>
                    <ul>
                        <li>Our team will review your inquiry</li>
                        <li>You'll hear back from us within 24-48 hours</li>
                        <li>We'll discuss how we can help with your project</li>
                    </ul>
                    
                    <p>In the meantime, feel free to explore our work:</p>
                    <div style="text-align: center;">
                        <a href="https://cognent.com/work" class="button">View Our Projects</a>
                    </div>
                    
                    <p>Best regards,<br>
                    <strong>The Cognent Team</strong></p>
                </div>
                <div class="footer">
                    <p>This is an automated confirmation. Please do not reply to this email.</p>
                    <p>If you need immediate assistance, contact us at cognent1824@gmail.com</p>
                </div>
            </div>
        </body>
        </html>
        """

        plain_content = f"""
        Hi {name},

        Thank you for reaching out to Cognent! We've received your message and our team will review it shortly.

        What happens next?
        • Our team will review your inquiry
        • You'll hear back from us within 24-48 hours
        • We'll discuss how we can help with your project

        Best regards,
        The Cognent Team

        ---
        This is an automated confirmation. Please do not reply to this email.
        """

        return await self.send_email(
            to_email=email,
            subject="✅ We received your message!",
            html_content=html_content,
            plain_content=plain_content
        )

    async def send_subscription_to_admin(self, email: str) -> bool:
        """Notify admin of new newsletter subscription"""
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px; }}
                .content {{ background: #f9f9f9; padding: 30px; margin-top: 20px; border-radius: 10px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 New Newsletter Subscription</h1>
                </div>
                <div class="content">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Subscribed:</strong> {datetime.now().strftime("%B %d, %Y at %I:%M %p")}</p>
                </div>
            </div>
        </body>
        </html>
        """

        return await self.send_email(
            to_email=self.admin_email,
            subject=f"📧 New Subscription: {email}",
            html_content=html_content
        )

    async def send_subscription_confirmation(self, email: str) -> bool:
        """Send welcome email to new subscriber"""
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                .footer {{ text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 Welcome to Cognent!</h1>
                </div>
                <div class="content">
                    <p>Thank you for subscribing to our newsletter!</p>
                    <p>You'll now receive updates about:</p>
                    <ul>
                        <li>New projects and case studies</li>
                        <li>Industry insights and tips</li>
                        <li>Special offers and announcements</li>
                    </ul>
                    <p>We're excited to have you on board!</p>
                    <p>Best regards,<br>
                    <strong>The Cognent Team</strong></p>
                </div>
                <div class="footer">
                    <p>You can unsubscribe at any time by clicking the link in our emails.</p>
                </div>
            </div>
        </body>
        </html>
        """

        return await self.send_email(
            to_email=email,
            subject="🎉 Welcome to Cognent Updates!",
            html_content=html_content
        )


    async def send_estimate_notification_to_admin(
        self,
        project_type: str,
        features: list,
        team_size: str,
        user_name: Optional[str] = None,
        user_email: Optional[str] = None,
        user_phone: Optional[str] = None
    ) -> bool:
        """Send project estimate notification to admin with user details"""
        
        # Format features list
        features_html = "".join([f"<li>{f}</li>" for f in features]) if features else "<li>No additional features selected</li>"
        
        # User details section if available
        user_info_html = ""
        if user_name or user_email or user_phone:
            user_info_html = f"""
            <div class="section">
                <div class="label">User Contact Information</div>
                <div class="value" style="background: #fffbeb; border-left-color: #f59e0b;">
                    {f'<strong>Name:</strong> {user_name}<br/>' if user_name else ''}
                    {f'<strong>Email:</strong> <a href="mailto:{user_email}" style="color: #3b82f6;">{user_email}</a><br/>' if user_email else ''}
                    {f'<strong>Phone:</strong> {user_phone}' if user_phone else ''}
                </div>
            </div>
            """

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #000000 0%, #3b82f6 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 20px 20px 0 0; }}
                .content {{ background: #ffffff; padding: 40px; border-radius: 0 0 20px 20px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }}
                .section {{ margin-bottom: 30px; }}
                .label {{ font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 700; margin-bottom: 8px; }}
                .value {{ font-size: 18px; color: #111827; font-weight: 600; padding: 12px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #3b82f6; }}
                .feature-list {{ list-style: none; padding: 0; margin: 0; }}
                .feature-list li {{ padding: 8px 12px; background: #eff6ff; color: #1e40af; border-radius: 6px; margin-bottom: 6px; font-weight: 500; font-size: 14px; display: inline-block; margin-right: 6px; }}
                .footer {{ text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px; }}
                .badge {{ display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; background: #dcfce7; color: #166534; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 style="margin:0; font-size: 24px;">🚀 New Project Configuration</h1>
                    <p style="margin-top:10px; opacity:0.8;">A user just completed an estimate configuration</p>
                </div>
                <div class="content">
                    {user_info_html}

                    <div class="section">
                        <div class="label">Project Type</div>
                        <div class="value">{project_type}</div>
                    </div>
                    
                    <div class="section">
                        <div class="label">Selected Features</div>
                        <ul class="feature-list">
                            {features_html}
                        </ul>
                    </div>
                    
                    <div class="section">
                        <div class="label">Team Size</div>
                        <div class="value">{team_size}</div>
                    </div>

                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
                        <span class="badge">Potential Lead from Estimate Tool</span>
                    </div>

                    <div class="footer">
                        <p>Sent via Cognent Estimate Notification System</p>
                        <p>{datetime.now().strftime("%B %d, %Y at %I:%M %p")}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

        plain_content = f"""
        NEW PROJECT CONFIGURATION
        
        {f'User Name: {user_name}' if user_name else ''}
        {f'User Email: {user_email}' if user_email else ''}
        {f'User Phone: {user_phone}' if user_phone else ''}

        Project Type: {project_type}
        Features: {', '.join(features) if features else 'None'}
        Team Size: {team_size}
        
        ---
        Submitted: {datetime.now().strftime("%B %d, %Y at %I:%M %p")}
        """

        return await self.send_email(
            to_email=self.admin_email,
            subject=f"🚀 New Estimate Config: {user_name or project_type}",
            html_content=html_content,
            plain_content=plain_content
        )

    async def send_estimate_confirmation_to_client(
        self,
        name: str,
        email: str,
        project_type: str,
        features: list,
        team_size: str
    ) -> bool:
        """Send confirmation email to user who completed the estimate"""
        
        features_list = "".join([f"<li>{f}</li>" for f in features]) if features else "<li>Standard Architecture</li>"
        
        content = f"""
        <p>Hi {name or 'there'},</p>
        <p>Thank you for using the <strong>Cognent Project Estimator</strong>. We've received your configuration and our team is currently reviewing your project requirements.</p>
        
        <div class="section">
            <div class="label">Your Selected Configuration</div>
            <div class="value">
                <strong>Project:</strong> {project_type}<br/>
                <strong>Team:</strong> {team_size}<br/>
                <div style="margin-top: 10px;">
                    <strong>Features:</strong><br/>
                    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #475569; font-size: 13px;">
                        {features_list}
                    </ul>
                </div>
            </div>
        </div>

        <h3>What happens next?</h3>
        <p>1. Our senior architects will perform a technical feasibility check.<br/>
        2. We'll prepare a detailed roadmap and final quote.<br/>
        3. You'll receive a follow-up email from our team within 24 hours.</p>
        
        <div style="text-align: center;">
            <a href="https://cognent.com/work" class="button">Browse Case Studies</a>
        </div>
        
        <p>Best regards,<br><strong>The Cognent Team</strong></p>
        """
        
        html_content = self._get_html_wrapper(
            "✅ Estimate Received",
            content,
            badge="Project Readiness Diagnostic"
        )

        return await self.send_email(
            to_email=email,
            subject="✅ Cognent: Your Project Estimate is being reviewed",
            html_content=html_content
        )

    async def send_audit_notification_to_admin(
        self,
        name: str,
        email: str,
        website: Optional[str] = None,
        challenges: Optional[str] = None
    ) -> bool:
        """Notify admin of new audit request"""
        
        content = f"""
        <div class="section">
            <div class="label">Requester Information</div>
            <div class="value">
                <strong>Name:</strong> {name}<br/>
                <strong>Email:</strong> <a href="mailto:{email}">{email}</a>
            </div>
        </div>

        <div class="section">
            <div class="label">System / Website</div>
            <div class="value">{website or 'Not provided'}</div>
        </div>

        <div class="section">
            <div class="label">Identified Bottlenecks</div>
            <div class="value" style="background: #fff1f2; border-left-color: #e11d48; font-weight: normal; color: #475569;">
                {challenges or 'No specific challenges provided'}
            </div>
        </div>
        """
        
        html_content = self._get_html_wrapper(
            "🚀 New Scale Audit Request",
            content,
            badge="High Priority Lead"
        )

        return await self.send_email(
            to_email=self.admin_email,
            subject=f"🚀 Audit Request: {name}",
            html_content=html_content
        )

    async def send_audit_confirmation_to_client(self, name: str, email: str) -> bool:
        """Send confirmation email to user who requested an audit"""
        
        content = f"""
        <p>Hi {name},</p>
        <p>Thank you for requesting a <strong>Cognent Scale Readiness Audit</strong>. Your system diagnostic has been prioritized.</p>
        
        <p>At Cognent, we don't just look at code—we audit for the breaking points that kill growth. Our senior engineering team is now reviewing your request.</p>

        <div style="background: #fdf2f8; border-radius: 16px; padding: 24px; margin: 25px 0; border: 1px solid #fbcfe8;">
            <h4 style="margin-top:0; color: #be185d;">Next Steps:</h4>
            <ul style="margin-bottom:0; color: #831843; padding-left: 20px;">
                <li>Initial system verification (Next 4-6 hours)</li>
                <li>Architectural review scheduled</li>
                <li>Strategic Roadmap delivery (48-hour window)</li>
            </ul>
        </div>

        <p>We'll reach out shortly if we need additional technical documentation or access.</p>
        
        <div style="text-align: center;">
            <a href="https://cognent.com/architecture-audit" class="button">Audit Overview</a>
        </div>
        
        <p>Best regards,<br><strong>The Cognent Team</strong></p>
        """
        
        html_content = self._get_html_wrapper(
            "🛠️ Audit Request Confirmed",
            content,
            badge="Cognent Engineering Review"
        )

        return await self.send_email(
            to_email=email,
            subject="🛠️ Cognent Audit: We've started your review",
            html_content=html_content
        )


# Create singleton instance
email_service = EmailService()
