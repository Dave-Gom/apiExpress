import { Router } from 'express';
import {
    createPost,
    deletePost,
    readActivePosts,
    readPost,
    readPosts,
    readPublishedPost,
    updatePost,
} from '../controllers/PostController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, createPost);
router.get('/', readPosts);
router.get('/posts/active', readActivePosts);
router.get('/active/:id', readPublishedPost);
router.get('/:id', checkJWT, readPost);
router.put('/:id', checkJWT, updatePost);
router.delete('/:id', checkJWT, deletePost);

export { router };
