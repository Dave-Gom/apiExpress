import { Router } from 'express';
import { getUsers } from '../controllers/UserController';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.get('/', checkSession, getUsers);

export { router };
