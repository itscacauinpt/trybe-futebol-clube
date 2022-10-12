// import { IMatches } from '../../interfaces/IMatch';
import LeaderboardModel from '../../model/leaderboard/LeaderboardModel';
import CreateLeaderboard from './CreateLeaderboard';

export default class LeaderboardService {
  constructor(
    private model = new LeaderboardModel(),
    private leaderboard = new CreateLeaderboard(),
  ) {}

  getAll = async (accordingTo: string) => {
    const matches = await this.model.getAll(accordingTo);

    if (!matches) return { code: 401, message: 'Bad request' };

    const lBoard = this.leaderboard.getLeaderboard(matches);
    console.log(lBoard);

    // return { code: 200, response: matches };
    return { code: 200, response: lBoard };
  };
}

// const result = meh.reduce((acc: number, curr: IMatches) => {
//   if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
//   if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
//   return acc + 0;
// }, 0);
// console.log(result);
// return result;

// let game: any = [];

// const meh: any = matches?.map((match) => {
//   if (match.awayGame) game = match.awayGame;
//   if (match.homeGame) game = match.homeGame;

//   const result = game.reduce((acc: number, curr: IMatches) => {
//     if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
//     if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
//     return acc + 0;
//   }, 0);
//   return result;
// });

// console.log(meh);

// let game: any = [];
//     const meh: any = matches?.map((match) => {
//       if (match.awayGame) game = match.awayGame;
//       if (match.homeGame) game = match.homeGame;
//       return game;
//     });

//

// // let game: IMatch[] = [];
// // if (matches.awayGame) game = matches.awayGame;
// // if (matches.homeGame) game = matches.homeGame;
