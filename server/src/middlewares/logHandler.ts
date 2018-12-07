import { Request, Response, NextFunction } from 'express';

/**
 * Log Handler
 * 
 * @param {Error} err 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export function logHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`[${new Date()}]\n${err.stack || err.message}`);
  next(err);
}
