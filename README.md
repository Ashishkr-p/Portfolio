# Ashish Kumar Pal Portfolio

Production-ready developer portfolio built with Next.js App Router, TypeScript, Redux Toolkit, TailwindCSS, and Framer Motion.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Redux Toolkit + React Redux
- TailwindCSS
- Framer Motion

## Project Tree (PTR)
```txt
src/
  app/
    (site)/
      page.tsx                # Home
      about/page.tsx
      projects/page.tsx
      blog/page.tsx
      contact/page.tsx
    case-studies/
      page.tsx                # Case study index
      [slug]/page.tsx         # Dynamic case study page
    api/contact/route.ts      # Contact API
    layout.tsx                # Root shell + global metadata
    not-found.tsx             # 404 page
    global-error.tsx          # Runtime fallback page
    robots.ts                 # robots.txt generator
    sitemap.ts                # sitemap.xml generator
    globals.css               # Design tokens + base styles

  components/
    animations/               # Motion helpers
    common/                   # Providers + Container
    home/                     # Hero + Redux demo module
    layout/                   # Navbar + Footer + Theme toggle
    sections/                 # Skills, Experience, Project cards, Contact form

  data/
    projects.ts               # Portfolio and case-study content
    blog.ts                   # Blog list content

  features/
    tasks/tasksSlice.ts       # Redux Toolkit demo slice

  lib/
    store.ts                  # Redux store
    hooks.ts                  # Typed Redux hooks
    constants.ts              # SEO/site constants
    utils.ts                  # className helper
```

## Architecture
- **App Router + Server-first rendering**: route pages are server components by default for performance and SEO.
- **Client components only where needed**: theme toggle, mobile nav, contact form, and Redux task demo.
- **Feature-based organization**: reusable UI in `components/`, domain state in `features/`, content in `data/`.
- **Scalable routing**: static pages + dynamic case study routes using `generateStaticParams`.

## Design System Flow
- Design tokens are defined in `src/app/globals.css` using CSS variables (`--surface`, `--text`, `--primary`, etc.).
- Tailwind maps these tokens through `tailwind.config.ts` (`surface`, `text`, `primary`, `border`).
- Shared UI primitives:
  - `.container-base` for consistent layout width/padding
  - `.card-base` for reusable card surface style
- Dark/light mode is managed with `next-themes` and `ThemeToggle`.

## Component Flow
1. `layout.tsx` mounts global shell: `Providers` -> `Navbar` -> page content -> `Footer`
2. Route page composes section components
3. Section components consume local `data/*` modules
4. Interactive modules (contact form, task manager) run client-side
5. Redux flow:
   - Store in `lib/store.ts`
   - Typed hooks in `lib/hooks.ts`
   - Slice actions/reducer in `features/tasks/tasksSlice.ts`

## SEO Flow
Implemented in App Router-native way:

1. **Global metadata** in `src/app/layout.tsx`
   - title templates
   - description
   - OpenGraph
   - Twitter cards
   - canonical base URL

2. **Per-page metadata**
   - `about`, `projects`, `blog`, `contact`
   - dynamic metadata in `case-studies/[slug]/page.tsx`

3. **Structured Data (JSON-LD)**
   - Person schema injected on home page

4. **Crawl/index controls**
   - `src/app/sitemap.ts` generates sitemap XML
   - `src/app/robots.ts` generates robots.txt

5. **Error discoverability**
   - `not-found.tsx` for clean 404 handling
   - `global-error.tsx` for runtime fallback UX

## Performance Strategy
- `next/image` for optimized image delivery
- Dynamic import for Redux demo module on Home
- Server components by default
- Minimal client JS surface

## Run Locally
```bash
nvm use
npm install
npm run dev
```

## Quality Checks
```bash
npm run type-check
npm run lint
npm run build
```

## Deployment
Optimized for Vercel deployment with Next.js App Router conventions.
