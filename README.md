# Traceform

AI feedback clustering SaaS.

## Stack

- [Next.js 15](https://nextjs.org) + TypeScript
- [Auth.js v5](https://authjs.dev) — email magic link via Resend
- [Prisma](https://www.prisma.io) + PostgreSQL
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
cp .env.example .env.local
# Fill in DATABASE_URL, AUTH_SECRET, AUTH_RESEND_KEY, AUTH_EMAIL_FROM

npm install
npx prisma db push
npm run dev
```

## Auth setup

1. Create a [Resend](https://resend.com) account and get an API key
2. Set `AUTH_RESEND_KEY` and `AUTH_EMAIL_FROM` in `.env.local`
3. Generate `AUTH_SECRET`: `npx auth secret`

## Deploy

Connect this repo to [Vercel](https://vercel.com/new) and add the env vars from `.env.example`.
Then run the Prisma migration against your production DB:

```bash
DATABASE_URL="<prod-url>" npx prisma migrate deploy
```
