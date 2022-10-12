import { IMatch } from './IMatch';
import ITeams from './ITeam';

export interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface ILResult extends ITeams {
  homeGame?: IMatch[];
  awayGame?: IMatch[];
}
