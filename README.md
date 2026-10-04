# Green Board 🟩

Production-oriented education platform starter built from the Green Board Ultimate Master Build Prompt.

## Included
- Next.js App Router + TypeScript
- Premium green education design system and responsive mobile layout
- Public homepage, classes, subjects, chapters, resources, courses and tests
- Student dashboard and focused course player
- Interactive objective test flow with result calculation
- Search experience
- Admin dashboard/resource CMS surface
- Prisma/PostgreSQL schema covering users, academics, resources, tests, courses, progress, payments and audit logs
- Seed data for Classes 9–12
- Health endpoint, sitemap, robots rules and 404 experience
- Environment template and production architecture notes

## Run
1. `npm install`
2. Copy `.env.example` to `.env`
3. Configure `DATABASE_URL` for PostgreSQL
4. `npm run db:generate`
5. `npm run db:migrate`
6. `npm run db:seed`
7. `npm run dev`

## Production hardening still required before live launch
Connect a production auth provider/session implementation, object storage/CDN, Razorpay server verification + webhook handler, Redis/rate limiting, Sentry, real CMS mutations, upload validation, RBAC middleware, automated backups/PITR, CI, Playwright E2E and infrastructure secrets.

The UI intentionally does not fabricate testimonials, ratings, partnerships, student counts or payment success.

## Architecture
The intended deployment is a modular monolith behind CDN/WAF, with managed PostgreSQL as source of truth, Redis for safe caching, object storage for files/video, and observability around app/API/database/payment boundaries.
