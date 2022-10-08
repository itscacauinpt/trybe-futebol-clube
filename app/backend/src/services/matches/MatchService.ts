import { IMatches } from '../../interfaces/IMatch';
import MatchModel from '../../model/matches/MatchModel';

export default class MatchService {
  constructor(private model = new MatchModel()) {}

  getMatches = async () => {
    const matches = await this.model.findAll();

    return { code: 200, response: matches };
  };

  saveMatch = async (match: IMatches) => {
    const theMatch = await this.model.saveMatch(match);

    return { code: 201, response: theMatch };
  };
}
