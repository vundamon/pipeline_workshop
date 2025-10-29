# Pipeline Workshop (Minimal Angular + Cypress)

A tiny Angular standalone component app used to demonstrate a lean CI pipeline with linting and a Cypress test.

## Scripts
- `npm start` dev server (http://localhost:4200)
- `npm run lint` ESLint
- `npm test` single unit test
- `npm run e2e` Cypress headless
- `npm run e2e:open` Cypress interactive
- `npm run build:prod` production build (outputs `dist/pipeline-workshop`)
- `npm run build:pages` production build with base href for GitHub Pages

## Local Flow
```bash
npm install
npm start
# in another shell:
npm run e2e
```

