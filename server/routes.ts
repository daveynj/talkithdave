import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification, isEmailConfigured } from "./mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Get testimonials
  app.get("/api/testimonials", async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });
  
  // Get blog posts
  app.get("/api/blog", async (_req: Request, res: Response) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });
  
  // Get blog post by slug
  app.get("/api/blog/:slug", async (req: Request, res: Response) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });
  
  // Configure email credentials
  app.post("/api/config/email", async (req: Request, res: Response) => {
    // In a production app, this endpoint should be protected with authentication
    try {
      const { user, pass } = req.body;
      
      if (!user || !pass) {
        return res.status(400).json({ message: "Email user and password are required" });
      }
      
      configureEmail(user, pass);
      res.json({ message: "Email configuration updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating email configuration" });
    }
  });
  
  // Submit contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Try to send an email notification
      let emailSent = false;
      if (isEmailConfigured()) {
        emailSent = await sendContactNotification(message);
      }
      
      // Log the email status
      if (!emailSent) {
        console.log('Contact form submission saved to database but email notification was not sent.');
      }
      
      res.status(201).json({ 
        message: "Message sent successfully", 
        data: message 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      res.status(500).json({ message: "Error sending message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
