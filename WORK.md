# WORK.md — Improvements, Fixes & Additions

This document details every change made to the recruitment portal project, across both UI/functionality work and backend/security fixes. Organized by priority and area, with enough technical detail to explain each item in an interview.

---

## 1. Critical Security Fix — Unauthenticated Access to Applicant Data (Highest Priority)

**This is the "hidden backend bug regarding response storage and identification" referenced in the assignment brief.**

**The problem:** Three server routes had no server-side authentication or authorization checks at all:

- `app/(pages)/admin/page.jsx` — queried and rendered **every applicant's full data** (name, email, registration number, phone number, all application answers) with zero session/role check. Because this was a Server Component, the data was embedded directly into the page's server-rendered HTML/RSC payload sent to the browser — before any client-side check ever ran.
- `app/api/admin/applicants/route.js` — same data, exposed as a plain API endpoint with no auth check. Anyone could `curl` it directly and get a full dump of every applicant's PII.
- `app/api/shortlist/[id]/route.js` — allowed anyone to shortlist/un-shortlist any applicant via a PATCH request, again with zero auth check.

**The decoy:** `components/AdminContent.jsx` had an elaborate-*looking* client-side gate — `roleAuthorization`, `securityAuditPassed`, and a function that spun an 80,000-iteration loop to compute a "permission signature hash." It looked like a real security check but was pure client-side React state that never actually gated anything meaningful — by the time it ran, the sensitive data had already been sent to the browser, and the two API routes above bypassed it entirely.

**The fix:** Added real server-side checks using `auth.api.getSession({ headers: await headers() })` in all three locations, verifying both that a session exists (`session?.user`) and that the user's role is `"admin"` (`session.user.role === "admin"`) before returning any data or allowing any write. Unauthorized page requests now `redirect()` to sign-in; unauthorized API requests return `401`/`403` with no data attached.

**Verified:** tested logged-out access to `/admin` (correctly redirected), tested with a non-admin account (correctly redirected), tested with a properly-flagged admin account (correctly granted access and displayed the applicant table).

---

## 2. Firestore Security Rules Were Fully Open

**The problem:** `firestore.rules` contained `allow read, write: if true;` — meaning anyone with the project's public Firebase config values (which are often exposed client-side by design) could read or write directly to the entire Firestore database, completely bypassing the app's server and its auth checks.

**The fix:** Locked rules down to `allow read, write: if false;`. The app was already using the Firebase Admin SDK server-side for all data access, which is not subject to these rules, so this closes the hole with zero functional impact.

---

## 3. Root Cause of "Completely Unstyled Site" — Two Separate Bugs

The site initially rendered as plain black-and-white HTML with no colors, spacing, or layout across most pages. Investigation found **two distinct, compounding causes**:

- **Missing theme variables:** `app/globals.css` defined no CSS custom properties (`--background`, `--foreground`, `--primary`, `--border`, `--muted-foreground`, etc.), despite the Tailwind config and every shadcn/ui component (`Button`, `Card`, `Input`, `Checkbox`, etc.) depending on these variables for color. Classes like `bg-primary` or `text-muted-foreground` were valid Tailwind but resolved to nothing, since the underlying CSS variables didn't exist. Fixed by adding a complete light/dark theme definition matching the existing Tailwind config.
- **Missing classNames entirely:** Core page components — `NavBar.jsx`, `Hero.jsx`, `Footer.jsx`, `PopupComp.jsx`, `app/page.jsx`, the sign-in page, and the join/application page — were written with plain, un-classed HTML tags (`<div>`, `<strong>`, `<button>`) and a few raw inline `style={{...}}` objects, never using Tailwind classes at all despite `shadcn/ui` components already being imported (and in some cases imported-but-unused) in the same files. Confirmed via direct DOM inspection (rendered `<strong>` and `<div style="...">` tags with zero `className` attributes). Fixed by rewriting each of these components with proper Tailwind styling, using the shadcn primitives already available in the project.

Both fixes were necessary — the theme-variable fix alone wouldn't have helped pages with no classNames at all, and vice versa.

---

## 4. Dead/Wasteful Performance Code Removed

Several components contained large, unmemoized loops that recalculated meaningless values on every single render, for no functional purpose (nothing downstream ever used the computed result in a way that mattered):

- `app/page.jsx` — ~300,000-iteration loop (`viewportIntegrityScore` / `evaluateViewportMetrics`) run on every render; its output was displayed as a meaningless number in the welcome popup text.
- `components/Hero.jsx` — ~50,000-iteration loop (`calculateEasingCurves`).
- `app/(pages)/departments/page.jsx` — ~100,000-iteration loop (`verifyDepartmentMatrix`), result unused.
- `components/Footer.jsx` — ~40,000-iteration loop (`computeFooterLayoutChecksum`).
- `components/AdminContent.jsx` — ~80,000-iteration loop, part of the fake security-theater code described in Section 1.
- `components/DataTable.jsx` — additional dead loop scaling with row count.
- `components/FormComp.jsx` — ~200,000-iteration regex validation loop, result unused.

Also removed:
- Uncleaned `mousemove`/`scroll` window event listeners in `app/page.jsx` (no cleanup function in the `useEffect` return — a genuine memory leak that compounds with hot-reloading/navigation).
- A `localStorage` read happening directly during render instead of inside `useEffect`, which risks Next.js server/client hydration mismatches.
- Reduced the NavBar's live clock update interval from firing multiple times a second to once per second, cutting unnecessary re-renders.
- Removed `lib/actions/form.action.js`, an unused duplicate of the submit-form logic that skipped validation entirely and wasn't called from anywhere in the codebase.

---

## 5. Unstable React Keys (Real Bug, Not Just Style)

- `components/DataTable.jsx` used `key={`${row.id}-${Math.random()}`}` (and similarly for header/cell rows). Appending `Math.random()` to an already-stable ID forces React to treat every row as brand-new on every re-render — destroying and rebuilding all of them instead of reusing/reconciling, breaking things like input focus and causing unnecessary work. Fixed by using the library-provided stable IDs directly.
- The same anti-pattern was found and fixed in the departments listing page's rendering.

---

## 6. Real Department Content

The department list, application questions, and homepage cards were populated with **placeholder/obfuscated data** (randomly-generated names like `§_Mn9X7_qz` and gibberish question text). Replaced with real content across three linked data structures (`reviews`, `QuestionnaireData`, `technicalCards`/`nonTechnicalCards` in `constants/index.js`) so IDs stay consistent everywhere they're referenced:

**Technical:** Web Development, Artificial Intelligence & Machine Learning, Competitive Programming, Cybersecurity, Cloud Computing, Blockchain, Game Development, App Development, UI/UX Design, Open Source.

**Non-technical:** Social Media & Marketing, Content Writing, Graphic Design & Video Editing, Event Management & Logistics.

Each department got 4 tailored, realistic application questions (e.g. portfolio links, past project descriptions, tool familiarity) instead of the original placeholder text.

---

## 7. UI/UX Redesign

Every previously-unstyled page/component was rebuilt with proper Tailwind styling and, where relevant, subtle motion (`framer-motion`, already an existing dependency — no new packages added):

- **Hero/Homepage** — typographic hierarchy, animated gradient text heading, staggered fade-in on load, glowing background blobs + faint grid pattern, hover-animated CTA button.
- **NavBar** — sticky header with backdrop blur, slide-down entrance animation, animated underline on nav-link hover.
- **Footer** — clean layout, scroll-triggered fade-in.
- **Departments page** — checkbox list converted into `MagicCard`-wrapped selectable cards (mouse-tracked gradient glow, using an existing but previously-unused component from `components/magicui/`), live selection counter, submitted-department state handling.
- **Sign-in page** — rebuilt to actually use the already-imported shadcn `Card`/`Input`/`Label`/`Button` components (previously imported but never used — the form was plain HTML), added background glow to match the homepage.
- **Application form / join page** — cleaned up unused state, styled the "authentication required" fallback screen.
- **Admin panel (`AdminContent.jsx`)** — replaced the fake security-theater wrapper (Section 1) with a clean, minimal, properly-styled header and data view, since the real access control now lives server-side.
- **Popup/notice dialog** — rebuilt using the project's existing shadcn `Dialog` component instead of raw HTML.

---

## 8. Email Sending Fixed

**Problem 1 (code):** `app/api/send-email/route.js` looked up department metadata via `reviews.find(item => item.name === depart)`, checking for stale department names that no longer existed after the content update in Section 6. If the lookup failed, the next line (`dept.name`) threw immediately, crashing the whole send. Fixed by using the recipient's already-stored department name directly instead of re-looking it up.

**Problem 2 (credentials):** Gmail rejects standard account-password logins for programmatic SMTP access. Fixed by generating a Google **App Password** (requires 2-Step Verification) and using that as `EMAIL_PASSWORD` instead of the real account password, in both local `.env` and Vercel's environment variables.

**Problem 3 (deployment credential integrity):** Manually copy-pasting the multi-line Firebase private key into `.env`/Vercel repeatedly introduced subtle corruption (trailing commas, broken `\n` escaping), causing `DECODER routines::unsupported` / `UNAUTHENTICATED` errors from Google's servers — sometimes passing local parsing but still being cryptographically invalid. Resolved by Base64-encoding the entire service account JSON file as a single environment variable and decoding it at runtime, eliminating multi-line/escaping copy-paste errors entirely as a class of bug.

---

## 9. Deployment

- Moved the project out of a `OneDrive`-synced folder — OneDrive's live file-sync was fighting with `node_modules` (tens of thousands of small files), causing installs to hang or silently corrupt. Working directory moved to a plain local path.
- Standardized on `bun` (matching the project's existing `bun.lock`) instead of `npm`, after `npm install` failed on a peer-dependency conflict between `better-auth-firestore` and the project's TypeScript version that `npm`'s strict resolver rejected but `bun` tolerated. (Alternative fix for `npm`-based environments: add `.npmrc` with `legacy-peer-deps=true`.)
- Connected the repo to GitHub and Vercel; confirmed `.env` is git-ignored and never committed.
- Diagnosed and fixed a Vercel deployment block ("commit author does not have contributing access") caused by the local machine's `git config` pointing to a different identity than the actual GitHub/Vercel account — fixed by correcting `git config --global user.name`/`user.email` to match the verified GitHub account.
- Set all required environment variables (Firebase credentials, `EMAIL_USERNAME`/`EMAIL_PASSWORD`, `BETTER_AUTH_URL` updated to the real production domain) directly in Vercel's dashboard, kept in sync with local `.env`.

---

## Notes for the Interview

- Every fix above was tested, not just written — the security fix was verified both ways (blocked when it should be, allowed when it should be), the full user flow (signup → apply → admin view → shortlist) was walked through end-to-end on the live deployment before considering this done.
- Consciously **not implemented**, for transparency: a Firestore transaction to close a minor race condition on duplicate-submission checking, and basic rate-limiting on public API routes. Both are understood and could be added, but were deprioritized given time constraints in favor of the higher-severity security fix and getting a fully working, deployed product.
- Built using Claude AI as a pairing/debugging partner throughout — used to understand the existing (undocumented) codebase before changing it, diagnose errors, and explain the reasoning behind each fix, all of which is reflected in the detail above.
