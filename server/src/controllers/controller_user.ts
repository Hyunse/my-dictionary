import PasswordUtil from '../utils/util_password';
import Models from '../models';
import { User } from '../models/Users';
import JwtUtil from '../utils/util_jwt';

class UserController {
  constructor() {}

  public findAllUsers = async () => {
    return await Models.user.findAll();
  };

  /**
   * Sign In
   */
  public signIn = async (email: string, password: string) => {
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
        token: null,
      };
    }

    // Check Duplicated Password
    const isSame = await PasswordUtil.comparePassword(password, user.password);

    if (!isSame) {
      throw {
        ok: false,
        status: 401,
        message: `Password is incorrect.`,
        token: null,
      };
    }

    // Create JWT
    const token = JwtUtil.createJWT(user.id);

    return token;
  };

  /**
   * Sign Up
   */
  public signUp = async (user: any) => {
    const duplicatedUser = await Models.user.findOne({
      where: {
        email: user.email,
      },
    });

    if (duplicatedUser) {
      throw {
        ok: false,
        status: 409,
        message: `Email already exist.`,
        token: null,
      };
    }

    // bcrypt password
    user.password = await PasswordUtil.encryptPassword(user.password);

    // Add User
    const newUser = await Models.user.create({ ...user }).then((res: User) => {
      return res;
    });

    // Create JWT
    const token = JwtUtil.createJWT(newUser.id);

    return token;
  };

  /**
   * Update User Info
   */
  public update = async (
    name: string,
    email: string,
    country: string,
    password: string,
    id: number
  ) => {
    const result = await Models.user.update(
      { name, email, country, password },
      {
        where: {
          id,
        },
      }
    );

    return result;
  };
}

export default new UserController();
