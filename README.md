# On Your Six Foundation

React + Vite recreation of [oy6.org](https://oy6.org) — supporting veterans and first responders with housing, case management, and community programs.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router

## Getting started

```bash
npm install
npm run dev
```

Dev server: [http://localhost:8080](http://localhost:8080)

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/programs` | Programs |
| `/volunteer` | Volunteer |
| `/news` | News |
| `/news/:id` | Article |
| `/contact` | Contact |
| `/faq` | FAQ |
| `/privacy-policy` | Privacy |
| `/terms-of-service` | Terms |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview build
- `npm run lint` / `npm run test` — checks
- `npm run checkpoint -- "label"` — git restore point
- `npm run checkpoint:restore -- checkpoint/YYYYMMDD-HHMMSS` — restore

## Checkpoints

Before/after substantive work:

```bash
npm run checkpoint -- "before|after: <task>"
```
