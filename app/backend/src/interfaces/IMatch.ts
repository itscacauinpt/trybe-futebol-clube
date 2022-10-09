export interface IMatches {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatch extends IMatches {
  id: number;
}

export interface IMResult extends IMatch {
  teamHome: object;
  teamAway: object;
}
