import { Request, Response, NextFunction } from 'express';

export interface Error {
  status?: number;
  message?: string;
  stack?: string;
}

/**
 * Error Handler
 * 
 * @param {Error} err 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
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
