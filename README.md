# KleeOnAI React Site

## Stack
- React 18 + React Router 6
- Decap CMS (git-based, no database)
- Netlify (deploy + identity + git-gateway)
- React-Snap (added for SSR)

## Setup
1. Install dependencies: `npm install react-snap`
2. Add postbuild script: `"postbuild": "react-snap"`
3. Configure react-snap include: all public routes
4. Add meta tags via react-helmet-async

## Security
- Content-Security-Policy generated from used assets
- Right-click protection implemented

## Content
All content lives in `src/content/` directory. Load via /admin or GitHub.