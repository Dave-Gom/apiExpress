import { Router } from 'express';
import { addListPosts, createSection, readSection, updateSection } from '../controllers/SectionController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/:type/:pageId', checkJWT, createSection);
router.get('/:type', checkJWT, readSection);
router.put('/:type/:id/', checkJWT, updateSection);
router.post('/ADD/POSTS/:id', checkJWT, addListPosts);

export { router };
