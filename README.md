# Remote Node Dev

Minimal Node.js + TypeScript service ready for Railway deployment and remote-friendly workflows.

## Prerequisites

- Node.js 20 LTS
- npm (bundled with Node)

## Quick Start

1. Install dependencies: `npm install`
2. Start the development server with live reload: `npm run dev`
3. Visit `http://localhost:3000/` to see the hello-world JSON response.

## Available Scripts

- `npm run dev` — start the TypeScript server with automatic reload (ts-node-dev).
- `npm run build` — type-check and compile to `dist/` using `tsc`.
- `npm run start` — run the compiled output from `dist/server.js` (use after `build`).
- `npm run lint` / `npm run lint:fix` — run ESLint checks (or auto-fix where possible).
- `npm run format` / `npm run format:write` — verify or apply Prettier formatting.
- `npm run test` / `npm run test:watch` — execute Vitest test suite once or in watch mode.
- `npm run coverage` — run tests with code coverage reporting.
- `npm run clean` — remove the `dist/` directory.

## Project Structure

- `src/index.ts` — Express app factory used by tests and runtime.
- `src/server.ts` — server bootstrap reading `PORT` (defaults to 3000).
- `vitest.config.ts` — Vitest settings targeting files ending in `.test.ts` under `src/`.
- `dev-plan.md` — implementation roadmap covering deployment and remote workflows.

## Next Steps

- Script Railway project provisioning via the Railway CLI (see `dev-plan.md`).
- Decide when to enable git hooks (Husky) once the workflow stabilizes.
- Keep agents and mobile workflows in mind: commands above are copy/paste friendly for CLI tooling.
