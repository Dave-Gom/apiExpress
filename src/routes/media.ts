import { Router } from 'express';
import { createSocialMedia, readSocialMedia, removeSocialMedia, updateSocialMedia } from '../controllers/SocialMedia';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.post('/', checkSession, createSocialMedia);
router.get('/', checkSession, readSocialMedia);
router.put('/:id', checkSession, updateSocialMedia);
router.delete('/:id', checkSession, removeSocialMedia);

export { router };
