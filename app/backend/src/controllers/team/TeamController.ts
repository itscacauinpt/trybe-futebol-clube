import { Request, Response } from 'express';
import TeamService from '../../services/team/TeamService';

export default class TeamController {
  constructor(private service = new TeamService()) {}

  async getTeams(_req: Request, res: Response) {
    const { code, response } = await this.service.getTeams();

    return res.status(code).json(response);
  }

  async getTeam(req: Request, res: Response) {
    const { id } = req.params;

    const numberId = Number(id);

    const { code, response } = await this.service.getTeam(numberId);

    return res.status(code).json(response);
  }
}
