import { Model, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  teamName!: string;
}

Team.init({
  homeTeam: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Team;
