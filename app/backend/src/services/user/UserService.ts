import UserModel from '../../model/user/UserModel';
import { ILogin } from '../../interfaces/ILogin';
import TokenConfig from '../../utils/TokenConfig';
import Bcrypt from '../../utils/Bcrypt';

export default class UserService {
  constructor(private model = new UserModel()) {}

  login = async (user: ILogin) => {
    const findUser = await this.model.findOne(user.email);

    if (!findUser) return { code: 401, message: 'Incorrect email or password' };

    const passEncript = Bcrypt.compare(findUser.password, user.password);

    if (!passEncript) return { code: 401, message: 'Incorrect email or password' };

    const token = TokenConfig.createToken(user.email);

    return { code: 200, token };
  };

  validateLogin = async (token: string | undefined) => {
    if (!token) return { code: 401, message: 'Token not found' };

    try {
      const verifiedToken = TokenConfig.verifyToken(token);
      const verifiedUser = await this.model.findOne(verifiedToken.email);

      if (!verifiedUser) return { code: 401, message: 'User not found' };

      return { code: 200, role: verifiedToken.role };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  };
}
