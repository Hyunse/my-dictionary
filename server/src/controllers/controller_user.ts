import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Models from '../models';

class UserController {
  constructor() {
  }

  public findAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users = await Models.user.findAll();
    res.send(users);
  });

  public findUserById = asyncHandler(async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    res.send(email);

  });
}

export default new UserController();
