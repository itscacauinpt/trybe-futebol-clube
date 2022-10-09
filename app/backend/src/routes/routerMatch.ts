import { Router } from 'express';
import MatchController from '../controllers/matches/MatchController';

import TokenMidd from '../middleware/match/TokenMiddleware';
import TeamsMidd from '../middleware/match/TeamsMiddleware';

const router = Router();

const controller = new MatchController();

router.get('/matches', controller.getMacthes.bind(controller));
router.post('/matches', TokenMidd, TeamsMidd, controller.saveMatch.bind(controller));

export default router;
