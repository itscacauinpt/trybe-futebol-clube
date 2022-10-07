import { Request, Response } from 'express';
import MatchService from '../../services/matches/MatchService';

export default class MatchController {
  constructor(private service = new MatchService()) {}

  async getMacthes(_req: Request, res: Response) {
    const { code, response } = await this.service.getMatches();

    return res.status(code).json(response);
  }
}
