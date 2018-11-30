import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Models from '../models';

class UserController {
  constructor() {
    this.findAllUsers = this.findAllUsers.bind(this);
  }

  public findAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users = await Models.user.findAll();
    res.send(users);
  });
}

export default new UserController();
