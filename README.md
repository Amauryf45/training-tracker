# Training Tracker

A mobile-first web app for logging gymnastics strength training sessions — front lever, handstand push-ups, human flag, and similar bodyweight strength moves.

Built to be used **during workouts** on your phone. Log sets, hold times, weight, and RPE in real time. Rest timer auto-starts between sets. Sessions are stored in Vercel KV and accessible via API for coaching and analysis.

## Features

- **Day selector** — auto-suggests today's workout based on the day of the week
- **Session logger** — expandable exercise cards with per-set tracking (seconds/reps, kg, RPE)
- **Rest timer** — auto-starts when you complete a set, pre-filled with the exercise's prescribed rest time. Ring countdown, vibrates on completion, skip anytime.
- **Session wrap-up** — overall RPE and free-text notes
- **API endpoints** — fetch session history and routine data programmatically (designed for AI coaching tools)
- **PWA-ready** — add to your phone's home screen for app-like experience
- **Warm Sand theme** — light, clean design with earthy tones, built for readability in gym lighting

## The routine

The included routine is a 4-day push/pull split with daily undulating periodization (DUP), targeting front lever, freestanding HSPU, and human flag. It's structured in 5-week mesocycles (4 training + 1 deload).

**This is a sample routine.** Fork the repo and edit `lib/routine.ts` to match your own program. The data model supports any combination of holds, reps, and timed exercises.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Upstash Redis](https://upstash.com/) via [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Setup

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/training-tracker.git
cd training-tracker
npm install
```

### 2. Set up storage

1. Create a project on [Vercel](https://vercel.com)
2. Go to **Storage** > **Browse** > **Upstash** > **Upstash for Redis**
3. Select free plan, create, and link to your project
4. The KV environment variables are auto-populated

For local development, copy the KV credentials from Vercel dashboard into `.env.local`:

```
KV_REST_API_URL=your_url
KV_REST_API_TOKEN=your_token
KV_REST_API_READ_ONLY_TOKEN=your_read_only_token
KV_URL=your_url
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Deploy

Push to GitHub, import into Vercel — auto-deploys on every push.

## API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/sessions?count=10` | GET | Last N session logs |
| `/api/sessions` | POST | Save a session (`SessionLog`) |
| `/api/sessions/latest?count=5` | GET | Summarized recent sessions with per-skill breakdowns (TUT, sets, RPE) |
| `/api/routine` | GET | Current routine definition |
| `/api/routine` | PUT | Update the routine (`Routine`) |

## Customizing your routine

Edit `lib/routine.ts`. Each day has sections, each section has exercises:

```typescript
type: "hold"  // timed holds — input is seconds
type: "reps"  // rep-based — input is rep count
type: "time"  // timed sets (e.g. warm-up) — input is seconds
```

Tags control the color coding and left-border accent on exercise cards:

| Tag | Color | Use for |
|-----|-------|---------|
| `fl` | Green | Front lever exercises |
| `hspu` | Blue | Handstand push-up exercises |
| `flag` | Orange | Human flag exercises |
| `prehab` | Gray | Warm-up and joint prep |
| `acc` | Terracotta | Accessory strength work |
| `core` | Terracotta | Core-specific work |

## License

MIT
