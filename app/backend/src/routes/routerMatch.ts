import { Router } from 'express';
import MatchController from '../controllers/matches/MatchController';

const router = Router();

const controller = new MatchController();

router.get('/matches', controller.getMacthes.bind(controller));
router.post('/matches', controller.saveMatch.bind(controller));

export default router;
