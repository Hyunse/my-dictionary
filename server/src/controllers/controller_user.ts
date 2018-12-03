import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import PasswordUtil from '../utils/util_password';
import Models from '../models';
import { User } from '../models/Users';

class UserController {
  constructor() {}

  public findAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users = await Models.user.findAll();
    res.send({
      ok: true,
      data: users
    });
  });

  /**
   * Sign In
   */
  public signInUser = asyncHandler(async (req: Request, res: Response) => {
    // Param
    const email = req.body.email;
    const password = req.body.password;

    // Find User By Email
    const user: User = await Models.user
      .findOne({ where: { email: email } })
      .then((res: User) => {
        return res;
      });

    if (!user) {
      throw {
        status: 401,
        message: 'Email Not Found',
        token: null
      };
    }

    const isSame = await PasswordUtil.comparePassword(password, user.password);

    if (isSame) {
      res.send({
        ok: true,
        message: null,
        token: user
      });
    } else {
      throw {
        ok: false,
        status: 401,
        message: `Password is incorrect.`,
        token: null
      };
    }
  });

  /**
   * Sign Up
   */
  public signUpUser = asyncHandler(async (req: Request, res: Response) => {
    // Param
    let user = req.body;

    // TODO: Check Duplicated Email

    // bcrypt password
    user.password = await PasswordUtil.savePassword(user.password);

    const newUser = await Models.user.create({ ...user });

    res.send(newUser);
  });
}

export default new UserController();
