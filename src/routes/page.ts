import { Router } from 'express';
import { deletePage, getPage, getPages, postCreatePage, putPages } from '../controllers/PageController';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.post('/', checkSession, postCreatePage);
router.get('/', getPages);
router.get('/pages/:condition?', getPages);
router.get('/:id', getPage);
router.put('/:id', checkSession, putPages);
router.delete('/:id', checkSession, deletePage);

export { router };
