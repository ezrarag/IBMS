# Innovation Building Management (IBMS) Site

A Next.js application for Innovation Building Management, LLC - a service disabled veteran-owned small business (SDVOSB) providing construction management services.

## Project Structure

```
IBMS/
├── apps/
│   └── ibms/              # IBMS Next.js application
│       └── src/
│           ├── app/       # Next.js App Router pages
│           ├── components/ # App-specific components
│           └── api/       # API routes
├── packages/
│   └── ui/                # Shared UI library
│       └── src/
│           ├── brand-kit.ts
│           └── components/
└── package.json           # Root package.json (monorepo)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Or run the IBMS app specifically:
```bash
cd apps/ibms
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/` - Home page with hero, services grid, process steps, and CTA
- `/about` - About page with SDVOSB story and company values
- `/services` - Core competencies and service offerings
- `/projects` - Example projects showcase (placeholder grid)
- `/process` - How We Deliver - project lifecycle process
- `/contact` - Contact form and project consultation intake

## Features

- **Shared UI Library**: Reusable components with brand theming
- **Brand Kit**: Centralized brand configuration (IBMS uses darker, industrial theme)
- **Responsive Design**: Mobile-first, accessible design
- **API Integration**: Lead submission endpoint at `/api/leads`
- **SDVOSB Badge**: Prominent display of service disabled veteran-owned status

## Brand Configuration

The IBMS brand uses a darker, more industrial color palette:
- Primary: `#0f172a` (Dark navy/slate)
- Secondary: `#1e293b` (Dark steel)
- Hero overlay: Darker, more industrial feel

## API Routes

### POST `/api/leads`

Submit a lead/contact form submission.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "company": "string (optional)",
  "projectLocation": "string (optional)",
  "budgetRange": "string (optional)",
  "timeline": "string (optional)",
  "message": "string (optional)",
  "business": "ibms"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "data": { ... }
}
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linter
- `npm run type-check` - TypeScript type checking

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Turborepo** - Monorepo build system
- **Shared UI Library** - Reusable component library with brand theming


