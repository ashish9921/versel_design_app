# Deploying to Vercel (Node + npm)

Your project currently runs on **Lovable** (Cloudflare Workers under the hood). Lovable's preview keeps working as long as you don't touch the Cloudflare build config. To also deploy on Vercel using **Node.js + npm**, follow this guide **after exporting your code to GitHub**.

> Important: Apply all the steps below in your **GitHub repo**, NOT inside Lovable. Lovable's preview will continue to work from the Lovable editor — Vercel will deploy from your GitHub repo independently.

---

## Prerequisites

- **Node.js 20+** installed locally → https://nodejs.org
- **npm 10+** (ships with Node 20)
- A **GitHub account** and a **Vercel account** (free tier is fine)

Check your versions:

```bash
node -v   # should print v20.x or higher
npm -v    # should print 10.x or higher
```

---

## Step 1 — Export to GitHub

In Lovable, click **GitHub → Connect to GitHub** and push the project to a new repo.

## Step 2 — Clone the repo locally

```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
npm install
```

> If you see a `bun.lockb` file, delete it so npm owns the lockfile:
>
> ```bash
> rm -f bun.lockb bunfig.toml
> npm install            # generates package-lock.json
> git add package-lock.json
> git rm bun.lockb bunfig.toml 2>/dev/null || true
> ```

## Step 3 — Swap the build adapter

Replace **`vite.config.ts`** with:

```ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "vercel",          // <-- key change
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
});
```

## Step 4 — Update `package.json`

Remove Cloudflare/Lovable-specific deps:

```bash
npm uninstall @cloudflare/vite-plugin @lovable.dev/vite-tanstack-config wrangler
```

Make sure your `scripts` section looks like this (uses Node, not Bun):

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "start": "node .output/server/index.mjs",
    "preview": "vite preview"
  },
  "engines": {
    "node": ">=20"
  }
}
```

Then reinstall to refresh `package-lock.json`:

```bash
npm install
```

## Step 5 — Delete Cloudflare-only files

```bash
rm -f wrangler.jsonc
rm -f src/server.ts        # Cloudflare Worker entry — Vercel doesn't need it
```

`src/start.ts` stays unchanged.

## Step 6 — Add a `.nvmrc` (optional but recommended)

```bash
echo "20" > .nvmrc
```

Vercel and most local Node version managers will pick this up automatically.

## Step 7 — Add environment variables in Vercel

Vercel dashboard → Project → **Settings → Environment Variables**:

| Name | Value |
|---|---|
| `VITE_SUPABASE_URL` | (from your `.env`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | (from your `.env`) |
| `VITE_SUPABASE_PROJECT_ID` | (from your `.env`) |
| `SUPABASE_URL` | same as `VITE_SUPABASE_URL` |
| `SUPABASE_PUBLISHABLE_KEY` | same as the publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | from Supabase dashboard → API |

## Step 8 — Deploy

1. Commit and push:

   ```bash
   git add .
   git commit -m "chore: configure Vercel + npm build"
   git push
   ```

2. In Vercel: **Add New Project → Import** your GitHub repo
3. Framework preset: **Other**
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output directory: leave default (TanStack Start writes to `.output/` automatically)
7. Node.js version: **20.x** (Settings → General)
8. Click **Deploy**

## Step 9 — Local sanity check before pushing

```bash
npm run build
npm run start
# open http://localhost:3000
```

If that boots, Vercel will boot too.

## Step 10 — Keep editing in Lovable

You can keep using Lovable's preview to edit features. Lovable pushes to GitHub → Vercel auto-deploys on every push. To pull those edits to your local clone:

```bash
git pull
npm install   # only if dependencies changed
```

---

## Troubleshooting

- **`command not found: bun`** in Vercel logs → your `package.json` still references `bun`. Re-check Step 4 scripts.
- **`Module not found: @cloudflare/vite-plugin`** → you missed Step 4. Run the `npm uninstall` again and re-run `npm install`.
- **Blank page in production / 500 on first request** → make sure you deleted `src/server.ts` (Step 5). The Cloudflare-specific wrapper breaks the Vercel adapter.
- **`Cannot find module '.output/server/index.mjs'`** locally → run `npm run build` first; the `.output/` folder is generated.
- **Env vars `undefined` at runtime** → in Vercel, env vars must be added for the **Production** environment (and **Preview** if you want PR deployments). Redeploy after adding.

---

## Caveats

- **Don't apply Steps 3–5 inside Lovable** — they break Lovable's preview and publish.
- Supabase RLS policies and migrations are unchanged — Lovable and Vercel both hit the same Supabase project.
- Custom domain: configure in Vercel's dashboard. Don't point the same hostname at both Lovable and Vercel.

---

## TL;DR

```bash
# one-time
git clone <repo> && cd <repo>
rm -f bun.lockb bunfig.toml wrangler.jsonc src/server.ts
npm uninstall @cloudflare/vite-plugin @lovable.dev/vite-tanstack-config wrangler
npm install
# edit vite.config.ts (Step 3) and package.json scripts (Step 4)
npm run build && npm run start    # verify locally
git add . && git commit -m "vercel + npm" && git push
# then: Vercel → Import repo → Deploy
```

Lovable preview keeps working from the Lovable editor. Vercel deploys from GitHub. Same Supabase backend for both.
