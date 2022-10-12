import Matches from '../../database/models/Match';
import Team from '../../database/models/Team';
import { ILResult } from '../../interfaces/ILeaderboard';
// import ITeams from '../../interfaces/ITeam';

export default class LeaderboardModel {
  // protected model = Matches;
  protected model = Team;

  // async getAll(accordingTo: string): Promise<ILResult[] | null> {
  async getAll(accordingTo: string): Promise<ILResult[] | null> {
    console.log(accordingTo);
    // return this.model.findAll({
    //   where: { inProgress: false },
    //   include: [{ model: Team, as: accordingTo, attributes: ['teamName'] }],
    // });
    return this.model.findAll({
      include: [{ model: Matches, as: accordingTo, where: { inProgress: false } }],
    });
  }
}
