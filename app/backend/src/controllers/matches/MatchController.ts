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

  async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { code, message } = await this.service.finishedMatch(Number(id));

    return res.status(code).json(message);
  }

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = req.body;

    const { code, message } = await this.service.updateMatch(
      Number(id),
      match.awayTeamGoals,
      match.homeTeamGoals,
    );

    return res.status(code).json(message);
  }
}
