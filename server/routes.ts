import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Sitemap routes - explicitly served with correct XML content type
  const sitemapFiles = [
    "sitemap.xml",
    "sitemap-ja.xml",
    "sitemap-ko.xml",
    "sitemap-vi.xml",
    "sitemap-zh.xml",
  ];

  for (const filename of sitemapFiles) {
    app.get(`/${filename}`, (_req: Request, res: Response) => {
      const filePath = path.resolve(import.meta.dirname, "..", "public", filename);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "application/xml");
        res.sendFile(filePath);
      } else {
        res.status(404).send("Not found");
      }
    });
  }

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
  
  // Contact routes removed as per user request

  const httpServer = createServer(app);

  return httpServer;
}
