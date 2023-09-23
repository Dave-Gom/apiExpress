import { Router } from 'express';
import { deletePage, getPage, getPages, postCreatePage, putPages } from '../controllers/PageController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, postCreatePage);
router.get('/', getPages);
router.get('/pages/:condition?', getPages);
router.get('/:id', getPage);
router.put('/:id', checkJWT, putPages);
router.delete('/:id', checkJWT, deletePage);

export { router };
