# Recruitment Portal

A recruitment/application portal built with Next.js and Firebase. Candidates sign in, browse departments, and submit applications; admins review and shortlist submissions.

**Live site:** https://recruitment-portal-vbz1.vercel.app/

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS, shadcn/ui (Radix primitives), Framer Motion
- **Auth:** better-auth (with `better-auth-firestore` adapter) + Google OAuth
- **Database:** Firebase Firestore (via `firebase-admin` on the server)
- **Email:** Nodemailer (Gmail SMTP)
- **Hosting:** Vercel

## Prerequisites

- **Node.js 20.x or 22.x LTS** — this project has known compatibility issues with Node 24 (OpenSSL/crypto changes break `better-auth` session handling with an `ERR_OSSL_UNSUPPORTED` error). Stick to an LTS version.
- A Firebase project with **Firestore** enabled
- A Google Cloud service account key for the same Firebase project (for server-side Admin SDK access)

## Setup

1. **Clone and install dependencies**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   npm install
   ```

2. **Create your environment file**
   ```bash
   cp .env.example .env
   ```

3. **Fill in `.env`.** See `.env.example` for the full list; the required groups are:
   - **Firebase Admin (server-side):** `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` — from a Firebase service account key (Firebase Console → Project Settings → Service Accounts → Generate new private key).
   - **Firebase Client (public):** the six `NEXT_PUBLIC_FIREBASE_*` values — from Firebase Console → Project Settings → your registered Web App.
   - **Auth:** `BETTER_AUTH_SECRET` (any random 32+ character string), `BETTER_AUTH_URL` (`http://localhost:3000` locally; your production URL when deployed).
   - **Google OAuth (optional, for Google sign-in):** `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` from Google Cloud Console → APIs & Services → Credentials.
   - **Email (optional, for notification emails):** `EMAIL_USERNAME` + a Gmail **App Password** (not your regular password — requires 2-Step Verification enabled on the Google account).

   > **Tip:** if you hit repeated `DECODER routines::unsupported` / `UNAUTHENTICATED` errors from Firebase after setting `FIREBASE_PRIVATE_KEY`, it's almost always the multi-line key getting mangled during copy-paste (into `.env` or into Vercel's dashboard). Re-copy it fresh from the downloaded service-account JSON, keeping the `\n` sequences as literal text rather than real line breaks.

4. **Set your Firebase project ID** in `.firebaserc` to match your actual Firebase project.

5. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

- Push the repo to GitHub and import it into Vercel.
- Add every variable from your local `.env` to **Vercel → Project → Settings → Environment Variables** — Vercel does not read your local `.env` file, it needs its own copy.
- Update `BETTER_AUTH_URL` to your real production domain in Vercel's env vars.
- Confirm `.env` is listed in `.gitignore` and was never committed.
- Redeploy after any environment variable change (Vercel does not hot-reload env vars into an existing build).

## Project Structure

```
app/
  (pages)/           # route groups for public + admin pages
  api/                # server routes (auth, form submission, admin, email)
components/           # shared UI components (shadcn/ui-based)
constants/             # department listings, questionnaire data
lib/                   # Firebase/db connection, auth config
firestore.rules        # Firestore security rules
.env.example            # required environment variables (copy to .env)
```

## Known Limitations

- No rate-limiting on public API routes.
- A minor race condition is possible on duplicate-submission checks under concurrent requests (read-then-write, not wrapped in a Firestore transaction).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Lint the codebase |
| `npm run clean` | Remove the `.next` build cache |
