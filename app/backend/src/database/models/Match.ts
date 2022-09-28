import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamToals: number;
  inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.belongsTo(Match, { foreignKey: 'homeTeam', as: 'homeTeam' });
Team.belongsTo(Match, { foreignKey: 'awayTeam', as: 'awayTeam' });

Match.hasMany(Team, { foreignKey: 'homeTeam', as: 'homeTeam' });
Match.hasMany(Team, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Match;
