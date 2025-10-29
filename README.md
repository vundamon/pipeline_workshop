# Pipeline Workshop (Minimal Angular + Cypress)

A tiny Angular standalone component app used to demonstrate a lean CI pipeline with linting and a Cypress test.

## Why So Minimal?
Testers are most familiar with end-to-end (Cypress). We keep just:
- ESLint (fast static feedback)
- 1 unit test (optional)
- 1 Cypress test (primary demo)

## Scripts
- `npm start` dev server (http://localhost:4200)
- `npm run lint` ESLint
- `npm test` single unit test
- `npm run e2e` Cypress headless
- `npm run e2e:open` Cypress interactive

## Local Flow
```bash
npm install
npm start
# in another shell:
npm run e2e
```

## CI Flow
1. Install
2. Lint
3. (Optional) Unit test
4. Start server
5. Run Cypress

To simplify further, remove the "Unit test" step in `.github/workflows/ci.yml`.

## Extend Later (Optional)
- Add coverage thresholds
- Add more Cypress scenarios
- Add security audit job
- Add a build artifact (ng build)

