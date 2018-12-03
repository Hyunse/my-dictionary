import { Request, Response, NextFunction } from 'express';

export interface Error {
  status?: number;
  message?: string;
  stack?: string;
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.status || 500);
  res.send({
    ok: false,
    error: err.message || 'Server Error!'
  });
}
