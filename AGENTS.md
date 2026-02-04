# AGENTS.md

**Project Summary**
- Personal portfolio website built with Next.js (pages router) and Tailwind CSS.
- Includes lead capture, admin dashboard, dark/light mode, and GitHub repo showcase.

**Primary Stack**
- Next.js `16.1.6`, React `18.2.0`, Tailwind CSS `3.2.1`, `next-themes`, `react-rough-notation`.
- Database: Postgres via Neon using `@neondatabase/serverless` and `pg`.

**Core Commands**
- `npm run dev` starts the dev server on `http://localhost:3000`.
- `npm run build` builds for production.
- `npm start` runs the production server.

**Architecture Map**
- `pages/` routes and API endpoints (`pages/api/*`).
- `components/` reusable UI components.
- `constants/data.js` is the single source of truth for portfolio content.
- `lib/` utilities (database, GitHub integration).
- `styles/` Tailwind globals and fonts.
- `public/` static assets and downloadable documents.

**Conventions**
- Functional React components only.
- Wrap new pages with `components/ContainerBlock.js` for layout + SEO.
- Prefer Tailwind utilities; dark mode uses `class` on `<html>` via `next-themes`.
- Use path aliases from `jsconfig.json` (`@components`, `@constants`, `@lib`, `@styles`).
- Update content in `constants/data.js` instead of hardcoding values in components.

**SSR and Data Fetching**
- Home page uses `getServerSideProps` with `lib/getLatestRepos.js` and `GITHUB_AUTH_TOKEN`.

**API and Database**
- API routes validate HTTP method and use try/catch with proper status codes.
- Admin endpoints require `Authorization: Bearer ${ADMIN_SECRET_KEY}`.
- Tables `leads` and `downloads` are auto-created on first API use.

**Environment Variables**
- Configure in `.env.local` (do not commit).
- Required: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GITHUB_AUTH_TOKEN`, `DATABASE_URL`, `ADMIN_SECRET_KEY`, `NEXT_PUBLIC_ADMIN_SECRET`.

**Content and Design Constraints**
- Do not change the homepage animation or avatar/photo without explicit approval.
- Do not mention immigration, visas, or criteria language anywhere on the site.
- If adding pages, update navigation in `components/Navbar.js` as needed.

**Assets**
- Store images in `public/`; prefer WebP when possible.
- Use `<Image>` where practical, but existing code uses `<img>` in places.

**Testing**
- No testing framework configured. If requested, use Jest + Testing Library.

**Deployment**
- Vercel deploys from `main`. Build output is `.next`.

**Reference Docs**
- `CLAUDE.md` for detailed conventions and workflows.
- `updates.md` for content roadmap and non-negotiable rules.
- `README-DATABASE-SETUP.md` for lead capture setup details.
