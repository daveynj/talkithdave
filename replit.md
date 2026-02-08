# ESL Teacher Platform - Architecture Guide

## Overview

This is a full-stack web application for "Talk with Dave", an online ESL (English as a Second Language) teaching platform. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data storage. The platform showcases Dave's teaching services, testimonials, and provides contact functionality for potential students.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Email Service**: Nodemailer (currently configured for Ethereal test accounts)
- **Storage**: Abstracted storage layer with database implementation

### Database Architecture
- **Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Handled through Drizzle Kit
- **Connection**: Neon serverless with WebSocket support

## Key Components

### Data Models
- **Contact Messages**: Stores inquiries from potential students
- **Blog Posts**: Content management for educational articles
- **Testimonials**: Student reviews and feedback

### Frontend Components
- **Header**: Sticky navigation with mobile menu
- **Hero**: Main landing section with call-to-action
- **About**: Teacher introduction and credentials
- **Services**: Lesson packages and pricing
- **PlanWiseESL**: Showcases Dave's EdTech innovation
- **Testimonials**: Student reviews carousel
- **FAQ**: Collapsible frequently asked questions
- **Contact**: Direct communication options

### Backend Services
- **Storage Layer**: Abstracted interface for data operations
- **Email Service**: Contact form notifications
- **API Routes**: RESTful endpoints for data retrieval

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Express Routing**: Backend routes handle HTTP requests
3. **Data Layer**: Storage service interfaces with database via Drizzle ORM
4. **Database Operations**: PostgreSQL handles data persistence
5. **Response**: JSON data returned to frontend for rendering

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connection
- **drizzle-orm**: Database ORM and query builder
- **@radix-ui/react-***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing
- **nodemailer**: Email functionality

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production bundling for backend

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Assets**: Static files served from `public` directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment specification (development/production)

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- February 8, 2026. Updated SEO meta descriptions across all pages:
  - Replaced outdated $20/lesson messaging with value-focused snippets highlighting free diagnostic, AI-built curriculum, and British coaching
  - Updated homepage meta description in index.html
  - Updated all 5 profession landing page meta descriptions (Software Engineers, Nurses, Finance, Business Executives, Engineers) in professionData.ts
  - Cleaned up LanguageSpecificHead.tsx to remove outdated multi-language $20 references
- October 27, 2025. Updated booking system from Brevo to Calendly:
  - Replaced all Brevo meeting links (https://meet.brevo.com/david-jackson-1) with Calendly booking link (https://calendly.com/daveynj113/your-first-lesson)
  - Updated all 11 booking CTAs across active components: Hero, Header, About, Services, PlanWise, Testimonials, Contact
  - Updated unused components (Process, Booking, CTA) for consistency
  - Updated SEO and AI optimization files across all languages (en, zh, ja, ko, vi)
  - Booking system change improves user experience with Calendly's familiar interface
- July 16, 2025. Fixed image loading issues for deployment:
  - Resolved static file serving order conflicts with Vite middleware
  - Fixed Dave's profile images by importing them as bundled assets instead of public directory references
  - Updated testimonial avatars to use reliable randomuser.me API instead of failing multiavatar.com
  - Moved all Dave images (dave-formal.jpg, dave-outdoor.png, dave_profile.jpg, dave_profile2.jpg) to client/src/assets/
  - Added PlanWise screenshot (planwise-screenshot.png) to assets and imported it properly
  - Updated images.ts to properly import and export all Dave images and screenshots as bundled assets
  - Verified all images work in both development and production deployed environments
- July 16, 2025. Updated lesson pricing:
  - Standardized all lesson types (Conversation Practice, Business English, Interview Preparation) to $20 for 30 minutes
  - Simplified pricing structure for better customer clarity
- July 16, 2025. Updated booking link from Calendly to new Brevo meeting link (https://meet.brevo.com/david-jackson-1)
- July 16, 2025. Comprehensive AI Optimization for teacher recommendations:
  - Added comprehensive SEO meta tags and structured data (Schema.org) to help AI tools understand and recommend Dave
  - Created robots.txt allowing AI crawlers (GPTBot, Claude-Web, anthropic-ai, etc.) to access content
  - Enhanced FAQ with AI-friendly questions people ask when looking for English teachers
  - Added ai-teacher-profile.json with structured teacher information for AI systems
  - Implemented FAQ Schema markup in JSON-LD format for direct AI chatbot answers
  - Added EducationalOrganization schema with course offerings and pricing
  - Created LocalBusiness schema with reviews and ratings for credibility
  - Built voice search optimization with conversational query targeting
  - Added ai-sitemap.txt for AI crawlers to understand key content areas  
  - Created voice-search-optimized.json with natural language query responses
  - Optimized content with keywords and descriptions that AI models use for teacher recommendations
- February 3, 2025. Google Analytics Integration & Multilingual Tracking - COMPLETED:
  - Installed Google Analytics tracking (G-PJ2XKCFZWS) in HTML head section
  - Created enhanced analytics tracking component for multilingual events
  - Implemented language-specific conversion tracking and audience segmentation
  - Added custom dimensions for language, market, and user journey tracking
  - Set up event tracking for booking clicks, contact forms, and language switches
  - Created analytics configuration for business intelligence and reporting
  - Enabled cross-language user journey analysis and conversion attribution
- February 2, 2025. Advanced Multilingual SEO & AI Optimization - COMPLETED:
  - Implemented expert-level SEO optimizations based on regional search engine preferences
  - Created region-specific enhanced SEO files (seo-enhanced.json) for all four markets
  - Built language-specific XML sitemaps with proper hreflang annotations
  - Developed dynamic meta tag system (LanguageSpecificHead component) for real-time SEO
  - Added comprehensive regional keyword research and cultural optimization files
  - Optimized for Baidu (China), Yahoo Japan, Naver (Korea), Google/Cốc Cốc (Vietnam)
  - Implemented search engine-specific optimization strategies:
    * Baidu: Simplified Chinese, meta keywords required, exact-match importance
    * Yahoo Japan: Portal integration, mobile-first, community content focus
    * Naver: User-generated content, community engagement, blog integration
    * Google/Cốc Cốc: Diacritics optimization, mobile-first, cultural relevance
  - Created AI chatbot query pattern optimization for natural language searches
- February 2, 2025. Vietnamese Market Addition - COMPLETED:
  - Added comprehensive Vietnamese language support following successful multilingual implementation
  - Created complete Vietnamese translation system with culturally adapted content
  - Added Vietnamese to language switcher (Tiếng Việt) and routing system (/vi/)
  - Built Vietnamese AI optimization files for chatbot recommendations
  - Created Vietnamese voice search optimization for local queries
  - Added Vietnamese hreflang tag for international SEO
  - Research confirmed Vietnam as high-growth market ($365M online education, 11%+ annual growth)
  - Target keywords: "giáo viên tiếng Anh", "gia sư tiếng Anh", "học tiếng Anh online"
- February 2, 2025. Comprehensive Multilingual Implementation - COMPLETED:
  - Successfully deployed full multilingual support for Chinese (zh), Japanese (ja), Korean (ko), and Vietnamese (vi) markets
  - Implemented complete translation system with 600+ translated strings covering major UI elements
  - Added hreflang tags for proper international SEO targeting
  - Created functional language switcher component with native language names
  - Built multilingual route structure (/zh/, /ja/, /ko/, /vi/) with proper URL handling
  - Added multilingual AI optimization files for each target market
  - Created localized voice search optimization for all four languages
  - Implemented culturally adapted content for each market (exam focus, business needs, etc.)
  - Added multilingual teacher profile JSON files for AI systems in target languages
  - Fixed all runtime errors and undefined translation references
  - User confirmed: "Students can find the site" - primary goal achieved
- July 07, 2025. Initial setup