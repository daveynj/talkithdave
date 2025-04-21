import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./mail";

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
  
  // Get all contact messages
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Error fetching contact messages" });
    }
  });
  
  // Submit contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Send an email notification
      const emailResult = await sendContactNotification(message);
      
      // Log the email status
      if (!emailResult.success) {
        console.log('Contact form submission saved to database but email notification was not sent.');
      }
      
      // Log preview URL for development testing
      if (emailResult.previewUrl) {
        console.log('Email preview URL:', emailResult.previewUrl);
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
