import { Router } from 'express';
import { createSection, readSection } from '../controllers/SectionController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/:type/:pageId', checkJWT, createSection);
router.get('/:type', checkJWT, readSection);

export { router };
