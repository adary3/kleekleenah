# KleeOnAI — React Site

## Stack
- React 18 + React Router 6
- Decap CMS (git-based, no database)
- Netlify (deploy + identity + git-gateway)

## Deploy Steps (your GitHub upload workflow)

### 1. Upload to GitHub
Upload the entire `kleeonai/` folder to a new GitHub repo called `kleeonai`.

### 2. Connect to Netlify
- Go to netlify.com → Add new site → Import from GitHub
- Select your `kleeonai` repo
- Build command: `npm run build`
- Publish directory: `build`
- Click Deploy

### 3. Enable Netlify Identity
- In Netlify dashboard → Site settings → Identity → Enable Identity
- Under Registration: set to "Invite only"
- Under Services → Git Gateway: Enable Git Gateway

### 4. Invite yourself as admin
- Identity tab → Invite users → enter your email
- Accept the invite, set your password
- Go to `kleeonai.com/admin` to access the CMS

### 5. That's it.
You can now add books, services, projects, and edit the manifesto from `/admin`.

---

## Content Management

All content lives in `src/content/`:
- `books/` → one `.md` file per book
- `services/` → one `.md` file per service
- `projects/` → one `.md` file per project
- `manifesto.md` → editable rich text
- `settings.md` → site-wide settings

Edit via `/admin` UI or directly in GitHub.

---

## Adding Kleeopedia
In `/admin` → Projects → New Project:
- Title: Kleeopedia
- URL: https://kleeopedia.com (or .africa)
- Status: Live
- Tags: Africa, Ideas, Resources, Directory
- Featured: true

Done. It shows on the Work page.

## Local Development
```
npm install
npm start
```
