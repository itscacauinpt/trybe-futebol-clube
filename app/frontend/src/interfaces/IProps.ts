interface GameProp {
  currentFilter: any;
  setCurrentFilter: any;
}

interface LDProp {
  currentFilter: any
}

interface GTProps {
  isAdm: any;
  currentFilter: any;
}

interface TeamProps {
  teams: any;
  homeTeam: any;
  getTeam: Function;
  testId: string;
}

interface ScoreProps {
  homeTeam: any;
  score: any;
  setScore: any;
  qtyGoal: any;
  testId: any;
}

interface EGProps {
  homeTeam: any;
  awayTeam: any;
  homeTeamGoals: any;
  awayTeamGoals: any;
  idMatch: any;
  updateMatch: any;
  finishMatch: any;
  getTeam: any;
}

interface CNTProps {
  teams: any;
  setTeams: any;
  getTeam: any;
  homeTeamScoreboard: any;
  setHomeTeamScoreboard: any;
  awayTeamScoreboard: any;
  setAwayTeamScoreboard: any;
  createMatch: any;
  finishMatch: any;
}

export type {
  GameProp,
  LDProp,
  GTProps,
  TeamProps,
  ScoreProps,
  EGProps,
  CNTProps
}