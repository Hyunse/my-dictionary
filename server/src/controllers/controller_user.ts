import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import bcryptPassword from '../middlewares/bcryptPassword';
import Models from '../models';

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
    // const password = req.body.password;

    const user = await Models.user.findOne({ where: { email: email } });

    res.send(user);
  });

  /**
   * Sign Up
   */
  public signUpUser = asyncHandler(async (req: Request, res: Response) => {
    // Param
    let user = req.body;
    // bcrypt password
    user.password = await bcryptPassword(user.password);

    const newUser = await Models.user.create({ ...user });

    res.send(newUser);
  });
  
}

export default new UserController();
