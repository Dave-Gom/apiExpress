import { Router } from 'express';
import { createPost, readPosts } from '../controllers/PostController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, createPost);
router.get('/', checkJWT, readPosts);

export { router };
