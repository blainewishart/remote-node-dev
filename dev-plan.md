# Remote Node Dev Plan

## Context & Goals
- Stand up a minimal-yet-flexible Node + TypeScript service that can deploy to Railway from GitHub.
- Ship a remote "hello world" HTTP API quickly while keeping the stack familiar for agents or mobile workflows.
- Support both remote-first development (editing on Railway or via cloud IDE) and local development, with git pushes possible from either environment.

## Tooling Decisions
- **Runtime**: Node.js 20 LTS (current active LTS, broadly compatible with libraries and well supported by Railway images).
- **Language**: TypeScript 5.4 (latest stable minor; aligns with Node 20 features without cutting-edge risk).
- **Package manager**: npm (pre-installed with Node, avoids extra setup on Railway; revisit pnpm if workspace grows).
- **HTTP framework**: Express 4.x for the hello-world API (ubiquitous, lightweight to start; can be swapped later).
- **Linter/formatter**: ESLint with `@typescript-eslint` + `eslint-config-prettier`; add Prettier for formatting consistency if desired.
- **Testing**: Vitest + supertest (fast TS-friendly runner with watch mode; supertest gives HTTP assertions). Keep Jest in mind if ecosystem needs demand it later.
- **Project automation**: simple npm scripts for build, test, lint, dev server; optional Git hooks via `husky` once workflow stabilizes.

## Phase 1 — Repo & Local Baseline
1. Initialize npm workspace, TypeScript config (`tsconfig.json` targeting ES2022/CommonJS for Node 20), and basic source structure (`src/index.ts`).
2. Add ESLint + TypeScript configs; define lint script (`npm run lint`).
3. Add Vitest config (or rely on package defaults) with an initial sample test to prove TDD loop.
4. Implement Express hello-world handler returning JSON `{ message: "hello" }`; expose port via env var with safe default (e.g., 3000).
5. Provide npm scripts: `dev` (ts-node-dev or nodemon + ts-node), `build` (tsc), `start` (node dist/index.js), `test`, `lint`.
6. Write README sections for local setup, scripts, and expectations for agents/mobile clients (commands copy/paste friendly).

## Phase 2 — Railway Enablement
1. Create Railway project from GitHub repo (manual click-through initially for speed).
2. Add `Railway.toml` or use `railway` CLI to define service name, build command (`npm install && npm run build`), start command (`npm run start`).
3. Configure environment variables in Railway dashboard (e.g., `PORT` provided by Railway, propagate via `process.env.PORT`).
4. Verify deployment using Railway logs; hit the public URL to confirm hello-world response.
5. Document deployment workflow in README (manual deploy trigger + automatic on pushes to main).

## Phase 3 — Remote Dev & Mobility
1. Set up Railway shell access instructions (`railway shell`, `railway run npm test`), emphasizing Git usage from Railway for direct pushes.
2. Outline VS Code options: recommend local VS Code with Remote Tunnel or GitHub Codespaces for browser/mobile editing; avoid installing full VS Code on Railway (unsupported/heavy).
3. Suggest terminal-centric editors (e.g., `nano`, `neovim`) and agent workflows for quick edits when on mobile.
4. Document git remotes: keep `origin` pointing to GitHub; allow pushes from both laptop and Railway shell, with guidance on pull-before-push to prevent conflicts.
5. Capture agent workflow tips (e.g., using CLI-based commands so models can operate without GUI dependencies).

## Phase 4 — Quality & Future Enhancements
1. Add Prettier + lint-staged later if formatting consistency becomes pain point.
2. Introduce CI (GitHub Actions) running `npm ci`, `npm run lint`, `npm test` before enabling auto deployments.
3. Explore secrets management (Railway variables vs. GitHub secrets) before adding databases or third-party APIs.
4. Evaluate migrating to a more structured framework (Fastify/NestJS) once requirements grow; backlog item only.
5. Investigate provisioning scripts or Terraform once manual Railway workflow feels stable.

## Open Questions / Follow-ups
- Do we need database connectivity for early iterations, or is stateless API enough?
- Any preference for integrating Prettier on day one vs. later?
- Should we script Railway project creation via CLI for reproducibility, or is manual acceptable for now?
- Confirm appetite for Husky/commit hooks in remote environments (can be tricky when multiple machines push).

## Next Immediate Actions
1. Bootstrap repo with Phase 1 tasks locally to validate lint/test/dev workflows.
2. Push to GitHub and connect Railway for first deployment.
3. Test remote editing flow (Railway shell + git push) to ensure dual-device workflow works as expected.
