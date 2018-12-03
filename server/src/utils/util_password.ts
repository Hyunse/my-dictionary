import bcrypt from 'bcrypt';

class PasswordUtil {
  private BCRYPT_ROUNDS = 10;

  public comparePassword = (originPassword: string, encryptedPassword: string): Promise<boolean> => {
    return bcrypt.compare(originPassword, encryptedPassword);
  }

  public savePassword = async (password: string): Promise<String> => {
    if (password) {
      const hashedPassword = await this.hashPassword(password);
      return hashedPassword;
    }
  
    throw new Error("Worng Password");
  }
  
  public hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, this.BCRYPT_ROUNDS);
  }
}

export default new PasswordUtil();