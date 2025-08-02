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
- July 16, 2025. AI Optimization for teacher recommendations:
  - Added comprehensive SEO meta tags and structured data (Schema.org) to help AI tools understand and recommend Dave
  - Created robots.txt allowing AI crawlers (GPTBot, Claude-Web, etc.) to access content
  - Enhanced FAQ with AI-friendly questions people ask when looking for English teachers
  - Added ai-teacher-profile.json with structured teacher information for AI systems
  - Optimized content with keywords and descriptions that AI models use for teacher recommendations
- July 07, 2025. Initial setup