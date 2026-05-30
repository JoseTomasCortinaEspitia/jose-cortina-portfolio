# jose-cortina-portfolio

Professional full stack portfolio for Jose Tomas Cortina Espitia.

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before publishing

1. Update `src/data/portfolio.ts` with your real email and LinkedIn URL.
2. Replace `/public/Jose-Cortina-CV.pdf.placeholder.txt` with your real CV PDF.
3. Rename the PDF to `Jose-Cortina-CV.pdf`.
4. Update project GitHub and live demo links.

## Build

```bash
npm run build
npm run start
```

## Hostinger deploy settings

Recommended settings when importing from GitHub as a Node.js App:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start -- -p $PORT`
- Node.js version: `20` or newer if available
