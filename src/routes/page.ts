import { Router } from 'express';
import { getPages, postCreatePage } from '../controllers/PageController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/create', checkJWT, postCreatePage);
router.get('/list', checkJWT, getPages);

export { router };
