import bcrypt from 'bcrypt';

const BCRYPT_ROUNDS = 10;

const savePassword = async (password: string): Promise<String> => {
  if (password) {
    const hashedPassword = await hashPassword(password);
    return hashedPassword;
  }

  throw new Error("Worng Password");
}

const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export default savePassword;