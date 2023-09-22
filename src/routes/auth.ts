import { Router } from 'express';
import { LoginController, RegisterController } from '../controllers/AuthController';

const router = Router();

router.post('/login', LoginController);
router.post('/register', RegisterController);
// router.get('/session', checkJWT, SessionController);

export { router };
