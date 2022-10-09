import Match from '../../database/models/Match';
import Team from '../../database/models/Team';
import { IMatch, IMatches } from '../../interfaces/IMatch';

export default class MatchModel {
  protected model = Match;

  async findAll(): Promise<IMatches[] | null> {
    return this.model.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
  }

  async saveMatch(match: IMatches): Promise<IMatches | null> {
    return this.model.create(match);
  }

  async findOne(id: number): Promise<IMatch | null> {
    return this.model.findOne({ where: { id } });
  }
}
