import bcrypt from 'bcrypt';

/**
 * Password Utils
 */
class PasswordUtil {
  private BCRYPT_ROUNDS = 10;

  /**
   * Campare Password between input password and encrypted password
   * 
   * @param {string} originPassword
   * @param {string} encryptedPassword
   * @return {boolean} 
   */
  public comparePassword = (originPassword: string, encryptedPassword: string): Promise<boolean> => {
    return bcrypt.compare(originPassword, encryptedPassword);
  }

  /**
   * Encrypt Password
   * 
   * @param {string} password
   * @return {string} encrypted password
   */
  public encryptPassword = async (password: string): Promise<String> => {
    if (password) {
      const hashedPassword = await this.hashPassword(password);
      return hashedPassword;
    }
  
    throw new Error("Worng Password");
  }
  
  /**
   * Call Hash Function
   * 
   * @param {string} password
   * @return {string} encrypted password
   */
  public hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, this.BCRYPT_ROUNDS);
  }
}

export default new PasswordUtil();