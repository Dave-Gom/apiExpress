import { Router } from 'express';
import {
    addPost,
    createCategoria,
    deleteCategoria,
    readCategoria,
    readCategorias,
    updateCategoria,
} from '../controllers/CategoriaController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, createCategoria);
router.get('/', checkJWT, readCategorias);
router.get('/:id', checkJWT, readCategoria);
router.put('/:id', checkJWT, updateCategoria);
router.delete('/:id', checkJWT, deleteCategoria);
router.post('/:categoriaId/:postId', checkJWT, addPost);

export { router };
