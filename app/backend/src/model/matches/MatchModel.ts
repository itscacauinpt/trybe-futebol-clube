import Match from '../../database/models/Match';
import Team from '../../database/models/Team';
import IMatches from '../../interfaces/IMatch';

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
}
