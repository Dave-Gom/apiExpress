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
import { checkSession } from '../middlewares/Session';

const router = Router();

router.post('/', checkSession, createPost);
router.get('/', readPosts);
router.get('/posts/active', readActivePosts);
router.get('/active/:id', readPublishedPost);
router.get('/:id', checkSession, readPost);
router.put('/:id', checkSession, updatePost);
router.delete('/:id', checkSession, deletePost);

export { router };
