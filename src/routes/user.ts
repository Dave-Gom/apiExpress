import { Router } from 'express';
import { getUsers } from '../controllers/UserController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.get('/', checkJWT, getUsers);

export { router };
