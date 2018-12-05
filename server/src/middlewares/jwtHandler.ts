import { Request, Response, NextFunction } from 'express';
import JWTUtil from '../utils/util_jwt';

const jwtHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.get('X-JWT');

  if (token) {
    const user = await JWTUtil.decodeJWT(token);

    if (user) {
      // req.user = user;
    } else {
      // req.user = undefined;
    }
  }

  next();
};

export default jwtHandler;
