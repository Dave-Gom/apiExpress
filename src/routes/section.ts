import { Router } from 'express';
import {
    addListPosts,
    createSection,
    deletSection,
    readSection,
    updateSection,
} from '../controllers/SectionController';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.post('/:type/:pageId?', checkSession, createSection);
router.get('/:type', checkSession, readSection);
router.put('/:type/:id/', checkSession, updateSection);
router.post('/ADD/POSTS/:id', checkSession, addListPosts);
router.delete('/:type/:id', checkSession, deletSection);

export { router };
