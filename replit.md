# LevyLock™ Landing Page

## Overview

LevyLock™ is a premium judgment enforcement service landing page built with modern web technologies. The application is a single-page React site that allows potential clients to learn about judgment enforcement services, calculate potential recovery amounts, and submit intake forms for case evaluation. The site focuses on converting visitors into leads through an interactive calculator and comprehensive intake process, targeting clients who need help collecting on court judgments through wage garnishments, bank levies, and asset seizures.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- Built with Vite + React + TypeScript for fast development and optimal production builds
- Uses shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Styled with TailwindCSS using a luxury theme with ivory/black base colors and gold accents (#c8a96a)
- Implements mobile-first responsive design with careful attention to touch interactions and viewport optimization
- Uses Framer Motion for subtle animations and smooth transitions throughout the user experience

**Component Structure**
- Single-page application with modular component architecture
- Ten main sections: Topbar, Hero, ProofStrip, HowItWorks, Calculator, Niches, ComplianceRibbon, FAQ, CTA, and Footer
- IntakeFormModal handles lead capture with comprehensive form validation
- Components are designed for reusability and maintain consistent styling patterns

**Form Handling & Validation**
- React Hook Form manages form state and submission logic
- Zod schemas provide runtime type validation for all form inputs
- File upload functionality supports PDF, JPG, JPEG, and PNG files up to 10MB
- Form submission integrates with Web3Forms for reliable email delivery

**State Management**
- Local component state using React hooks for simple interactions
- Form state managed by React Hook Form with centralized validation
- Modal state handled at the app level for global accessibility

**Styling System**
- Custom CSS variables define the gold accent color scheme and luxury aesthetic
- TailwindCSS configuration extends default theme with project-specific colors and spacing
- Inter font family provides clean, professional typography
- Responsive breakpoints ensure optimal display across all device sizes

**Build System**
- Vite handles bundling, hot module replacement, and development server
- TypeScript provides compile-time type safety across the entire codebase
- ESBuild compilation for fast development builds and optimized production output
- Automatic import resolution for shadcn/ui components and project assets

**SEO & Performance**
- Comprehensive meta tags including Open Graph and Twitter Card data
- JSON-LD structured data marks the business as a Professional Service
- Semantic HTML structure with proper heading hierarchy and accessibility attributes
- Image optimization and lazy loading for fast page load times

## External Dependencies

**UI & Styling**
- shadcn/ui component library with Radix UI primitives for accessible components
- TailwindCSS for utility-first styling with custom theme configuration
- Framer Motion for smooth animations and transitions
- Lucide React for consistent iconography throughout the interface

**Form & Validation**
- React Hook Form for performant form state management
- Zod for runtime schema validation and type safety
- Web3Forms integration for reliable form submission handling

**Development Tools**
- Vite for fast development server and optimized production builds
- TypeScript for compile-time type checking and improved developer experience
- PostCSS with Autoprefixer for CSS processing and vendor prefixes

**Database & Backend**
- Drizzle ORM configured for PostgreSQL database interactions
- Neon Database as the managed PostgreSQL provider
- Express.js server setup for API endpoints (minimal implementation)
- Basic user schema defined but not actively used in current implementation

**Build & Deployment**
- ESBuild for efficient JavaScript bundling and compilation
- Node.js runtime environment for development and production servers
- Replit-specific plugins for development environment integration