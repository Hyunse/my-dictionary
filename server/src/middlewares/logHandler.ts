import { Request, Response, NextFunction } from 'express';

export function logHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`[${new Date()}]\n${err.stack || err.message}`);
  next(err);
}
