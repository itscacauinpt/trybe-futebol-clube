import * as jwt from 'jsonwebtoken';

const jwtSingOptions: jwt.SignOptions = { algorithm: 'HS256', expiresIn: '1d' };
const SECRET = process.env.JWT_SECRET as string;

const TokenConfig = {
  createToken: async (payload: string) => {
    const token = jwt.sign({ payload }, SECRET, jwtSingOptions);

    return token;
  },
  verifyToken: async (payload: string) => {
    const verified = jwt.verify(payload, SECRET) as jwt.JwtPayload;

    return verified;
  },
};

// const token = jwt.sign(payload, process.env.JWT_SECRET as string);

export default TokenConfig;
