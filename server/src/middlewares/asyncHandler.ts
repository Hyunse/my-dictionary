import { Request, Response, NextFunction } from 'express';

interface IParam {
  req?: Request;
  res?: Response;
  next?: NextFunction;
}

/**
 * Async Await Handler
 * 
 * @param {Function} fn
 * @desc Try catch Error aysnc function
 */
const asyncHandler = (fn) => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<IParam> =>
  Promise.resolve(fn(req, res, next)).catch((error) => {
    next(error);
  });

export default asyncHandler;
