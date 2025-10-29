# Pipeline Workshop (Minimal Angular + Cypress)

A tiny Angular standalone component app used to demonstrate a lean CI pipeline with linting and a Cypress test.

## Scripts
- `npm start` Start local dev server (http://localhost:4200)
- `npm run lint` Static code linting
- `npm run e2e:full` Start up a local dev server, and run Cypress tests
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

