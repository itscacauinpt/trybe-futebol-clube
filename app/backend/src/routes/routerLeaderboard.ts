import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard/LeaderboardController';

const router = Router();

const controller = new LeaderboardController();

router.get('/leaderboard/home', controller.getAllTeamHome.bind(controller));
router.get('/leaderboard/away', controller.getAllTeamAway.bind(controller));

export default router;
