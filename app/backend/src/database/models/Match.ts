import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamToals!: number;
  inProgress!: boolean;
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
    field: 'home_team',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team',
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});

Team.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Match.hasMany(Match, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.hasMany(Match, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
