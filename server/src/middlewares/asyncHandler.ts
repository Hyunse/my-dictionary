import { Request, Response, NextFunction } from 'express';

/**
 * Async Await Handler
 * @param fn : function
 */
interface IParam {
  req?: Request;
  res?: Response;
  next?: NextFunction;
}
const asyncHandler = (fn) => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<IParam> =>
  Promise.resolve(fn(req, res, next)).catch((error) => {
    next(error);
  });

export default asyncHandler;
