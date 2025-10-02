import type { NextFunction, Request as ExpressRequest, Response as ExpressResponse } from 'express';

import { createRequest, createResponse } from 'node-mocks-http';
import { inspect } from 'node:util';
import { describe, expect, it } from 'vitest';

import { buildApp } from './index';

const toError = (value: unknown): Error =>
  value instanceof Error ? value : new Error(inspect(value));

describe('GET /', () => {
  it('responds with hello payload', () => {
    const app = buildApp();
    const request = createRequest<ExpressRequest>({
      method: 'GET',
      url: '/',
    });
    const response = createResponse<ExpressResponse>();
    const handler = app as unknown as (
      req: ExpressRequest,
      res: ExpressResponse,
      next: NextFunction,
    ) => void;

    handler(request, response, (err?: unknown) => {
      if (err) {
        throw toError(err);
      }
    });

    expect(response._isEndCalled()).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response._getJSONData()).toEqual({ message: 'hello' });
  });
});
