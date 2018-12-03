import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import PasswordUtil from '../utils/util_password';
import Models from '../models';
import { User } from '../models/Users';
import CommonUtil from '../utils/util_common';

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
    // <TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance | null>;
    // Find User By Email
    const user: any = await Models.user.findOne({ where: { email: email } });

    if(user) {
      PasswordUtil.comparePassword(user.password, password);  
    }

    res.send(user);
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
