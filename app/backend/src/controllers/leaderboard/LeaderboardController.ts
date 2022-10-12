import { Request, Response } from 'express';
import LeaderboardService from '../../services/leaderboard/LeaderboardService';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) {}

  async getAllTeamHome(_req: Request, res: Response) {
    const accordingTo = 'homeGame';
    const { code, response } = await this.service.getAll(accordingTo);

    return res.status(code).json(response);
  }

  async getAllTeamAway(_req: Request, res: Response) {
    const accordingTo = 'awayGame';
    const { code, response } = await this.service.getAll(accordingTo);

    return res.status(code).json(response);
  }
}
