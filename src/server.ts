import type { Server } from 'node:http';

import { buildApp } from './index';

export function startServer(portFromEnv: string | undefined = process.env.PORT): Server {
  const app = buildApp();
  const port = parseInt(portFromEnv ?? '3000', 10);

  if (Number.isNaN(port)) {
    throw new Error(`Invalid PORT value provided: ${portFromEnv}`);
  }

  return app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

if (require.main === module) {
  startServer();
}
