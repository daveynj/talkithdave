import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// Default configuration - needs to be updated with real credentials
const mailConfig = {
  isConfigured: false,
  user: 'talkwithdaveapp@gmail.com',
  pass: 'app-specific-password'
};

// Create a transporter using Gmail
// For a production app, consider using a dedicated email service
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass
    }
  });
};

export async function sendContactNotification(message: ContactMessage): Promise<boolean> {
  if (!mailConfig.isConfigured) {
    console.log('Email not configured. Skipping email sending.');
    return false;
  }

  try {
    const transporter = createTransporter();
    
    // Prepare email content
    const mailOptions = {
      from: `"Talk with Dave Website" <${mailConfig.user}>`,
      to: 'Dave@talkwithdave.co.uk',
      subject: `New Contact Form Submission: ${message.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${message.name} (${message.email})</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #777; margin-top: 20px; font-size: 12px;">
          This message was sent from the contact form on talkwithdave.co.uk
        </p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export function isEmailConfigured(): boolean {
  return mailConfig.isConfigured;
}

// This would be called with real credentials when they become available
export function configureEmail(user: string, pass: string): void {
  mailConfig.user = user;
  mailConfig.pass = pass;
  mailConfig.isConfigured = true;
  console.log('Email configuration updated.');
}