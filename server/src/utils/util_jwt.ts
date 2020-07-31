import jwt from 'jsonwebtoken';
import Models from '../models';
import { User } from '../models/Users';

class JwtUtil {
  /**
   * Create Json Web Token
   * 
   * @param {number} id
   * @return {Object} token
   */
  public createJWT = (id: number): string => {
    const token = jwt.sign(
      {
        id
      },
      `${process.env.JWT_TOKEN}`
    );

    return token;
  };

  /**
   * Decode JWT
   * 
   * @param {string} token
   * @return {User} user
   */
  public decodeJWT = async (token: string): Promise<User | undefined> => {
    try {
      const decoded: any = jwt.verify(token.substr(token.indexOf(' ') + 1), `${process.env.JWT_TOKEN}`);
      const { id } = decoded;
      const user: User = await Models.user
        .findOne({ where: { id: id } })
        .then((res: User) => {
          return res;
        });

      return user;
    } catch (error) {
      return undefined;
    }
  };
}

export default new JwtUtil();
