import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import PasswordUtil from '../utils/util_password';
import Models from '../models';
import { User } from '../models/Users';
// import CommonUtil from '../utils/util_common';

class UserController {
  constructor() {}

  public findAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users = await Models.user.findAll();
    res.send(users);
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

    if (user) {
      const isSame = await PasswordUtil.comparePassword(
        password,
        user.password
      );

      if (isSame) {
        res.send(user);
      } else {
        res.status(401).send({
          errMsg: `UserName or Password is incorrect.`
        });
      }
    } else {
      res.status(401).send({
        errMsg: `UserName or Password is incorrect.`
      });
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
