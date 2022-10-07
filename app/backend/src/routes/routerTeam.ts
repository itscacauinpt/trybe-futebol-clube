import { Router } from 'express';
import TeamService from '../controllers/team/TeamController';

const router = Router();

const controller = new TeamService();

router.get('/teams', controller.getTeams.bind(controller));
router.get('/teams/:id', controller.getTeam.bind(controller));

export default router;
