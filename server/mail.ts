import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

/**
 * Send a contact form notification email
 * 
 * This function uses nodemailer's ethereal email service for testing purposes.
 * In a production environment, you would replace this with a real SMTP service.
 */
export async function sendContactNotification(message: ContactMessage): Promise<{ success: boolean; previewUrl?: string }> {
  try {
    // Create a test account for development
    const testAccount = await nodemailer.createTestAccount();
    
    // Create reusable transporter with test account
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    } as nodemailer.TransportOptions);
    
    // Prepare email content
    const mailOptions = {
      from: `"${message.name}" <${message.email}>`,
      to: 'Dave@talkwithdave.co.uk',
      replyTo: message.email,
      subject: `New Contact Form: ${message.subject}`,
      text: `From: ${message.name} (${message.email})\nSubject: ${message.subject}\n\n${message.message}`,
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully');
    
    // Get preview URL (only works with Ethereal SMTP)
    const previewUrl = nodemailer.getTestMessageUrl(info);
    
    if (previewUrl) {
      console.log('Preview URL: %s', previewUrl);
    }
    
    return { 
      success: true,
      previewUrl: typeof previewUrl === 'string' ? previewUrl : undefined
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false };
  }
}