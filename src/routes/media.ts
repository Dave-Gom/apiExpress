import { Router } from 'express';
import { createSocialMedia, readSocialMedia, removeSocialMedia, updateSocialMedia } from '../controllers/SocialMedia';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, createSocialMedia);
router.get('/', checkJWT, readSocialMedia);
router.put('/:id', checkJWT, updateSocialMedia);
router.delete('/:id', checkJWT, removeSocialMedia);

export { router };
