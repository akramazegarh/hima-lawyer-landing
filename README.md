# HIMA - Lawyer Landing Page

A 100% static, mobile-first landing page for HIMA SaaS targeting Moroccan lawyers.

## Features

- ✅ 100% Static site (Next.js static export)
- ✅ Mobile-first responsive design
- ✅ Tailwind CSS for styling
- ✅ Lead collection form (email, role, priorities, bottlenecks)
- ✅ Form posts to formspree.io
- ✅ Professional animations
- ✅ Facebook Ads optimized
- ✅ Deployable to GitHub Pages
- ✅ RTL support for Arabic content
- ✅ No backend, no API routes

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update the Formspree form ID in `app/page.tsx`:
   - Go to [formspree.io](https://formspree.io) and create a free account
   - Create a new form and get your form ID
   - Replace `YOUR_FORM_ID` in the code with your actual form ID

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

The site is configured to automatically deploy to GitHub Pages when you push to the main branch.

Make sure to:
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. The workflow will automatically build and deploy

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- Next.js 16 (static export)
- React 19
- TypeScript
- Tailwind CSS 4
- Formspree for form handling
