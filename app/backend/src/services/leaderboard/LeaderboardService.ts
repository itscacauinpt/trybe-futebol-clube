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

    return { code: 200, response: lBoard };
  };
}
