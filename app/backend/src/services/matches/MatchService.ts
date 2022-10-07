import MatchModel from '../../model/matches/MatchModel';

export default class MatchService {
  constructor(private model = new MatchModel()) {}

  getMatches = async () => {
    const matches = await this.model.findAll();

    return { code: 200, response: matches };
  };
}
