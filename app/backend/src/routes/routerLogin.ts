import { Router } from 'express';
import UserController from '../controllers/user/UserController';
import UserMidd from '../middleware/user/UserMiddleware';

const router = Router();

const controller = new UserController();

router.post('/login', UserMidd, controller.login.bind(controller));
router.get('/login/validate', controller.validateLogin.bind(controller));

export default router;
