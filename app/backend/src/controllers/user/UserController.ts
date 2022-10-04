import { Request, Response } from 'express';
import { ILogin } from '../../interfaces/ILogin';
import UserService from '../../services/user/UserService';

export default class UserController {
  constructor(private model = new UserService()) {}

  async login(req: Request, res: Response) {
    const user = req.body as ILogin;

    const { code, message, token } = await this.model.login(user);

    if (message) return res.status(code).json({ message });

    return res.status(code).json({ token });
  }
}
