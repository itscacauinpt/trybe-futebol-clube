import Matches from '../../database/models/Match';
import Team from '../../database/models/Team';
import { ILResult } from '../../interfaces/ILeaderboard';

export default class LeaderboardModel {
  protected model = Team;

  async getAll(accordingTo: string): Promise<ILResult[] | null> {
    return this.model.findAll({
      include: [{ model: Matches, as: accordingTo, where: { inProgress: false } }],
    });
  }
}
