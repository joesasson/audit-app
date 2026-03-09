# Audit App

A simple React app for creating and viewing CRO (Conversion Rate Optimization) audit checklists for different clients.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 — you'll see the eKids audit. With one audit configured, it redirects directly to the checklist.

## Creating a New Client Audit

1. **Copy the template:**
   ```bash
   cp src/audits/template.js src/audits/acme.js
   ```

2. **Edit `src/audits/acme.js`** — update:
   - `id`: unique slug (e.g. `acme`)
   - `client`: name, logo path, brand, title, subtitle, roadmap
   - `priorityGroups`: sections and checklist items
   - `breakdown`: TOC and detailed analysis groups

3. **Register the audit** in `src/audits/index.js`:
   ```js
   import acme from './acme';
   export const audits = { ekids, acme };
   ```

4. **Add client assets** (logo, section images) to `public/images/`

## Data Structure

Each audit config has:
- `client` — header/brand info
- `priorityGroups` — array of { id, label, badge, badgeClass, sections }
- `sections` — array of { id, title, image, theme, items }
- `items` — array of { id, label } (id links to breakdown anchor)
- `breakdown` — { toc: [{id, label}], groups: [{ title, items }] }
- `breakdown.groups[].items` — { id, title, paragraphs[], fix? }

## Features

- **Checklist state** — checked items persist in localStorage per audit
- **Links open in new tab** — detailed breakdown links open separately
- **Multi-client** — when 2+ audits exist, home shows a list; footer has "Switch audit"
