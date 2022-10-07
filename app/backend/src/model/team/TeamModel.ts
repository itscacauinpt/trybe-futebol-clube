import Teams from '../../database/models/Team';
import ITeams from '../../interfaces/ITeam';

export default class Team {
  protected model = Teams;

  async findAll(): Promise<ITeams[] | null> {
    return this.model.findAll();
  }

  async findOne(id: number): Promise<ITeams | null> {
    return this.model.findByPk(id);
  }
}
