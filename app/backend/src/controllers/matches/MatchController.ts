import { Request, Response } from 'express';
import MatchService from '../../services/matches/MatchService';

export default class MatchController {
  constructor(private service = new MatchService()) {}

  async getMatches(_req: Request, res: Response) {
    const { code, response } = await this.service.getMatches();

    return res.status(code).json(response);
  }

  async saveMatch(req: Request, res: Response) {
    const match = req.body;
    const { code, response } = await this.service.saveMatch(match);

    return res.status(code).json(response);
  }
}
