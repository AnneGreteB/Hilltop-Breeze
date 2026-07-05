# Casa Hilltop Breeze — setup & handover guide

The site is a Next.js static export. Content lives in `content/*.json`; the family
edits it through Sveltia CMS at `/admin`, which commits to this repo. Every push to
`main` triggers the GitHub Actions workflow, which rebuilds and deploys to GitHub
Pages. Edits go live ~2 minutes after saving.

## One-time setup (you, ~1 hour)

### 1. Push to GitHub (5 min)

```
git remote add origin https://github.com/<OWNER>/hilltopbreeze.git
git push -u origin main
```

Consider creating the repo under a shared/family GitHub account rather than your
personal one — see "Ownership" below.

### 2. Enable GitHub Pages (2 min)

Repo → Settings → Pages → Source: **GitHub Actions**. The included
`.github/workflows/deploy.yml` does the rest. The first deploy runs on the next
push (or trigger it manually from the Actions tab).

### 3. Set up CMS login (~20 min)

Sveltia CMS needs a tiny OAuth bridge so editors can log in with GitHub:

1. Go to https://github.com/sveltia/sveltia-cms-auth and click **Deploy to
   Cloudflare Workers** (free Cloudflare account required). Note the Worker URL,
   e.g. `https://sveltia-cms-auth.<you>.workers.dev`.
2. Create a GitHub OAuth app: GitHub → Settings → Developer settings → OAuth Apps
   → New. Homepage URL: your site URL. Authorization callback URL:
   `<Worker URL>/callback`.
3. In the Cloudflare Worker's settings, add the variables `GITHUB_CLIENT_ID` and
   `GITHUB_CLIENT_SECRET` from the OAuth app, and set `ALLOWED_DOMAINS` to your
   site's domain.
4. In `public/admin/config.yml`, replace the two placeholders: `repo:` (your
   `owner/repo`) and `base_url:` (the Worker URL). Commit and push.

### 4. Custom domain (10 min + DNS propagation)

The family's domain is currently at Namecheap. In the repo: Settings → Pages →
Custom domain → `casa-hilltopbreeze.com`, and tick **Enforce HTTPS** once
available. At Namecheap: point the apex `A` records at GitHub Pages
(185.199.108.153 / .109. / .110. / .111.) and add a `CNAME` for `www` pointing to
`<owner>.github.io`.

### 5. Give the family access (10 min)

Each editor needs a GitHub account (or share one family account). Add them as
repo **collaborators** with write access. Then they log in at
`https://casa-hilltopbreeze.com/admin` with that GitHub account.

## How the family edits (share this part with them)

1. Go to **casa-hilltopbreeze.com/admin** and sign in.
2. Pick a section (Homepage, The apartments, Explore, Location, Contact details).
3. Change text or drag a new photo into an image field.
4. Click **Save**. The site updates itself — wait about two minutes, then refresh
   the live site to see the change.

They can't break the layout — the admin only exposes text, photos, and links.
Photos are automatically resized and compressed on upload.

## Fixing mistakes

Every save is a git commit. To undo anything, revert the commit:
`git revert <sha>` and push, or use GitHub's web UI (repo → commits → revert).

## Ownership (do this, future-you will be grateful)

- Keep the **domain** registered in the family's name and billing.
- Prefer a **family-owned GitHub account** as the repo owner, with you as
  collaborator — not the other way around.
- The Cloudflare account (auth Worker) should also be recoverable by them —
  store its credentials wherever the family keeps passwords.
