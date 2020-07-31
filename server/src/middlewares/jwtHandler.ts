import { Request, Response, NextFunction } from 'express';
import JWTUtil from '../utils/util_jwt';

/**
 * Json Web Token Handler
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const jwtHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token: any = req.headers['authorization'];
  if (token) {
    const user = await JWTUtil.decodeJWT(token);

    if (user) {
      req.body.user = user;
    } else {
      req.body.user = undefined;
    }
  }

  next();
};

export default jwtHandler;
