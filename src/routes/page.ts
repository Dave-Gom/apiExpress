import { Router } from 'express';
import { deletePage, getPages, postCreatePage, putPages } from '../controllers/PageController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, postCreatePage);
router.get('/', getPages);
router.put('/:id', checkJWT, putPages);
router.delete('/:id', checkJWT, deletePage);

export { router };
