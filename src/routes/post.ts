import { Router } from 'express';
import { createPost, deletePost, readPost, readPosts, updatePost } from '../controllers/PostController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/:idCategoria?', checkJWT, createPost);
router.get('/', readPosts);
router.get('/:id', checkJWT, readPost);
router.put('/:id', checkJWT, updatePost);
router.delete('/:id', checkJWT, deletePost);

export { router };
