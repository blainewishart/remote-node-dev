import express, { type Application } from 'express';

export function buildApp(): Application {
  const app = express();

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.status(200).json({ message: 'hello' });
  });

  return app;
}
