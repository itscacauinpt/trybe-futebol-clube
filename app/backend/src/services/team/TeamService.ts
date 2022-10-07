import TeamModel from '../../model/team/TeamModel';

export default class TeamService {
  constructor(private model = new TeamModel()) {}

  getTeams = async () => {
    const teams = await this.model.findAll();

    return { code: 200, response: teams };
  };

  getTeam = async (id: number) => {
    const team = await this.model.findOne(id);

    return { code: 200, response: team };
  };
}
