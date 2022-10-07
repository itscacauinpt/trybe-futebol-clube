import Match from '../../database/models/Match';
import IMatches from '../../interfaces/IMatch';

export default class MatchModel {
  protected model = Match;

  async findAll(): Promise<IMatches[] | null> {
    return this.model.findAll();
  }
}
