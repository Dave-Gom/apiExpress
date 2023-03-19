import { Router } from 'express';
import { getPages, postCreatePage, putPages } from '../controllers/PageController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, postCreatePage);
router.get('/', checkJWT, getPages);
router.put('/:id', checkJWT, putPages);

export { router };
