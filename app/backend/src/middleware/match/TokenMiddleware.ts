import { Request, Response, NextFunction } from 'express';
import UserModel from '../../model/user/UserModel';
import TokenConfig from '../../utils/TokenConfig';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.params;
  const model = new UserModel();

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const verifiedToken = TokenConfig.verifyToken(authorization);
    const verifiedUser = await model.findOne(verifiedToken.email);

    if (!verifiedUser) return { code: 401, message: 'User not found' };
  } catch (error) {
    return { code: 401, message: 'Token must be a valid token' };
  }

  next();
}
