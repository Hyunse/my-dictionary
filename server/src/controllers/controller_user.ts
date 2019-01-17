import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import PasswordUtil from '../utils/util_password';
import Models from '../models';
import { User } from '../models/Users';
import JwtUtil from '../utils/util_jwt';

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
  public signIn = asyncHandler(async (req: Request, res: Response) => {
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
      // Create JWT
      const token = JwtUtil.createJWT(user.id);

      res.send({
        ok: true,
        message: null,
        token
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
  public signUp = asyncHandler(async (req: Request, res: Response) => {
    // Param
    let user = req.body;

    const duplicatedUser = await Models.user.findOne({
      where: {
        email: user.email
      }
    });

    if (duplicatedUser) {
      throw {
        ok: false,
        status: 409,
        message: `Email already exist.`,
        token: null
      };
    }

    // bcrypt password
    user.password = await PasswordUtil.encryptPassword(user.password);

    // Add User
    const newUser = await Models.user.create({ ...user }).then((res: User) => {
      return res;
    });

    const token = JwtUtil.createJWT(newUser.id);

    res.send({
      ok: true,
      message: null,
      token
    });
  });

  /**
   * Update User Info
   */
  public update = asyncHandler(async (req: Request, res: Response) => {
    // Param
    const name = req.body.name;
    const email = req.body.email;
    const country = req.body.country;
    const password = req.body.password;
    // Jwt
    const user = req.body.user;

    const result = await Models.user.update(
      { name, email, country, password },
      {
        where: {
          id: user.id
        }
      }
    );

    res.send(result);
  });
}

export default new UserController();
