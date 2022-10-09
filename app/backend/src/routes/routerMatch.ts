import { Router } from 'express';
import MatchController from '../controllers/matches/MatchController';

import TokenMidd from '../middleware/match/TokenMiddleware';
import { validateEqualTeams, validateTeams } from '../middleware/match/TeamsMiddleware';

const router = Router();

const controller = new MatchController();

router.get('/matches', controller.getMatches.bind(controller));
router.patch('/matches/:id', controller.updateMatch.bind(controller));
router.patch('/matches/:id/finish', controller.finishMatch.bind(controller));
router.post(
  '/matches',
  TokenMidd,
  validateEqualTeams,
  validateTeams,
  controller.saveMatch.bind(controller),
);

export default router;
