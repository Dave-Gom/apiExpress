import { Router } from 'express';
import { postSection } from '../controllers/SectionController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/:type/:pageId', checkJWT, postSection);

export { router };
